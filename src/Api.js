import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://192.168.137.1/api',
    //   baseURL: 'http://localhost:8081',
    //baseURL: 'https://halahomes.waysdatalabs.com/api',
    baseURL: 'https://urban-homes-backend.onrender.com',
    withCredentials: true,
});

export default api;
