<template lang="html">
  <div class="pagination">
    <div class="pagination-left nav-btn">
      <a href="#" @click="changedPage(prevPage)">Предыдущая</a>
    </div>
    <div class="pagination-right nav-btn">
      <a href="#" @click="changedPage(nextPage)">Следущая</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: {
      type: Number,
      default: 1
    }
  },
  computed: {
    nextPage: function() {
      return this.current + 1
    },
    prevPage: function() {
      return this.current - 1
    }
  },
  methods: {
    changePage: function(page) {
      this.$emit('page-changed', page)
    }
  }
}
</script>

<style lang="css" scoped>
.pagination {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
}

.nav-btn {
  width: 120px;
  height: 20px;
  color: #000;
  user-select: none;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
}

.nav-btn a {
  color: #000;
}

.nav-btn a:hover {
  color: #77c1bb;
}
</style>
