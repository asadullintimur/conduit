<template>
  <ul class="pagination">
    <li v-for="page in formattedPages"
        :class="{
          active: page === active
        }"
        :key="page"
        @click="changePage(page)">{{ page }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationItems",

  props: {
    pages: {
      type: Number
    },

    active: {
      type: Number,
      default: 1
    }
  },

  emits: ["changePage"],

  computed: {
    formattedPages() {
      return this.pages > 1 ? this.pages : 0
    }
  },

  methods: {
    changePage(page) {
      if (page !== this.active) {
        this.$emit("changePage", page)
      }
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 20px 0;
}

.pagination li {
  padding: 3px 11px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 3px;
  color: #5cb85c;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.pagination li.active {
  background-color: #5cb85c;
  color: #fff;
}
</style>