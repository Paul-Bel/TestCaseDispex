import {Api} from "../api/api";

const initialStat = [
    {error: false},
    {id: 37, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: '', cityId: 1, city: 'Тюмень'},
    {id: 39, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: '', cityId: 1, city: 'Тюмень'},
]

export const streetReducer = (state = initialStat, action) => {

    switch (action.type){
        case 'SET_STATE':
            console.log(action.payload)
            return action.payload
        default: return state
    }
}

export const setCurrentStateAC = (serverState) => {
    return {type:'SET_STATE', payload: serverState}
}

export const setStreetStateTC = () => (dispatch) => {
    debugger
    Api.getAdressStrit()
        .then(response =>{
            let filterStreet = response.data.filter(st => st.cityId === 1)
            if(response.status === 200) {
                dispatch(setCurrentStateAC([{error: false}, ...filterStreet]))
            }
            else {
                alert('ERROR')
                dispatch(setCurrentStateAC([{error: true}]))
            }
        })
}