<template>
  <button class="btn btn-sm"
          :class="{
    'btn-primary': favorited,
    'btn-outline-primary': !favorited
  }"
          :disabled="isRequestPending"
          @click="favorite">
    <i class="ion-heart"></i>
    <slot></slot>
    {{ favoritesCount }}
  </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FavoriteButton",

  props: {
    initialFavoritesCount: {
      type: Number,
      required: true
    },

    initialFavorited: {
      type: Boolean,
      required: true
    },

    slug: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      isRequestPending: false,
      favoritesCount: this.initialFavoritesCount,
      favorited: this.initialFavorited
    }
  },

  methods: {
    ...mapActions("article", {
      favoriteArticle: "favorite"
    }),

    favorite() {
      this.isRequestPending = true;

      this.favoriteArticle(this.slug)
          .finally(() => this.isRequestPending = false)
          .then(({article}) => {
            this.favoritesCount = article.favoritesCount;
            this.favorited = article.favorited
          })
    }
  }
}
</script>

<style scoped>

</style>