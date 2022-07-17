<template>
  <div class="profile-page"
  v-if="isLoaded">
    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img"/>
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>

            <router-link class="btn btn-sm btn-outline-secondary action-btn"
                         v-if="isOwnProfile"
                         :to="{
              name: 'settings',
            }">
              <i class="ion-gear-a"></i> Edit Profile Settings
            </router-link>

            <follow-button
                :initial-following="profile.following"
                :username="profile.username"
                v-else>
            </follow-button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <tab-items
              :tabs="tabs"
              @tab-clicked="changeArticleType">
          </tab-items>

          <article-list
              :[filter]="username">
          </article-list>
        </div>
      </div>
    </div>
  </div>

  <p v-else
     class="loading-line">
    Loading...
  </p>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import ArticleList from "@/components/ArticleList";
import TabItems from "@/components/TabItems";
import FollowButton from "@/components/FollowButton";

export default {
  name: "ProfileView",
  components: {FollowButton, TabItems, ArticleList},

  props: {
    username: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      tabs: [
        {
          name: "My articles",
          value: "author",
          active: true,
        },
        {
          name: "Favorited Articles",
          value: "favorited",
          active: false
        }
      ],
      filter: "author"
    }
  },

  methods: {
    ...mapActions("profile", {
      fetchProfile: "fetch"
    }),

    changeArticleType(tab) {
      this.filter = tab.value;

      this.tabs.forEach(tab => tab.active = false)
      tab.active = true;
    }
  },

  computed: {
    ...mapState("profile", {
      profile: "user",
      isLoaded: "isLoaded"
    }),

    ...mapGetters("profile", ["isOwnProfile"])
  },

  created() {
    this.fetchProfile(this.username)
  },

  beforeRouteUpdate(to) {
    this.fetchProfile(to.params.username)
  }
}
</script>

<style scoped>

</style>