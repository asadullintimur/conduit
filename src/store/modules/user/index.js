//state
import localStorageService from "@/services/localStorageService";

const state = () => ({
    isAuthenticated: false
});

//mutations
const mutations = {
    setIsAuthenticated(state, newIsAuthenticated) {
        state.isAuthenticated = newIsAuthenticated;
    },
};

//getters
const getters = {};

//actions
const actions = {
    authenticate: {
        root: true,
        handler({state, commit}, user) {
            localStorageService.setUser(user)
            commit("setIsAuthenticated", true)
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}