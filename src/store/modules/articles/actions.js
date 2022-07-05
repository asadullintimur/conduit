//actions

import tagsService from "@/services/api/tagsService";
import articlesService from "@/services/api/articlesService";

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