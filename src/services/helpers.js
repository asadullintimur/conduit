import {parse} from "marked";

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

export {
    formatDate,
    normalizeErrors,
    parseMarkdown
}
