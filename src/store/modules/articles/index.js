import {articlesService} from "@/services/api";

const state = () => ({
    all: [],
    isLoaded: false,
});

//getters
const getters = {};

//mutations
const mutations = {
    setAll(state, newArticles) {
        state.all = newArticles;
    },

    setIsLoaded(state, newIsLoaded) {
        state.isLoaded = newIsLoaded;
    }
};

//actions
const actions = {
    fetchArticles({commit}) {
        articlesService.get()
            .then((data) => {
                commit("setAll", data.articles)
                commit("setIsLoaded", true)
            })
    },

    init({commit, dispatch}) {
        commit("setAll", [])
        commit("setIsLoaded", false)
        dispatch("fetchArticles")
    }
};

export default {
    actions,
    getters,
    mutations,
    state,
    namespaced: true
}