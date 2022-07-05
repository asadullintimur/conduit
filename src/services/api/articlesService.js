import apiClient from "@/services/api/apiClient";

const RESOURCE = "articles"


export default {
    get() {
        return apiClient.get(RESOURCE)
    }
}