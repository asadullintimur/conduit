<template>
  <div class="col-xs-12 col-md-8 offset-md-2">

    <article-comment-area>
    </article-comment-area>

    <article-comment
        v-for="comment in comments"
        :key="comment.id"
        :created-at="comment.createdAt"
        :author="comment.author"
        :id="comment.id"
        :body="comment.body">
    </article-comment>
  </div>

</template>

<script>
import ArticleComment from "@/components/ArticleComment";
import ArticleCommentArea from "@/components/ArticleCommentArea";

export default {
  name: "ArticleComments",

  components: {ArticleCommentArea, ArticleComment},

  props: {
    comments: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>

</style>