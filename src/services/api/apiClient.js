import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

apiClient.interceptors.response.use(({data}) => {
    return data
}, (error) => {
    throw new Error(`Api service error: ${error}`)
})

export default apiClient

