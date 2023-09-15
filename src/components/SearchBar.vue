<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<!-- @submit prevent -->

<template>
  <div class="container">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="store.filterData"
      />
      <div class="input-group-append">
        <button
          @click="$emit('search')"
          class="btn btn-outline-secondary"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
