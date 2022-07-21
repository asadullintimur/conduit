import articlesService from "@/services/api/articlesService";

//state
const state = () => ({
    all: [],
    count: 0,
    isLoaded: false,
});

//getters
const getters = {
    isEmpty(state) {
        return state.count === 0 && state.isLoaded;
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
    fetch({commit, dispatch}, {params, isFeed}) {
        dispatch("reset");

        let fetchMethod = isFeed ?
            articlesService.getFeed :
            articlesService.get;

        fetchMethod(params)
            .then((data) => {
                commit("setAll", data.articles)
                commit("setIsLoaded", true)
            })
    },

    fetchCount({commit, dispatch}, {params, isFeed}) {
        dispatch("resetCount");

        let fetchMethod = isFeed ?
            articlesService.getFeed :
            articlesService.get;

        fetchMethod(params)
            .then((data) => {
                commit("setCount", data.articlesCount)
            })
    },

    reset({commit}) {
        commit("setAll", [])
        commit("setIsLoaded", false)
    },

    resetCount({commit}) {
        commit('setCount', 0)
    },
};

export default {
    actions,
    getters,
    mutations,
    state,
    namespaced: true
}