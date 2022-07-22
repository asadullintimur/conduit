<template>
  <form class="card comment-form"
        v-if="isAuthenticated">
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

  <p v-else>
    <router-link :to="{
      name: 'login'
    }">Sign in
    </router-link>
    or
    <router-link :to="{
      name: 'register'
    }">sign up
    </router-link>
    to add comments on this article.
  </p>
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
    ...mapState("auth", {
      image: state => state.user.image,
      isAuthenticated: 'isAuthenticated'
    })
  },

  methods: {
    ...mapActions("article", ["createComment"]),

    postComment() {
      this.isRequestPending = true;

      this.createComment(this.comment)
          .finally(() => this.isRequestPending = false)
          .then(() => this.comment = "")
    }
  }
}
</script>

<style scoped>

</style>