import articlesService from "@/services/api/articlesService";
import {normalizeErrors} from "@/services/helpers";

const state = () => ({
    item: {},
    comments: [],
    isLoaded: false,
    //article create/edit
    isRequestPending: false,
    errors: {}
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

    setRequestPending(state, newStatus) {
        state.isRequestPending = newStatus;
    },

    setErrors(state, newErrors) {
        state.errors = newErrors;
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
        commit("setRequestPending", true)

        return articlesService.create(article)
            .finally(() => commit("setRequestPending", false))
            .catch(({data}) => {
                commit("setErrors", normalizeErrors(data.errors))
                throw new Error()
            })
    },

    reset({commit}) {
        commit("setItem", {})
        commit("setComments", [])
        commit("setIsLoaded", false)
    },

    resetErrors({commit}) {
        commit("setErrors", {})
    }
};

export default {
    actions,
    getters,
    mutations,
    state,
    namespaced: true
}