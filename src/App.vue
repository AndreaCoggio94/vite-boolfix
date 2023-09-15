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
        const cardsData = response.data.results.map((card) => {
          const {
            id,
            original_language,
            original_title,
            title,
            vote_average,
            overview,
          } = card;
          return {
            id,
            language: original_language,
            originalTitle: original_title,
            title,
            vote: vote_average,
            desc: overview,
          };
        });

        this.store.cards = cardsData;
      });
    },
    search() {
      // console.log("work");

      (this.store.finalLink =
        store.searchMovie + store.apiKey + store.query + store.filterData),
        this.fetchCards(this.store.finalLink);
    },
  },
  created() {},
};
</script>

<template>
  <AppHeader @search="search" />
  <AppMain :cards="this.store.cards" />
</template>

<style lang="scss"></style>

<!-- params: {
  query: searchData,
  api_key: "api_key=ab7bbb91023578105b166ebbfc1c5d68",
}, -->
