<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ body }}</p>
    </div>
    <div class="card-footer">
      <comment-author
          :created-at="createdAt"
          :username="author.username"
          :image="author.image">
      </comment-author>
    </div>
  </div>
</template>

<script>
import CommentAuthor from "@/components/CommentAuthor";

export default {
  name: "ArticleComment",

  components: {
    CommentAuthor

  },

  props: {
    createdAt: {
      required: true,
      type: String,
    },

    body: {
      required: true,
      type: String,
    },

    author: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>