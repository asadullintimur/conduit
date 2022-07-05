import apiClient from "@/services/api/apiClient";

const RESOURCE = "tags"


export default {
    get() {
        return apiClient.get(RESOURCE)
    }
}