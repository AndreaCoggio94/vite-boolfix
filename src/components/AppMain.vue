<script>
import CardGenerator from "./CardGenerator.vue";

export default {
  data() {
    return {};
  },
  components: {
    CardGenerator,
  },
  props: {
    cards: Array,
  },
};
</script>

<template>
  <CardGenerator
    v-for="card in cards"
    :key="card.id"
    :language="card.language"
    :title="card.title"
    :vote="Math.floor(card.vote)"
    :originalTitle="card.originalTitle"
    :desc="card.desc"
  />
</template>

<style lang="scss" scoped></style>
