import {authService} from "@/services/api";
import localStorageService from "@/services/localStorageService";
import {normalizeErrors} from "@/services/helpers";

//state
const state = () => ({
    errors: {},
});

//mutations
const mutations = {
    setErrors(state, newErrors) {
        state.errors = newErrors
    },
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
                commit("setErrors", normalizeErrors(response.data.errors))
            })
    },

    init({commit}) {
        commit("setErrors", {})
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}