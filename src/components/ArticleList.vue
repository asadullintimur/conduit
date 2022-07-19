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

  <pagination-items
      :pages="pages"
      :active="currentPage"
      @change-page="changePage">
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
      type: Number,
      default: 5
    },

    isFeed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapState("articles", ["all", "count", "isLoaded"]),
    ...mapGetters("articles", ["isEmpty"]),

    pages() {
      return Math.ceil(this.count / this.perPage);
    },

    queryOffset() {
      return (this.currentPage - 1) * this.perPage;
    },

    queryFilters() {
      let filters = {};

      if (this.author) filters.author = this.author;
      if (this.tag) filters.tag = this.tag;
      if (this.favorited) filters.favorited = this.favorited;

      return filters;
    },

    queryPagination() {
      return {
        limit: this.perPage,
        offset: this.queryOffset
      }
    },

    queryParams() {
      return {
        ...this.queryFilters,
        ...this.queryPagination
      }
    },
  },

  methods: {
    ...mapActions("articles", ["fetch", "fetchCount"]),

    changePage(page) {
      this.currentPage = page;
    },

    resetPage() {
      this.currentPage = 1;
    }
  },

  created() {
    this.$watch(() => [this.isFeed, this.queryFilters],
        ([, newFilters]) => {
          this.resetPage()
          this.fetchCount({
            params: newFilters,
            isFeed: this.isFeed
          })
        }, {immediate: true})

    this.$watch(() => [this.isFeed, this.queryParams],
        ([, newParams]) => {
          this.fetch({
            params: newParams,
            isFeed: this.isFeed
          })
        }, {immediate: true})
  },
}
</script>

<style scoped>

</style>