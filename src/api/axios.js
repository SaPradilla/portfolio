import axios from 'axios'

const api = axios.create({
    baseURL: 'https://portfolio-proyects-api.onrender.com/api/'
})

export default api