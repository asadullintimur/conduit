import apiClient from "@/services/api/apiClient";

const RESOURCE = "articles"


export const articlesService = {
    get(params) {
        return apiClient.get(RESOURCE, {
            params
        })
    },
}