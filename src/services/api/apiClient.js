import axios from "axios";
import {RESPONSE} from "@/services/constants";
import store from "@/store";
import {getToken} from "@/services/jwtService";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

apiClient.interceptors.response.use(({data}) => {
    return data
}, ({response}) => {
    if (response.status === RESPONSE.UNAUTHORIZED) {
        store.dispatch("auth/logout")
    }

    return Promise.reject(response)
})

apiClient.interceptors.request.use((config) => {
    let token = getToken();

    if (token) {
        config.headers.authorization = `Bearer ${getToken()}`;
    }

    return config;
})

export default apiClient

