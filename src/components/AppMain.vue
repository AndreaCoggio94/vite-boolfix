<script>
import CardGenerator from "./CardGenerator.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    CardGenerator,
  },
  props: {
    cards: Object,
  },
};
</script>

<template>
  <CardGenerator
    v-for="card in cards"
    :key="card.id"
    :language="card.language"
    :title="card.title"
    :vote="Math.ceil(card.vote)"
    :originalTitle="card.originalTitle"
    :desc="card.desc"
  />
</template>

<style lang="scss" scoped></style>
