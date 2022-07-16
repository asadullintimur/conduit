function formatDate(strDate) {
    let date = new Date(Date.parse(strDate));
    let month = date.toLocaleString("en-us", {month: "long"});

    return `${month} ${date.getDate()},${date.getFullYear()}`
}

function normalizeErrors(errors) {
    return Object.entries(errors).map(entry => `${entry[0]} ${entry[1]}`)
}

export {
    formatDate,
    normalizeErrors
}
