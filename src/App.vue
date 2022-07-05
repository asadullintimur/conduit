<template>
  <header-layout></header-layout>

  <router-view/>

  <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import {mapActions} from "vuex";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },

  methods: {
    ...mapActions("articles", ["fetchTags", "fetchArticles"])
  },

  created() {
    this.fetchTags();
    this.fetchArticles();
  }
}

</script>


<style>
</style>
