import axios from 'axios'

const api = axios.create({
    baseURL: 'https://portfolio-proyects-api.vercel.app/api/'
})

export default api