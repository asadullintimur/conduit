<template>
  <a href="profile.html"><img :src="image"/></a>
  <div class="info">
    <a href="" class="author">{{ username }}</a>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script>
import {formatDate} from "@/services/helpers";

export default {
  name: "AuthorInfo",

  props: {
    createdAt: {
      type: String,
      required: true
    },

    username: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },
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