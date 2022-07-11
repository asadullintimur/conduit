import apiClient from "@/services/api/apiClient";

const RESOURCE = "tags"

export const tagsService = {
    get() {
        return apiClient.get(RESOURCE)
    }
}