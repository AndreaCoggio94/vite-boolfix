<script>
export default {
  data() {
    return {
      filterData: "",
    };
  },

  methods: {},
  emits: ["search"],
};
</script>

<template>
  <nav class="navbar bg-ligh">
    <div class="container-fluid">
      <a class="navbar-brand text-uppercase"> boolflix</a>
      <form
        @submit.prevent="$emit('search', filterData)"
        class="d-flex"
        role="search"
      >
        <input
          type="search"
          v-model="filterData"
          class="form-control me-2"
          placeholder="Type here"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: black;
  .navbar-brand {
    color: rgb(194, 7, 7);
    font-size: 1.5rem;
  }
}
</style>
