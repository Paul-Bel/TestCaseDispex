import {Api} from "../api/api";

const initialStat = [
    {
        "id": 0,
        "flat": "",
        "typeId": 0,
        "typeName": "",
        "name": ""
    },
]

export const flatReducer = (state = initialStat, action) => {
    switch (action.type){
        case 'SET_Flat':
            return [...action.payload.serverState];
        default: return state
    }
}
export const setCurrentFlatAC = (serverState) => {
    return {type:'SET_Flat', payload: {serverState}}
}
export const setFlatTC = (id) => (dispatch) => {
    Api.getFlats(id)
        .then(response =>{
            if(response.status === 200)  dispatch(setCurrentFlatAC(response.data))
        })
}