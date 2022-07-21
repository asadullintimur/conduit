<template>
  <router-link class="btn btn-outline-secondary btn-sm"
               :to="{
    name: 'editor',
    params: {
      slug
    }
  }">
    <i class="ion-edit"></i> Edit Article
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "EditButton",

  computed: {
    ...mapGetters("article", ["slug"])
  }
}
</script>

<style scoped>

</style>