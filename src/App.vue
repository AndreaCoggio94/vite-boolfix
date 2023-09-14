<script>
import { store } from "./data/store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      cards: [],
      finalLink:
        store.searchMovie + store.apiKey + store.query + store.filterData,
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
        const cardsData = response.data.results.map((card) => {
          console.log(card);
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

        this.cards = cardsData;
        console.log(this.cards);
      });
    },
    search() {
      console.log("clicked");
    },
  },
  created() {
    this.fetchCards(this.finalLink);
  },
};
</script>

<template>
  <AppHeader @search="search" />
  <AppMain />
</template>

<style lang="scss"></style>
