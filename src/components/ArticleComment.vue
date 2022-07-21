<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ body }}</p>
    </div>
    <div class="card-footer">
      <comment-author
          :created-at="createdAt"
          :username="author.username"
          :image="author.image">
      </comment-author>

      <span class="mod-options"
            v-if="isAuthor">
          <i class="ion-trash-a"
             @click="deleteComment(this.id)"></i>
      </span>
    </div>
  </div>
</template>

<script>
import CommentAuthor from "@/components/CommentAuthor";
import {mapActions, mapState} from "vuex";

export default {
  name: "ArticleComment",

  components: {
    CommentAuthor

  },

  props: {
    createdAt: {
      required: true,
      type: String,
    },

    body: {
      required: true,
      type: String,
    },

    author: {
      required: true,
      type: Object
    },

    id: {
      required: true,
      type: Number
    }
  },

  computed: {
    ...mapState("auth", ["user"]),

    isAuthor() {
      return this.author.username === this.user?.username
    }
  },

  methods: {
    ...mapActions("article", ["deleteComment"])
  }
}
</script>

<style scoped>

</style>