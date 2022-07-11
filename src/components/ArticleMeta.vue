<template>
  <div class="article-meta">
    <article-author
        :image="author.image"
        :created-at="createdAt"
        :username="author.username"
    ></article-author>

    <button class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow Eric Simons <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{ favoritesCount }})</span>
    </button>
  </div>
</template>

<script>

import ArticleAuthor from "@/components/ArticleAuthor";

export default {
  name: "ArticleMeta",

  props: {
    author: {
      type: Object,
      required: true,
    },

    createdAt: {
      required: true
    },

    favoritesCount: {
      required: true,
      type: Number
    }
  },

  components: {
    ArticleAuthor
  }
}
</script>

<style scoped>

</style>