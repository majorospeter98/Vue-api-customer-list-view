import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index"
import App from "./App.vue";

import CustomerDetails from "./components/pages/CustomerDetails.vue";
import CustomerList from "./components/pages/CustomerList.vue";


import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: '/customers',
    },
    {
      path: '/customers',
      component: CustomerList,
    },

    {
      path: '/customers/:id',props:true,
      component: CustomerDetails,
      
    },
    
        {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.use(store)

app.mount("#app");
