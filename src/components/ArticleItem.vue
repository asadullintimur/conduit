<template>
  <div class="article-preview">
    <div class="article-meta">
      <article-author
          :image="author.image"
          :username="author.username"
          :created-at="createdAt"
      ></article-author>

      <favorite-button
          :initial-favorites-count="favoritesCount"
          :initial-favorited="favorited"
          :slug="slug"
      class="pull-xs-right">
      </favorite-button>
    </div>
    <router-link class="preview-link"
                 :to="{
      name: 'article.show',
      params: {
        slug
      }
    }">
      <h1>{{ title }}</h1>
      <p> {{ description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline ng-binding ng-scope"
            v-for="(tag, idx) in tagList"
            :key="idx">
          {{ tag }}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
import {formatDate} from "@/services/helpers";
import ArticleAuthor from "@/components/ArticleAuthor";
import FavoriteButton from "@/components/FavoriteButton";

export default {
  name: "ArticleItem",

  components: {
    FavoriteButton,
    ArticleAuthor
  },

  props: {
    title: {
      required: true,
      type: String
    },

    description: {
      required: true,
      type: String,
    },

    tagList: {
      type: Array,
      default: []
    },

    createdAt: {
      required: true,
      type: String
    },

    favoritesCount: {
      required: true,
      type: Number
    },

    author: {
      required: true,
      type: Object
    },

    slug: {
      required: true,
      type: String,
    },

    favorited: {
      required: true,
      type: Boolean
    }
  },
}
</script>

<style scoped>

</style>