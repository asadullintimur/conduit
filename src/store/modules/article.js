import articlesService from "@/services/api/articlesService";

const state = () => ({
    item: {},
    comments: [],
    isLoaded: false,
});

//getters
const getters = {};

//mutations
const mutations = {
    setItem(state, newItem) {
        state.item = newItem;
    },

    setIsLoaded(state, newStatus) {
        state.isLoaded = newStatus;
    },

    setComments(state, newComments) {
        state.comments = newComments;
    },

    setFavorited(state, newFavorited) {
        state.item.favorited = newFavorited;
    },

    setFavoritesCount(state, newCount) {
        state.item.favoritesCount = newCount;
    },

    setFollowing(state, newFollowing) {
        state.item.author.following = newFollowing;
    }
};

//actions
const actions = {
    fetch({commit, dispatch}, slug) {
        dispatch("reset")

        articlesService.getSingle(slug)
            .then(data => {
                commit("setItem", data.article)
                commit("setIsLoaded", true)
            })
    },

    fetchComments({commit}, slug) {
        articlesService.getComments(slug)
            .then(data => {
                commit("setComments", data.comments)
            })
    },

    create({commit}, article) {
        return articlesService.create(article)
    },

    favorite({}, slug) {
        return articlesService.favorite(slug)
    },

    unfavorite({}, slug) {
        return articlesService.unfavorite(slug)
    },

    createComment({commit, dispatch}, {slug, comment}) {
        return articlesService.createComment(slug, comment)
            .then(() => dispatch("fetchComments", slug))
    },

    reset({commit}) {
        commit("setItem", {})
        commit("setComments", [])
        commit("setIsLoaded", false)
    },
};

export default {
    actions,
    getters,
    mutations,
    state,
    namespaced: true
}