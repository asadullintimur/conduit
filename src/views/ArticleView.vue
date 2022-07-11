<template>
  <div class="article-page"
       v-if="isLoaded">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta
            :author="{
          image: author.image,
          username: author.username
        }"
            :created-at="article.createdAt"
            :favorites-count="article.favoritesCount"
        ></article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            {{ article.body }}
          </p>
        </div>
      </div>

      <hr/>

      <div class="article-actions">
        <article-meta
            :author="{
          image: author.image,
          username: author.username
        }"
            :created-at="article.createdAt"
            :favorites-count="article.favoritesCount"
        ></article-meta>
      </div>

      <div class="row">
        <article-comments></article-comments>
      </div>
    </div>
  </div>

  <p v-else
     class="loading-line">
    Loading...
  </p>
</template>

<script>
import {mapGetters} from "vuex"
import {mapState} from "vuex"
import ArticleMeta from "@/components/ArticleMeta"
import ArticleComments from "@/components/ArticleComments"

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
    ...mapGetters("articles", ["getBySlug"]),
    ...mapState("articles", ["isLoaded"]),

    article() {
      return this.getBySlug(this.slug)
    },

    author() {
      return this.article.author
    },
  },


}
</script>

<style scoped>

</style>