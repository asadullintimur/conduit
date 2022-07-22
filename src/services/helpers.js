import {parse} from "marked";
import router from "@/router";
import store from "@/store";

function formatDate(strDate) {
    let date = new Date(Date.parse(strDate));
    let month = date.toLocaleString("en-us", {month: "long"});

    return `${month} ${date.getDate()},${date.getFullYear()}`
}

function normalizeErrors(errors) {
    return Object.entries(errors).map(entry => `${entry[0]} ${entry[1]}`)
}

function parseMarkdown(data) {
    return parse(data)
}

function redirectIfNotAuth() {
    if (!store.state.auth.isAuthenticated) {
        router.push({
            name: 'register'
        })
    }
}

export {
    formatDate,
    normalizeErrors,
    parseMarkdown,
    redirectIfNotAuth
}
