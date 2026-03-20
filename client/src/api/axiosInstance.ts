import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : 'http://localhost:5101/api',
    timeout : 5000,
    headers : {
        "Content-Type" : "application/json"
    }
   })

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})