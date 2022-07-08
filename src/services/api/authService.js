import apiClient from "@/services/api/apiClient";

export const authService = {
    register(credentials) {
        return apiClient.post("users", {
            user: {
                ...credentials
            }
        })
    }
}