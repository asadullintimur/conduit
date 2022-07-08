import {authService} from "@/services/api";
import {normalizeErrors} from "@/services/helpers";

//state
const state = () => ({
    errors: {},
    isRequestPending: false,
});

//mutations
const mutations = {
    setErrors(state, newErrors) {
        state.errors = newErrors;
    },

    setRequestPending(state, newStatus) {
        state.isRequestPending = newStatus;
    }
};

//getters
const getters = {};

//actions
const actions = {
    auth({state, commit, dispatch}, {credentials, type}) {
        commit("setRequestPending", true)

        //type - register or login
        return authService[type](credentials)
            .finally(() => commit("setRequestPending", false))
            .then(user => {
                dispatch("authenticate", user, {root: true})
            })
            .catch(response => {
                commit("setErrors", normalizeErrors(response.data.errors))
                throw new Error()
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