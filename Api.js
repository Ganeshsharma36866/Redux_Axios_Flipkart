import axios from "axios";
const api = axios.create({
    baseURL: "https://fakestoreapi.com/",

})
api.interceptors.request.use((config) => {
    return config
}, (error) => {
    return new Promise(error)
})

api.interceptors.response.use((response) => {
    return response
}, (error) => {
    return new Promise(error)
})

export default api