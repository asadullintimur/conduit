import {authService} from "@/services/api";
import localStorageService from "@/services/localStorageService";
import {normalizeErrors} from "@/services/helpers/normalizeErrors";

//state
const state = () => ({
    registerErrors: {},
    isAuthenticated: false,
});

//mutations
const mutations = {
    setRegisterErrors(state, newRegisterErrors) {
        state.registerErrors = newRegisterErrors
    },

    authenticateUser(state) {
        state.isAuthenticated = true;
    }
};

//getters
const getters = {};

//actions
const actions = {
    register({state, commit}, credentials) {
        authService.register(credentials)
            .then(user => {
                localStorageService.setUser(user)
                commit("authenticateUser")
            })
            .catch(response => {
                commit("setRegisterErrors", normalizeErrors(response.data.errors))
            })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}