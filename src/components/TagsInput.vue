<template>
  <fieldset class="form-group">
    <input class="form-control ng-valid ng-dirty ng-touched ng-empty" type="text" placeholder="Enter tags"
           @keydown.enter="create"
           v-model="tag">

    <div class="tag-list">
      <span class="tag-default tag-pill"
            v-for="tag in tags"
            :key="tag">
          <i class="ion-close-round"
             @click="deleteTag(tag)"></i>
          {{ tag }}
      </span>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "TagsInput",

  emits: ["create",
    "delete"],

  props: {
    tags: Array,
    default: []
  },

  data() {
    return {
      tag: ""
    }
  },

  methods: {
    create() {
      if (!this.tag || this.tags.includes(this.tag)) return;

      this.$emit("create", this.tag)
      this.tag = "";
    },

    deleteTag(tag) {
      this.$emit("delete", tag)
    }
  }
}
</script>

<style scoped>

</style>