import {normalizeErrors} from "@/services/helpers";
import {getToken, setToken, deleteToken} from "@/services/jwtService";
import authService from "@/services/api/authService";

//state
const state = () => ({
    isAuthenticated: false,
    user: {},
});

//mutations
const mutations = {
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
    register({state, dispatch}, credentials) {
        return authService.register(credentials)
            .then(({user}) => {
                dispatch("authenticate", user.token)
            })
    },

    login({state, dispatch}, credentials) {
        return authService.login(credentials)
            .then(({user}) => {
                dispatch("authenticate", user.token)
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
        return authService.updateUser(user)
            .then(({user}) => {
                setToken(user.token)
                commit("setUser", user)
                return user;
            })
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}