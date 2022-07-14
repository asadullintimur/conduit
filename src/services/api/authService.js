import apiClient from "@/services/api/apiClient";
import {getToken} from "@/services/jwtService";

export const authService = {
    register(credentials) {
        return apiClient.post("users", {
            user: credentials
        })
    },

    login(credentials) {
        return apiClient.post("users/login", {
            user: credentials
        })
    },

    getUser() {
        return apiClient.get("user", {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
    },

    updateUser(user) {
        return apiClient({
            method: "put",
            url: "user",
            headers: {
                authorization: `Bearer ${getToken()}`
            },
            data: {
                user
            }
        })
    }
}