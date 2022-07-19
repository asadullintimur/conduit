<template>
  <button class="btn btn-sm"
          :class="{
    'btn-primary': favorited,
    'btn-outline-primary': !favorited
  }"
          :disabled="isRequestPending"
          @click="favorite">
    <slot></slot>
  </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FavoriteButton",

  props: {
    favoritesCount: {
      type: Number,
      required: true
    },

    favorited: {
      type: Boolean,
      required: true
    },

    slug: {
      type: String,
      required: true,
    }
  },

  emits: ["favorite"],

  data() {
    return {
      isRequestPending: false,
    }
  },

  methods: {
    ...mapActions("article", {
      favoriteArticle: "favorite",
      unfavoriteArticle: "unfavorite"
    }),

    favorite() {
      this.isRequestPending = true;

      let fetchMethod = this.favorited ?
          this.unfavoriteArticle :
          this.favoriteArticle;

      fetchMethod(this.slug)
          .finally(() => this.isRequestPending = false)
          .then(({article}) => {
            this.$emit("favorite", article)
          })
    },
  }
}
</script>

<style scoped>

</style>