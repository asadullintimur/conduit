<template>
  <router-link :to="{
    name: 'profile',
    params: {
      username
    }
     }">
    <img :src="image"/>
  </router-link>
  <div class="info">

    <router-link :to="{
    name: 'profile',
    params: {
      username
    }
     }">
      <a href="" class="author">{{ username }}</a>
    </router-link>

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