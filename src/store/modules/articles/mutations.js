//mutations

export default {
    setTags(state, newTags) {
        state.tags = newTags;
    },

    setTagsLoaded(state, newTagsLoaded) {
        state.isTagsLoaded = newTagsLoaded;
    }
}