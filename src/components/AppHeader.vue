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
      <a class="navbar-brand"> navbar</a>
      <form
        @submit.prevent="$emit('search', filterData)"
        class="d-flex"
        role="search"
      >
        <input
          type="search"
          v-model="filterData"
          class="form-control me-2"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <!-- <SearchBar @search="search" /> -->
</template>

<style lang="scss" scoped></style>
