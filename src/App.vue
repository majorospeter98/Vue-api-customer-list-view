<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  /* data() {
    return {
      customers: [],
    };
  },

  created() {
    this.loadCustomers();
  },
  methods: {
    async loadCustomers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseData = await response.json();
      this.customers = responseData;
    },
  },
  provide() {
    return {
      customers: this.customers,
    };
  }, */
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
.margin {
  margin-top: 1rem;
}
.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.flex {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}
.card {
  border: 2px rgb(209, 211, 211) solid;
  border-radius: 20px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
