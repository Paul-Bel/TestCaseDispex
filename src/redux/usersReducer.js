import {Api} from "../api/api";

const data = {
    "Id": "5",
    "Name": "string",
    "Phone": "string",
    "Email": "string",
    "BindId": "0"
}

const initialStatHouse = [
    // {id: null, name: '', phone: '', email: '', bindId: null},
    // {id: 33312, name: 'Виктоp', phone: '9224225225', email: 'viktorlopata66@gmail.com', bindId: 29009},
]

export const userReducer = (state = initialStatHouse, action) => {
    switch (action.type) {
        case 'SET_User':
            console.log('reducer: ', action)

            return [...action.payload.serverState]
        // return [...state,
        //     state[0].id = action.payload.serverState.id];
        case 'DELETE_USER':

            let filter = state.filter(us => us.bindId !==action.bindId)
            return filter
        default:
            return state
    }
}

export const setUser = (serverState) => {
    return {type: 'SET_User', payload: {serverState}}
}
export const delUser = (bindId) => ({type: "DELETE_USER", bindId})
export const createNewTenants = (AddressId, Phone, Name, Email) => (dispatch) => {

    Api.createUser(Phone, Name, Email)
        .then(response => {
            if (response.status === 200)
                Api.updateUser(AddressId, response.data.id)
                    .then(response => {
                            if (response.status === 200)
                                Api.setUserOfFlat(AddressId)
                                    .then(response => {
                                        if (response.status === 200) dispatch(setUser(response.data))
                                        else dispatch(setUser(initialStatHouse))
                                    })
                        }
                    )
        })

}
export const getUserOfFlat = (idFlat) => (dispatch) => {
    Api.setUserOfFlat(idFlat)
        .then(response => {
            if (response.status === 200) dispatch(setUser(response.data))
            else dispatch(setUser(initialStatHouse))
        })
}
export const deleteUserOfFlat = (bindId) => (dispatch) =>{

    Api.deleteUser(bindId)
        .then(response => {
            if (response.status === 200) {
                dispatch(delUser(bindId))
            } })
}