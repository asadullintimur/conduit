<template>
  <div class="article-meta">
    <article-author
        :image="author.image"
        :created-at="article.createdAt"
        :username="author.username"
    ></article-author>

    <follow-button
        :initial-following="author.following"
        :username="author.username">
    </follow-button>
    &nbsp;&nbsp;

    <favorite-button
        :initial-favorited="article.favorited"
        :initial-favorites-count="article.favoritesCount"
        :slug="article.slug">
      Favorite Post (<template #end>)</template>
    </favorite-button>
  </div>
</template>

<script>

import ArticleAuthor from "@/components/ArticleAuthor";
import FollowButton from "@/components/FollowButton";
import FavoriteButton from "@/components/FavoriteButton";

export default {
  name: "ArticleMeta",

  props: {
    author: {
      type: Object,
      required: true,
    },

    article: {
      required: true,
      type: Object
    }
  },

  components: {
    FavoriteButton,
    FollowButton,
    ArticleAuthor
  }
}
</script>

<style scoped>

</style>