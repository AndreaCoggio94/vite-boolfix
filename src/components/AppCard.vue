<script>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fasStar, farStar);

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
    img: String,
    startImg: String,
  },
  methods: {},
  components: {
    FontAwesomeIcon,
  },
};
</script>

<template>
  <div class="card col">
    <!-- "item.active ? 'active' : ''" -->
    <img
      class="card-img"
      :src="img ? startImg + img : '/img/missing.jpg'"
      :alt="title"
    />
    <div class="card-body">
      <!-- title -->
      <h4 class="title">Title: {{ title }}</h4>
      <!--  -->
      <!-- original title -->
      <address class="original-title">
        Original Title: {{ originalTitle }}
      </address>
      <!--  -->
      <div class="vote-flag">
        <!-- vote -->
        <span>Vote: </span>
        <span v-for="n in 5">
          <span v-if="n <= vote">
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
          <span v-else>
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>
        </span>
        <!--  -->
        <!-- language flag -->
        <img
          v-if="flags.includes(language)"
          :src="'/flags/' + language + '.png'"
          alt=""
        />
        <img v-else="" :src="'/flags/x.png'" alt="" />
        <!--  -->
      </div>
      <!-- description -->
      <p class="card-text description">{{ desc }}</p>
      <!--  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(44, 38, 38);
  color: white;
  height: 400px;
  .card-img {
    height: 100%;
    width: 100%;
  }
  .card-body {
    display: none;
    .title {
      font-size: 1.2rem;
    }
    .original-title {
      font-size: 1rem;
    }
    .description {
      font-size: 0.8rem;
      overflow-y: auto;
      max-height: 200px;
    }
    .vote-flag {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &:hover {
    .card-img {
      display: none;
    }
    .card-body {
      display: block;
    }
  }
}
</style>
