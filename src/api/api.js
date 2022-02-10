import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://dispex.org/api/vtest/',
    // headers: {'API-KEY': ""},
})
export const Api = {
    getAdressStrit(){
        return instance.get('Request/streets')
            .then(response => response)
    },
    getNumberHouse(id){
        return instance.get(`Request/houses/${id}`)
    },
    getFlats(id){
        return instance.get(`Request/house_flats/${id}`)
    }
}