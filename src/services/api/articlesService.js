import apiClient from "@/services/api/apiClient";
import {getToken} from "@/services/jwtService";

const RESOURCE = "articles"

export default {
    get(params) {
        return apiClient.get(RESOURCE, {
            params
        })
    },

    getSingle(slug) {
        return apiClient.get(`${RESOURCE}/${slug}`)
    },

    getComments(slug) {
        return apiClient.get(`${RESOURCE}/${slug}/comments`)
    },

    create(article) {
        return apiClient({
            url: `${RESOURCE}`,
            method: "post",
            data: {
                article
            }
        })
    },

    favorite(slug) {
        return apiClient.post(`${RESOURCE}/${slug}/favorite`)
    },

    unfavorite(slug) {
        return apiClient.delete(`${RESOURCE}/${slug}/favorite`)
    }
}