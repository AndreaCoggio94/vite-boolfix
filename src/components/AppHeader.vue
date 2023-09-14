<script>
import SearchBar from "./SearchBar.vue";

export default {
  data() {
    return {};
  },
  components: { SearchBar },
  methods: {
    search() {
      console.log("mi hai cliccato");
      this.$emit("search");
    },
  },
};
</script>

<template>
  <SearchBar @search="search" />
</template>

<style lang="scss" scoped></style>
