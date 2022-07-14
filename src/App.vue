<template>
  <header-layout></header-layout>

  <router-view/>

  <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import {mapState} from "vuex";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },

  computed: {
    ...mapState("auth", ["isAuthenticated"])
  },

  watch: {
    isAuthenticated(isAuth) {
      if (!isAuth) {
        this.$router.push({name: "home"})
      }
    },
  },
}

</script>

<style>
</style>
