<template>
  <div class="">
    <h2>{{ name }}</h2>
    <router-link :to="openDetails">View Details</router-link>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "email"],

  computed: {
    openDetails() {
      return "/customers/" + this.id;
    },
  },
};
</script>

<style scoped></style>
