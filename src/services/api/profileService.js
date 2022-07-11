import apiClient from "@/services/api/apiClient";

const RESOURCE = "profiles"

export const profileService = {
    get(username) {
        return apiClient.get(`${RESOURCE}/${username}`)
    }
}