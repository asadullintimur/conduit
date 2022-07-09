<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item"
      v-for="tab in tabs"
      :key="tab.name">
        <a class="nav-link" href=""
           :class="{active: tab.active}"
        v-html="tab.name"
        @click.prevent="tabClicked(tab)"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabItems",

  props: {
    tabs: {
      type: Array,
      default: []
    }
  },

  emits: ["tabClicked"],

  methods: {
    tabClicked(tab) {
      this.$emit("tabClicked", tab)
    }
  }
}
</script>

<style scoped>

</style>