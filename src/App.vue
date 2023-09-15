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
    fetchCardsMovies(searchData) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: searchData,
            api_key: "ab7bbb91023578105b166ebbfc1c5d68",
          },
        })
        .then((response) => {
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

          this.store.movieCards = cardsData;
        });
    },
    fetchCardsSeries(searchData) {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: searchData,
            api_key: "ab7bbb91023578105b166ebbfc1c5d68",
          },
        })
        .then((response) => {
          const cardsData = response.data.results.map((card) => {
            const {
              id,
              original_language,
              original_name,
              name,
              vote_average,
              overview,
            } = card;
            return {
              id,
              language: original_language,
              originalTitle: original_name,
              title: name,
              vote: vote_average,
              desc: overview,
            };
          });

          this.store.seriesCards = cardsData;
        });
    },
    concatCards() {
      // let movie = this.store.movieCards;
      // let series = this.store.seriesCards;
      // this.store.cards = "";
      this.store.cards = this.store.movieCards.concat(this.store.seriesCards);
      console.log(this.store.cards);
    },
    search() {
      // (this.store.movieCards = []),
      //   (this.store.seriesCards = []),
      //   (this.store.cards = []),
      this.fetchCardsMovies(store.filterData);
      this.fetchCardsSeries(store.filterData);
      this.concatCards();
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
