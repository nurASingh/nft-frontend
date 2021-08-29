<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<h1>{{product.productTitle}}</h1>
						<img :src="product.image" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
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
				productTitle:"Heruko Deployment",
				image       : require('../assets/images/6.png'),
				productId:6
				}
				]
				 
			}
		}
		
	}
</script>