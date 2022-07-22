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
import {mapActions, mapState} from "vuex";
import {redirectIfNotAuth} from "@/services/helpers";

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
      redirectIfNotAuth();
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
  },

  computed: {
    ...mapState("auth", ["isAuthenticated"])
  }
}
</script>

<style scoped>

</style>