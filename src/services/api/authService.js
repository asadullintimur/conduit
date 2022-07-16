import apiClient from "@/services/api/apiClient";

export default  {
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
        return apiClient.get("user", {})
    },

    updateUser(user) {
        return apiClient({
            method: "put",
            url: "user",
            data: {
                user
            }
        })
    }
}