<script>
import MovieList from "./MovieList.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    MovieList,
  },
};
</script>

<template>
  <div class="container-fluid row-cols-2 row-cols-md-3 row-cols-lg-4">
    <MovieList />
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-wrap: wrap;
}
</style>
