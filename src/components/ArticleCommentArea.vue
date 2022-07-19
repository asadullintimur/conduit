<template>
  <form class="card comment-form">
    <div class="card-block">
      <textarea class="form-control" placeholder="Write a comment..." rows="3"
      v-model="comment"></textarea>
    </div>
    <div class="card-footer">
      <img :src="image" class="comment-author-img"/>
      <button class="btn btn-sm btn-primary"
      @click="postComment"
      :disabled="isRequestPending">
        Post Comment
      </button>
    </div>
  </form>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ArticleCommentArea",

  data() {
    return {
      comment: "",
      isRequestPending: false
    }
  },

  computed: {
    ...mapState("article", {
      articleSlug: state => state.item.slug
    }),

    ...mapState("profile", {
      image: state => state.user.image
    })
  },

  methods: {
    ...mapActions("article", ["createComment"]),

    postComment() {
      this.isRequestPending = true;

      this.createComment({
        slug: this.articleSlug,
        comment: this.comment
      }).finally(() => this.isRequestPending = false)
      .then(() => this.comment = "")
    }
  }
}
</script>

<style scoped>

</style>