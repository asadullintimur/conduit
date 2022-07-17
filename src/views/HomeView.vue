<template>
  <div class="home-page">

    <div class="banner">
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
              @tab-clicked="tabClicked"></tab-items>


          <article-list
              :tag="tag"></article-list>
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
      tabs: [{
        name: "Global Feed",
        active: true
      }],
      tag: ""
    }
  },

  computed: {
    ...mapState("tags", {
      tags: state => state.all,
      isTagsLoaded: state => state.isLoaded
    }),

    ...mapState("auth", ["isAuthenticated"])
  },

  methods: {
    ...mapActions("tags", {
      fetchTags: "fetch"
    }),

    filterByTag(tag) {
      this.tag = tag;
      this.addTab(tag)
    },

    addTab(name) {
      this.resetTabs();
      this.tabs[0].active = false;

      this.tabs.push({
        name: `<i class="ion-pound"></i> ${name}`,
        active: true
      })
    },

    resetTabs() {
      this.tabs = [{
        name: "Global Feed",
        active: true
      }];
    },

    tabClicked(tab) {
      if (this.tabs.findIndex(fTab => tab.name === fTab.name) === 0) {
        this.resetTabs()
        this.tag = "";
      }
    }
  },

  created() {
    this.fetchTags()
  },
}
</script>
