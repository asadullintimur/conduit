export function normalizeErrors(errors) {
    return Object.entries(errors).map(entry => `${entry[0]} ${entry[1]}`)
}