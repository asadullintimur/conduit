<template>
  <header-layout></header-layout>

  <router-view/>

  <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";

import {createNamespacedHelpers} from "vuex";

const {mapActions: tagsActions} = createNamespacedHelpers("tags");
const {mapActions: articlesActions} = createNamespacedHelpers("articles");

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },


}

</script>


<style>
</style>
