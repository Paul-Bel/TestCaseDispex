import {Api} from "../api/api";



const initialStatHouse = [
    {"id": null, "name": null},
    // {"id": 819, "name": "112"},
    // {"id": 77, "name": "78к1"},
    // {"id": 78, "name": "80"},
]

export const houseReducer = (state = initialStatHouse, action) => {
    switch (action.type){
        case 'SET_HOUSE':
            return [...action.payload.serverState];

        default: return state
    }
}

export const setHouse = (serverState) => {
    return {type:'SET_HOUSE', payload: {serverState}}
}

export const getHouse = (id) => (dispatch) => {
    Api.getNumberHouse(id)
        .then(response => {
            if (response.status === 200) dispatch(setHouse(response.data))
        })
}