<script>
import { Flag } from "vue-flagpack";

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
  methods: {
    whatIs() {
      console.log(typeof this.title);
      console.log(typeof this.languague);
      console.log(typeof this.vote);
      console.log(typeof this.originalTitle);
      console.log(typeof this.desc);
    },
  },
};
</script>

<template>
  <button @click="whatIs">what?</button>
  <h1>{{ originalTitle }}</h1>
  <address>{{ title }}</address>
  <h3>{{ languague }}</h3>
  <h4>{{ vote }}</h4>
  <p>{{ desc }}</p>
</template>

<style lang="scss" scoped></style>
