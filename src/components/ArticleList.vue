<template>

  <div class="article-preview"
       v-if="!isLoaded">
    Loading...
  </div>

  <div class="article-preview"
       v-if="isEmpty">
    No articles are here... yet.
  </div>

  <article-item
      v-for="(article, idx) in all"
      v-bind="article"
      :key="idx"></article-item>

  <pagination-items>
  </pagination-items>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import PaginationItems from "@/components/PaginationItems";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ArticleList",

  components: {
    PaginationItems,
    ArticleItem
  },

  props: {
    author: {
      type: String,
    },

    tag: {
      type: String,
    },

    favorited: {
      type: String
    },

    perPage: {
      type: Number
    }
  },


  data() {
    return {
      pages: 1
    }
  },

  computed: {
    ...mapState("articles", ["all", "count", "isLoaded"]),
    ...mapGetters("articles", ["isEmpty"]),

    params() {
      let params = {};

      if (this.author) params.author = this.author;
      if (this.tag) params.tag = this.tag;
      if (this.favorited) params.favorited = this.favorited;

      return params;
    }
  },

  methods: {
    ...mapActions("articles", ["fetch"]),
  },

  watch: {
    params(newParams) {
      this.fetch(newParams)
    }
  }
}
</script>

<style scoped>

</style>