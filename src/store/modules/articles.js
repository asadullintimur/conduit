import articlesService from "@/services/api/articlesService";

const state = () => ({
    all: [],
    count: 0,
    isLoaded: false,
});

//getters
const getters = {
    isEmpty(state) {
        return state.all.length === 0 && state.isLoaded;
    }
};

//mutations
const mutations = {
    setAll(state, newArticles) {
        state.all = newArticles;
    },

    setIsLoaded(state, newIsLoaded) {
        state.isLoaded = newIsLoaded;
    },

    setCount(state, newCount) {
        state.count = newCount;
    }
};

//actions
const actions = {
    fetch({commit, dispatch}, params = {}) {
        dispatch("reset")

        articlesService.get(params)
            .then((data) => {
                commit("setAll", data.articles)
                commit("setIsLoaded", true)
            })
    },

    fetchCount({commit}, params = {}) {
        commit("setCount", 0)

        articlesService.get(params)
            .then((data) => {
                commit("setCount", data.articlesCount)
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