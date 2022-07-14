import axios from "axios";
import {RESPONSE} from "@/services/constants";
import store from "@/store";

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

export default apiClient

