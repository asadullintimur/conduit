<template>
  <ul class="pagination">
    <li>1</li>
    <li class="active">2</li>
  </ul>
</template>

<script>
export default {
  name: "PaginationItems"
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