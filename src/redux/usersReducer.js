import {Api} from "../api/api";

const initialStatHouse = [
    // {id: null, name: '', phone: '', email: '', bindId: null},
]

export const userReducer = (state = initialStatHouse, action) => {
    switch (action.type) {
        case 'SET_User':
            return [...action.payload.serverState]
        case 'FIND_USER':
            return [{...action.payload.user}]
        case 'DELETE_USER':
            let filter = state.filter(us => us.bindId !== action.bindId)
            return filter
        default:
            return state
    }
}

export const setUserAC = (serverState) => ({type: 'SET_User', payload: {serverState}})
export const delUserAC = (bindId) => ({type: "DELETE_USER", bindId})
export const findUserAC = (user) => ({type: "FIND_USER", payload: {user}})

export const createNewTenants = (AddressId, Phone, Name, Email) => (dispatch) => {
    Api.createUser(Phone, Name, Email)
        .then(response => {
            if (response.status === 200)
                Api.updateUser(AddressId, response.data.id)
                    .then(response => {
                            if (response.status === 200)
                                Api.setUserOfFlat(AddressId)
                                    .then(response => {
                                        if (response.status === 200) dispatch(setUserAC(response.data))
                                        else dispatch(setUserAC(initialStatHouse))
                                    })
                        }
                    )
        })
}
export const getUserOfFlatTC = (idFlat) => (dispatch) => {
    Api.setUserOfFlat(idFlat)
        .then(response => {
            if (response.status === 200) dispatch(setUserAC(response.data))
            else dispatch(setUserAC(initialStatHouse))
        })
}
export const deleteUserOfFlatTC = (bindId) => (dispatch) => {
    Api.removeFromApartment(bindId)
        .then(response => {
            if (response.status === 200) {
                dispatch(delUserAC(bindId))
            }
        })
}
export const findUserFromPhoneTC = (phone) => (dispatch) => {
    Api.findUser(phone).then(response => {
        if(response.status === 200){
            dispatch(findUserAC(response.data))
        }
    })
}