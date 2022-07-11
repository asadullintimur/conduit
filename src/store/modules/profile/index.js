import {profileService} from "@/services/api";

//state
const state = () => ({
    user: {}
});

//mutations
const mutations = {
    setUser(state, newUser) {
        state.user = newUser;
    }
};

//getters
const getters = {};

//actions
const actions = {
    fetch({commit, dispatch}, username) {
        dispatch("reset")

        profileService.get(username)
            .then(data => {
                commit("setUser", data.profile)
            })
    },

    reset({commit}) {
        commit("setUser", {})
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}