import {Api} from "../api/api";

const initialStat = [
    {
        "id": 5970,
        "flat": "81",
        "typeId": 3,
        "typeName": "Квартира",
        "name": "81"
    },
]

export const flatReducer = (state = initialStat, action) => {
    switch (action.type){
        case 'SET_Flat':
            return [...action.payload.serverState];
        default: return state
    }
}
export const setCurrentFlat = (serverState) => {
    return {type:'SET_Flat', payload: {serverState}}
}
export const setFlat = (id) => (dispatch) => {
    Api.getFlats(id)
        .then(response =>{
            if(response.status === 200)  dispatch(setCurrentFlat(response.data))
        })
}