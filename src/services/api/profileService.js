import apiClient from "@/services/api/apiClient";

const RESOURCE = "profiles"

export default  {
    get(username) {
        return apiClient.get(`${RESOURCE}/${username}`)
    },

    follow(username) {
        return apiClient.post(`${RESOURCE}/${username}/follow`)
    }
}