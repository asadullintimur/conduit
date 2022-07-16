import profileService from "@/services/api/profileService";

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