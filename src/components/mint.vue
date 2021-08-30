<template>
	<div class="contact">
		<h1>{{title}}</h1>
		
		 <div class="contact">
		 	<form>
		 		<div class="form-group">
		 			<div class="input-group-prepend">
		 				
		 				<input type="text" placeholder="Image url" class="form-control" name="">
		 			</div>
		 			<div class="input-group-prepend">
		 			
		 				<textarea placeholder="Image metadata" class="form-control">
		 					
		 				</textarea>
		 			</div>
		 			<button class="btn btn-primary btn-block" v-on:click="mint">Submit</button>
		 		</div>
		 	</form>
		 </div>
	</div>
</template>
<script>
	export default{
		name:'blog',
		data (){
			return{
				title:'Mint NFT'
			}
		},	
		 methods: {
			mint: function (event) {
				this.title="Successfully Claimed"
				this.$http
				.get('https://obscure-earth-56527.herokuapp.com/nft/mynft/thedevlab')
				.then(response => {
					this.title = response.data
					console.log("+++++++++++" + this.nfts[0].Contract)
				})
			}	
		}
	}
</script>

<style scoped>
.contact form{
	max-width: 40em;
	margin: 2em auto;
}
.contact form .form-control{
	margin-bottom: 1em;
}
.contact form textarea{
	min-height: 20em;
}	
</style>