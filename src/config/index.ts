import axios from "axios"

export const urlBase = axios.create({
    baseURL: 'http://192.168.0.104:3000'
})