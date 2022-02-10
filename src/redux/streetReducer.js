import {Api} from "../api/api";


const initialStat = [
    {id: 37, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: 'Горького', cityId: 1, city: 'Тюмень'},
    {id: 39, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: 'Депутатская', cityId: 1, city: 'Тюмень'},
]

export const streetReducer = (state = initialStat, action) => {
    switch (action.type){
        case 'SET_STATE':
            // console.log(action.payload.serverState)
            return [...action.payload.serverState];
        default: return state
    }
}

export const setCurrentState = (serverState) => {
    return {type:'SET_STATE', payload: {serverState}}
}

export const setState = () => (dispatch) => {
    Api.getAdressStrit()
        .then(response =>{
            // debugger
            if(response.status === 200)  dispatch(setCurrentState(response.data))
        })
}