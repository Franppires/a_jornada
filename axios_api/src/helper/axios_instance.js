import axios from "axios"

const axios_instance = axios.create({ 
    baseURL: 'https://pokeapi.co/api/v2/',
    //headers com login se caso tiver 
})

export default axios_instance