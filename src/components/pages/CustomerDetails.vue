<template>
<div>
    <div class="card container users">
    <h2> {{currentCustomer.username}} </h2>
    <h3>{{currentCustomer.email}}</h3>
      <h3>{{currentCustomer.phone}}</h3>
        <h3>{{currentCustomer.website}}</h3>

       
 
</div>
<div class="margin flex">
<router-link to="/customers">Back to Main Mage</router-link>
</div>
</div>
</template>

<script>
export default {
    props: ['id'],
    //    inject:['customers'],
      data(){
       return{
currentCustomer: null

       }
      },
      created(){
let teszt=this.$store.getters['customers/customers']
console.log(teszt);

      this.currentCustomer = this.$store.getters['customers/customers'].find(customer =>customer.id == this.id)
      console.log(this.id);
      console.log(this.currentCustomer);
      }
}

</script>

<style scoped>
.users{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.margin{
    margin-top:3rem;
}
</style>