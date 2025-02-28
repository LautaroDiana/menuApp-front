import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/items' 

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        console.log(response)
        return response.data
    })
}

const getById = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => {
        console.log(response)
        return response.data
    })
}

export default {
    getAll,
    getById
}