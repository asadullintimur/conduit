<template>
  <button class="btn btn-sm  action-btn"
          @click="follow"
          :class="{
            'btn-outline-secondary': !following,
            'btn-secondary': following
          }">
    <i :class="{
      'ion-plus-round': !following,
      'ion-minus-round': following,
    }"></i>
    {{ buttonText }}
  </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FollowButton",

  props: {
    username: {
      required: true,
      type: String
    },

    initialFollowing: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      isRequestPending: false,
      following: this.initialFollowing
    }
  },

  methods: {
    ...mapActions("profile", {
      profileFollow: 'follow',
      profileUnfollow: 'unfollow'
    }),

    follow() {
      this.isRequestPending = true;

      (this.following ?
          this.profileUnfollow :
          this.profileFollow)(this.username)
          .finally(() => this.isRequestPending)
          .then(({profile}) => {
            this.following = profile.following;
          })
    }
  },

  computed: {
    buttonText() {
      return this.following ?
          `Unfollow ${this.username}` :
          `Follow ${this.username}`
    },
  }
}
</script>

<style scoped>

</style>