<template>
  <div class="article-meta">
    <article-author
        :image="author.image"
        :created-at="article.createdAt"
        :username="author.username"
    ></article-author>

    <template
        v-if="isUserAuthor">
      <edit-button
          style="margin-right: 3px">
      </edit-button>

      <delete-button></delete-button>
    </template>

    <template
        v-else>
      <follow-button
          style="margin-right: 3px"
          :following="author.following"
          :username="author.username"
          @follow="follow">
      </follow-button>

      <favorite-button
          :favorites-count="article.favoritesCount"
          :favorited="article.favorited"
          :slug="article.slug"
          @favorite="favorite">
        <i class="ion-heart"></i>
        {{ favoriteText }}
      </favorite-button>
    </template>
  </div>
</template>

<script>

import ArticleAuthor from "@/components/ArticleAuthor";
import FollowButton from "@/components/FollowButton";
import FavoriteButton from "@/components/FavoriteButton";
import {mapGetters, mapMutations, mapState} from "vuex";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

export default {
  name: "ArticleMeta",

  components: {
    DeleteButton,
    EditButton,
    FavoriteButton,
    FollowButton,
    ArticleAuthor
  },

  computed: {
    ...mapState("article", {
      article: "item"
    }),

    ...mapState("auth", ["user"]),

    ...mapGetters("article", ["isUserAuthor"]),

    favoriteText() {
      return this.article.favorited ?
          `Unfavorite Article (${this.article.favoritesCount})` :
          `Favorite Article (${this.article.favoritesCount})`
    },

    author() {
      return this.article.author;
    }
  },

  methods: {
    ...mapMutations("article", ["setFavorited", "setFavoritesCount", "setFollowing"]),

    favorite(article) {
      this.setFavorited(article.favorited)
      this.setFavoritesCount(article.favoritesCount)
    },

    follow(following) {
      this.setFollowing(following)
    }
  }
}
</script>

<style scoped>

</style>