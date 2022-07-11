import apiClient from "@/services/api/apiClient";

export const authService = {
    register(credentials) {
        return apiClient.post("users", {
            user: {
                ...credentials
            }
        })
    },

    login(credentials) {
        return apiClient.post("users/login", {
            user: {
                ...credentials
            }
        })
    },


}