<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div class="article-preview"
               v-if="!isArticlesLoaded">
            Loading articles...
          </div>

          <article-list
              :articles="articles"></article-list>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <p v-if="!isTagsLoaded">
                Loading tags...
              </p>

              <a href="" class="tag-pill tag-default"
                 v-for="(tag, idx) in tags"
                 :key="idx">
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

import ArticleList from "@/components/ArticleList";

export default {
  name: 'HomeView',

  components: {
    ArticleList
  },

  computed: {
    ...mapState("tags", {
      tags: state => state.all,
      isTagsLoaded: state => state.isLoaded
    }),

    ...mapState("articles", {
      articles: state => state.all,
      isArticlesLoaded: state => state.isLoaded
    }),
  },

  methods: {
    ...mapActions("tags", {
      initTags: "init"
    }),

    ...mapActions("articles", {
      initArticles: "init"
    })
  },

  created() {
    this.initTags()
    this.initArticles()
  },
}
</script>
