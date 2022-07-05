<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img :src="author.image"/></a>
      <div class="info">
        <a href="" class="author">{{ author.username }}</a>
        <span class="date">{{ date }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ title }}</h1>
      <p> {{ description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline ng-binding ng-scope"
        v-for="(tag, idx) in tagList"
        :key="idx">
          {{ tag }}
        </li>
      </ul>
    </a>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",

  props: {
    title: {
      required: true,
      type: String
    },

    description: {
      required: true,
      type: String,
    },

    tagList: {
      type: Array,
    },

    createdAt: {
      required: true,
      type: String
    },

    favoritesCount: {
      required: true,
      type: Number
    },

    author: {
      required: true,
      type: Object
    }
  },

  computed: {
    date() {
      let date = new Date(Date.parse(this.createdAt));
      let month = date.toLocaleString("en-us", {month: "long"});

      return `${month} ${date.getDate()},${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>

</style>