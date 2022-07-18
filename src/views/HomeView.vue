<template>
  <div class="home-page">

    <div class="banner"
         v-if="!isAuthenticated">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <tab-items
              :tabs="tabs"
              :active="activeTab"
              @tab-clicked="changeActiveTab"></tab-items>


          <article-list
              :tag="tag"
              :is-feed="isFeed"></article-list>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <p v-if="!isTagsLoaded">
                Loading tags...
              </p>

              <a class="tag-pill tag-default"
                 href=""
                 v-for="tag in tags"
                 :key="tag"
                 @click.prevent="filterByTag(tag)"
              >
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapState, mapActions} from "vuex";


import ArticleList from "@/components/ArticleList";
import TabItems from "@/components/TabItems";

export default {
  name: 'HomeView',

  components: {
    ArticleList,
    TabItems
  },

  data() {
    return {
      tag: "",
      activeTab: 0,
    }
  },

  computed: {
    ...mapState("tags", {
      tags: state => state.all,
      isTagsLoaded: state => state.isLoaded
    }),

    ...mapState("auth", ["isAuthenticated"]),

    tabs() {
      let tabs = [{
        name: "Global Feed",
        value: 'global'
      }];

      if (this.isAuthenticated) {
        tabs.unshift({
          name: "Your Feed",
          value: 'feed'
        })
      }

      if (this.tag) {
        tabs.push({
          name: `<i class="ion-pound"></i> ${this.tag}`,
          value: 'tag'
        })
      }

      return tabs;
    },

    isFeed() {
      return this.tabs[this.activeTab].value === "feed"
    }
  },

  methods: {
    ...mapActions("tags", {
      fetchTags: "fetch"
    }),

    filterByTag(tag) {
      this.tag = tag;
    },

    changeActiveTab(tab) {
      if (tab.value === "tag") {
        return;
      }

      this.activeTab = this.tabs.findIndex(fTab => fTab === tab);
      this.tag = "";
    }
  },

  created() {
    this.fetchTags()
  },

  watch: {
    tabs(newTabs) {
      let lastTab = newTabs.at(-1);

      if (lastTab.value === "tag") {
        this.activeTab = newTabs.length - 1;
      }
    }
  }
}
</script>
