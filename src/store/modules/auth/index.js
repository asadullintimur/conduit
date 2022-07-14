import {authService} from "@/services/api";
import {normalizeErrors} from "@/services/helpers";
import {getToken, setToken, deleteToken} from "@/services/jwtService";
//state
const state = () => ({
    errors: {},
    isRequestPending: false,
    isAuthenticated: false,
    user: {},
});

//mutations
const mutations = {
    setErrors(state, newErrors) {
        state.errors = newErrors;
    },

    setRequestPending(state, newStatus) {
        state.isRequestPending = newStatus;
    },

    setIsAuthenticated(state, newStatus) {
        state.isAuthenticated = newStatus;
    },

    setUser(state, newUser) {
        state.user = newUser;
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
            .then(({user}) => {
                dispatch("authenticate", user.token)
            })
            .catch(response => {
                commit("setErrors", normalizeErrors(response.data.errors))
                throw new Error()
            })
    },

    check({dispatch}) {
        let token = getToken();

        if (!token) {
            return dispatch("logout");
        }

        return authService.getUser(token)
            .then(() => {
                return dispatch("authenticate", token)
            })
    },

    fetchUser({commit}) {
        return authService.getUser()
            .then(({user}) => {
                commit("setUser", user)
            })
    },

    async authenticate({commit, dispatch}, token) {
        setToken(token)
        await dispatch("fetchUser")
        commit("setIsAuthenticated", true)
    },

    logout({commit}) {
        deleteToken()
        commit("setUser", {})
        commit("setIsAuthenticated", false)
    },

    updateUser({commit, dispatch}, user) {
        commit("setRequestPending", true)

        return authService.updateUser(user)
            .finally(() => commit("setRequestPending", false))
            .then(({user}) => {
                setToken(user.token)
                commit("setUser", user)
                return user;
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