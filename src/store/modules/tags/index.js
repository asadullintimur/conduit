//state
import {tagsService} from "@/services/api";

const state = () => ({
    all: [],
    isLoaded: false,
});

//getters
const getters = {};

//mutations
const mutations = {
    setAll(state, newTags) {
        state.all = newTags;
    },

    setIsLoaded(state, newIsLoaded) {
        state.isLoaded = newIsLoaded;
    },
};

//actions
const actions = {
    fetchTags({commit}) {
        tagsService.get()
            .then((data) => {
                commit("setAll", data.tags)
                commit("setIsLoaded", true)
            })
    },

    init({commit, dispatch}) {
        commit("setAll", [])
        commit("setIsLoaded", false)
        dispatch("fetchTags")
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}