<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img"/>
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons
            </button>
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
              :articles="articles">
          </article-list>

          <div class="article-preview"
               v-if="!isArticlesLoaded">
            Loading articles...
          </div>

          <div class="article-preview"
               v-if="isArticlesEmpty">
            No articles are here... yet.
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import ArticleList from "@/components/ArticleList";
import TabItems from "@/components/TabItems";

export default {
  name: "ProfileView",
  components: {TabItems, ArticleList},

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
          value: "all",
          active: true,
        },
        {
          name: "Favorited Articles",
          value: "favorited",
          active: false
        }
      ]
    }
  },

  methods: {
    ...mapActions("profile", {
      fetchProfile: "fetch"
    }),

    ...mapActions("articles", {
      fetchArticles: "fetch"
    }),

    changeArticleType(tab) {
      let params = {};

      if (tab.value === "favorited") {
        params.favorited = this.username;
      }

      this.tabs.forEach(tab => tab.active = false)
      tab.active = true;

      this.fetchArticles(params)
    }
  },

  computed: {
    ...mapState("profile", {
      profile: "user"
    }),

    ...mapState("articles", {
      articles: "all",
      isArticlesLoaded: "isLoaded"
    }),

    ...mapGetters("articles", {
      isArticlesEmpty: "isEmpty"
    })
  },

  created() {
    this.fetchProfile(this.username)
    this.fetchArticles({author: this.username})
  }
}
</script>

<style scoped>

</style>