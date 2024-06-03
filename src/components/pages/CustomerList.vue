<template>
  <div class="hello">
 <customer-item v-for="customer in getCustomers" :key="customer.id" :id=customer.id :name="customer.name" :email="customer.email"></customer-item>
  
   
  </div>
</template>

<script>
import CustomerItem from '../CustomerItem.vue';
export default {
  components: { CustomerItem },
 
  data(){
    return {
customers: []
    }
  },
computed: {
  getCustomers(){
 return this.$store.getters["customers/customers"]
  }
 
},
  created(){
this.loadCustomers();
  },
     methods:{
loadCustomers(){
this.$store.dispatch('customers/loadCustomers')

}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
