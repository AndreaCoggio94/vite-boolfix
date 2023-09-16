<script>
import { store } from "../data/store";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <AppCard
    v-for="card in store.movieCards"
    :key="card.id"
    :language="card.language"
    :title="card.title"
    :vote="Math.ceil(card.vote)"
    :originalTitle="card.originalTitle"
    :desc="card.desc"
  />
  <AppCard
    v-for="card in store.seriesCards"
    :key="card.id"
    :language="card.language"
    :title="card.title"
    :vote="Math.ceil(card.vote)"
    :originalTitle="card.originalTitle"
    :desc="card.desc"
  />
</template>

<style lang="scss" scoped></style>
