import {articlesService} from "@/services/api";

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


    reset({commit}) {
        commit("setItem", {})
        commit("setComments", [])
        commit("setIsLoaded", false)
    }
};

export default {
    actions,
    getters,
    mutations,
    state,
    namespaced: true
}