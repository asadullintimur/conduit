<template>
  <router-link class="comment-author"
               :to="{
    name: 'profile',
    params: {
      username
    }
  }">
    <img :src="image" class="comment-author-img"/>
  </router-link>
  &nbsp;
  <router-link class="comment-author"
               :to="{
    name: 'profile',
    params: {
      username
    }
  }">
    {{ username }}
  </router-link>
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