<template>
  <button class="btn btn-outline-danger btn-sm"
          @click="deleteArticle">
    <i class="ion-trash-a"></i> Delete Article
  </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "DeleteButton",

  methods: {
    ...mapActions("article", {
      fetchDelete: 'delete'
    }),

    deleteArticle() {
      this.fetchDelete()
          .then(() => this.$router.push({name: "home"}))
    }
  },

}
</script>

<style scoped>

</style>