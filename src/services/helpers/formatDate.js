export function formatDate(strDate) {
    let date = new Date(Date.parse(strDate));
    let month = date.toLocaleString("en-us", {month: "long"});

    return `${month} ${date.getDate()},${date.getFullYear()}`
}