<template>
  <article-item
      v-for="(article, idx) in articles"
      v-bind="article"
      :key="idx"></article-item>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";

export default {
  name: "ArticleList",

  components: {
    ArticleItem
  },

  props: {
    articles: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>