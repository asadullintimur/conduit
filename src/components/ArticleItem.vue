<template>
  <div class="article-preview">
    <div class="article-meta">
      <article-author
          :image="author.image"
          :username="author.username"
          :created-at="createdAt"
      ></article-author>

      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ favoritesCount }}
      </button>
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

export default {
  name: "ArticleItem",

  components: {
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
    }
  },
}
</script>

<style scoped>

</style>