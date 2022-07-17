import profileService from "@/services/api/profileService";

//state
const state = () => ({
    user: {},
    isLoaded: false,
});

//mutations
const mutations = {
    setUser(state, newUser) {
        state.user = newUser;
    },

    setIsLoaded(state, newStatus) {
        state.isLoaded = newStatus;
    }
};

//getters
const getters = {
    isOwnProfile(state, _, rootState) {
        return state.user.username === rootState.auth.user.username;
    }
};

//actions
const actions = {
    fetch({commit, dispatch}, username) {
        dispatch("reset")

        profileService.get(username)
            .then(data => {
                commit("setUser", data.profile)
                commit('setIsLoaded', true)
            })
    },

    reset({commit}) {
        commit("setUser", {})
        commit("setIsLoaded", false)
    },

    follow({}, username) {
        return profileService.follow(username)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}