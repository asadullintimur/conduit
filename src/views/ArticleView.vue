<template>
  <div class="article-page"
       v-if="isLoaded">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta
            :author="author"
            :article="article"
        ></article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p v-html="body"></p>
        </div>
      </div>

      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline"
            v-for="tag in article.tagList"
            :key="tag">
          {{ tag }}
        </li>
      </ul>

      <hr/>

      <div class="article-actions">
        <article-meta
            :author="author"
            :article="article"
        ></article-meta>
      </div>

      <div class="row">
        <article-comments
            :comments="comments"></article-comments>
      </div>
    </div>
  </div>

  <p v-else
     class="loading-line">
    Loading...
  </p>
</template>

<script>
import {mapState, mapActions} from "vuex"
import ArticleMeta from "@/components/ArticleMeta"
import ArticleComments from "@/components/ArticleComments"
import {parseMarkdown} from "@/services/helpers";

export default {
  name: "ArticleView",

  props: {
    slug: {
      required: true,
      type: String
    }
  },

  components: {
    ArticleMeta,
    ArticleComments
  },

  computed: {
    ...mapState("article", {
      article: "item",
      isLoaded: "isLoaded",
      comments: "comments"
    }),

    author() {
      return this.article.author
    },

    body() {
      return parseMarkdown(this.article.body)
    }
  },

  methods: {
    ...mapActions("article", {
      fetchArticle: "fetch",
      fetchComments: "fetchComments"
    })
  },

  beforeRouteUpdate() {
    this.fetchArticle(this.slug)
    this.fetchComments(this.slug)
  },

  created() {
    this.fetchArticle(this.slug)
    this.fetchComments(this.slug)
  }
}
</script>

<style scoped>
</style>