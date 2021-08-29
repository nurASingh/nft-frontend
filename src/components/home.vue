<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products:[
      {
        productTitle:"HIRO Wallet",
        image       : require('../assets/images/1.png'),
        productId:1
      },
      {
        productTitle:"Transactions",
        image       : require('../assets/images/2.png'),
        productId:2
      },
      {
        productTitle:"Details",
        image       : require('../assets/images/3.png'),
        productId:3
      },
      {
        productTitle:"Contract Function call",
        image       : require('../assets/images/4.png'),
        productId:4
      },
      {
        productTitle:"Docker Image",
        image       : require('../assets/images/5.png'),
        productId:5
      },
      {
        productTitle:"Heroku deployment",
        image       : require('../assets/images/6.png'),
        productId:6
      }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
