<template>
	<div class="blog">
		<h1>{{title}}</h1>
		<div class="row">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>{{nfts[0].Contract}}</h3>
					</div>
					<div class="card-body">
						TransactionId : {{nfts[0].TransactionId}} <br>
						CalledBy : {{nfts[0].CalledBy}} <br>
						BlockHash : {{nfts[0].BlockHash}} <br>
						Nounce : {{nfts[0].Nounce}} <br>
						BlockHight : {{nfts[0].BlockHight}} <br>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>{{nfts[1].Contract}}</h3>
					</div>
					<div class="card-body">
						TransactionId : {{nfts[1].TransactionId}} <br>
						CalledBy : {{nfts[1].CalledBy}} <br>
						BlockHash : {{nfts[1].BlockHash}} <br>
						Nounce : {{nfts[1].Nounce}} <br>
						BlockHight : {{nfts[1].BlockHight}} <br>
						
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h3>{{nfts[2].Contract}}</h3>
					</div>
					<div class="card-body">
						
						TransactionId : {{nfts[2].TransactionId}} <br>
						CalledBy : {{nfts[2].CalledBy}} <br>
						BlockHash : {{nfts[2].BlockHash}} <br>
						Nounce : {{nfts[2].Nounce}} <br>
						BlockHight : {{nfts[2].BlockHight}} <br>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	
	export default{
		name:'blog',
		mounted () {
			this.$http
			.get('https://obscure-earth-56527.herokuapp.com/nft/mynft')
			.then(response => {
				this.nfts = response.data
				console.log("+++++++++++" + this.nfts[0].Contract)
			})	
		},
		data (){
			return{
				title: "my NFTs",
				nfts : [
					{"Contract":"Loading",
					"TransactionId":"Loading",
					"CalledBy":"Loading",
					"Fees":"Loading",
					"Nounce":'Loading',
					"BlockHight":'Loading',
					"BlockHash":"Loading"
					},
					{"Contract":"Loading",
					"TransactionId":"Loading",
					"CalledBy":"Loading",
					"Fees":"Loading",
					"Nounce":'Loading',
					"BlockHight":'Loading',
					"BlockHash":"Loading"
					},
					{"Contract":"Loading",
					"TransactionId":"Loading",
					"CalledBy":"Loading",
					"Fees":"Loading",
					"Nounce":'Loading',
					"BlockHight":'Loading',
					"BlockHash":"Loading"
					}]
			}
		}
	}

</script>

<style scoped>
	
</style>