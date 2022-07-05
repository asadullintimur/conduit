//actions

import tagsService from "@/services/api/tagsService";

export default {
    fetchTags({commit}) {
        tagsService.get()
            .then((data) => {
                commit("setTags", data.tags)
                commit("setTagsLoaded", true)
            })
    }
}