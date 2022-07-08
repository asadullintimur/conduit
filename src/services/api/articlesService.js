import apiClient from "@/services/api/apiClient";

const RESOURCE = "articles"


export const articlesService = {
    get() {
        return apiClient.get(RESOURCE)
    }
}