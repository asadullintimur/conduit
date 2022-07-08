//actions

import {tagsService, articlesService} from "@/services/api";

export default {
    fetchTags({commit}) {
        tagsService.get()
            .then((data) => {
                commit("setTags", data.tags)
                commit("setTagsLoaded", true)
            })
    },

    fetchArticles({commit}) {
        articlesService.get()
            .then((data) => {
                commit("setArticles", data.articles)
                commit("setArticlesLoaded", true)
            })
    },
}