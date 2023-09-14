<script>
import { store } from "./data/store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    fetchCards(endpoint) {
      axios.get(endpoint).then((response) => {
        console.log(response);
      });
    },
    search() {
      console.log("clicked");
    },
  },
  created() {
    this.fetchCards(store.finalLink);
  },
};
</script>

<template>
  <AppHeader @search="search" />
  <AppMain />
</template>

<style lang="scss"></style>
