import {articlesService} from "@/services/api";

const state = () => ({
    all: [],
    isLoaded: false,
});

//getters
const getters = {
    getBySlug: (state) => (slug) => {
        return state.all.find(article => article.slug === slug)
    }
};

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
    fetch({commit, dispatch}, params={}) {
        dispatch("reset")

        articlesService.get(params)
            .then((data) => {
                commit("setAll", data.articles)
                commit("setIsLoaded", true)
            })
    },

    reset({commit}) {
        commit("setAll", [])
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