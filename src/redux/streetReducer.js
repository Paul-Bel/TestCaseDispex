import {Api} from "../api/api";



const initialStatHouse = [
        {"id": 749, "name": "110"},
        {"id": 819, "name": "112"},
        {"id": 77, "name": "78к1"},
        {"id": 78, "name": "80"},
]

export const houseReducer = (state = initialStatHouse, action) => {

    switch (action.type){
        case 'SET_HOUSE':
            // console.log(action.payload.serverState)
            return [...state, ...action.payload.serverState];

        default: return state
    }
}

export const setHouse = (serverState) => {
    return {type:'SET_HOUSE', payload: {serverState}}
}

export const setState = () => (dispatch) => {
    Api.getNumberHouse()
        .then(response =>{
            // debugger
        if(response.status === 200)  dispatch(setHouse(response.data))
    })
}