import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dispex.org/api/vtest/',
})
export const Api = {
    getAdressStrit() {
        return instance.get('Request/streets')
            .then(response => response)
    },
    getNumberHouse(id) {
        return instance.get(`Request/houses/${id}`)
    },
    getFlats(id) {
        return instance.get(`Request/house_flats/${id}`)
    },
    createUser(Phone, Name, Email) {
        return instance.post(`HousingStock/client`,
            {
                "Id": 0,
                "Name": Name,
                "Phone": Phone,
                "Email": Email,
                "BindId": 0
            })
    },
    updateUser(AddressId, ClientId) {
        return instance.put(`HousingStock/bind_client`,
            {
                "AddressId": AddressId,
                "ClientId": ClientId
            })
    },
    setUserOfFlat(flatId) {
        return instance.get(`/HousingStock/clients?addressId=${flatId}`)
    },
    removeFromApartment(bindId){
        return instance.delete(`HousingStock/bind_client/${bindId}`)
    },
    deleteUser(id){
        return instance.delete(`/HousingStock/account/${id}`)
    },
    findUser(phone){
        return instance.get(`/HousingStock/client?phone=${phone}`)
    },

}