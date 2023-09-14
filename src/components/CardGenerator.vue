<script>
export default {
  data() {
    return {};
  },
  props: {
    languague: String,
    title: String,
    vote: Number,
    originalTitle: String,
    desc: String,
  },
};
</script>

<template>
  <h1>{{ originalTitle }}</h1>
  <address>{{ title }}</address>
  <h3>{{ languague }}</h3>
  <h4>{{ vote }}</h4>
  <p>{{ desc }}</p>
</template>

<style lang="scss" scoped></style>
