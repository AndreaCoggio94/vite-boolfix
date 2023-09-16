<script>
export default {
  data() {
    return {
      flags: ["it", "en", "es", "fr", "ja"],
    };
  },
  props: {
    language: String,
    title: String,
    vote: Number,
    originalTitle: String,
    desc: String,
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="card">
      <img class="card-img-top" src="" :alt="title" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <h5 class="card-title">{{ originalTitle }}</h5>
        <img
          v-if="flags.includes(language)"
          :src="'/public/flags/' + language + '.png'"
          alt=""
        />
        <img v-else="" :src="'/public/flags/x.png'" alt="" />
        <p class="card-text">{{ desc }}</p>
        <p>Vote of {{ vote }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
