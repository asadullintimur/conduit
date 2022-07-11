<template>
  <a href="" class="comment-author">
    <img :src="image" class="comment-author-img"/>
  </a>
  &nbsp;
  <a href="" class="comment-author">{{ username }}</a>
  <span class="date-posted">{{ date }}</span>
</template>

<script>
import {formatDate} from "@/services/helpers";

export default {
  name: "CommentAuthor",

  props: {
    username: {
      required: true,
      type: String,
    },

    createdAt: {
      required: true,
      type: String,
    },

    image: {
      required: true,
      type: String
    }
  },

  computed: {
    date() {
      return formatDate(this.createdAt)
    }
  }
}
</script>

<style scoped>

</style>