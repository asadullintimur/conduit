//mutations

export default {
    setTags(state, newTags) {
        state.tags = newTags;
    },

    setTagsLoaded(state, newTagsLoaded) {
        state.isTagsLoaded = newTagsLoaded;
    },

    setArticles(state, newArticles) {
        state.articles = newArticles;
    },

    setArticlesLoaded(state, newArticlesLoaded) {
        state.isArticlesLoaded = newArticlesLoaded;
    }
}