import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:4001',
})

export const getUsers= async ()=>{
    const response = await api.get('/users')
    return response.data
}