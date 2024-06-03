<template>
<div>
<router-view></router-view>
 
</div>
</template>

<!-- <script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
customers: []
    }
  },


  created(){
this.loadCustomers();
  },
  methods: {
   async loadCustomers(){
const response= await fetch("https://jsonplaceholder.typicode.com/users")
const responseData=await response.json();
this.customers=responseData
    },
}, 
provide(){
  return {
    customers:this.customers
  }
}
}
</script> -->

<style>
.flex{
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.container{
  width: 80%;
  max-width:1200px;
  margin:0 auto;
}
.card{
  outline:2px rgb(5, 58, 156) solid;
  border-radius:20px;
  box-shadow:1px 2px rgba(0, 0, 0, 0.2) ;
}
</style>
