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
    fetch({commit, dispatch}) {
        dispatch("reset")

        tagsService.get()
            .then((data) => {
                commit("setAll", data.tags)
                commit("setIsLoaded", true)
            })
    },

    reset({commit}) {
        commit("setAll", [])
        commit("setIsLoaded", false)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}