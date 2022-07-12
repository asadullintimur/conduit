function setToken(token) {
    localStorage.setItem("token", token)
}

function getToken() {
    return localStorage.getItem("token");
}

function deleteToken() {
    localStorage.removeItem("token")
}

export {
    setToken,
    getToken,
    deleteToken
}
