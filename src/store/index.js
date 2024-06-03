import { createStore } from "vuex";
  import customerModule from "./modules/customers/index"
const store = createStore({
    namespaced:true,
       modules:{
        customers : customerModule
    }
})
export default store;
