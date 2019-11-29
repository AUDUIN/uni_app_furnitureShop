<template>
	<view class="order">
		<view class="order-num">
			1 商品
		</view>
		<view class="order-item">
			<view class="order-txt">
				配送地址
			</view>
			<view class="order-address">
				<p>收货人：{{addressData.username}}</br>电话：{{addressData.phone}}</br>{{addressData.loc[0].text}},{{addressData.loc[1].text}},{{addressData.loc[2].text}},{{addressData.address}}</p>
				<image @tap="edit" src="../../static/img/ion-edit.png" mode=""></image>
			</view>
			<view class="shopping">
				<text class="shopping-txt">商品</text>
				<view class="item" v-for="(item,index) in cartd" :key="index">
					<view class="item-img">
						<image :src="BASE_URL+item.imgurl" mode=""></image>
					</view>
					
				<view class="item-txt">
					<h3>{{item.goodsname}}</h3>
					<p>{{item.info}}</p>
					<text>￥{{item.newprice}}</text>
				</view>
					
					<view class="item-calc">
						<text @tap="item.num++">+</text>
						<text>{{item.num}}</text>
						<text @tap="item.num>1?item.num--:''">-</text>
					</view>
				</view>
			</view>
		    
			
		</view>
		<view class="cart-total">
			<text>总计费用</text>
			<text>￥ {{total}}</text>
		</view>
		<view class="cart-foot">
			<image  @tap="back" src="../../static/img/arrow-back.png" mode=""></image>
			<view class="checkmark" @tap="sure">
				<image src="../../static/img/ion-checkmark.png" mode=""></image>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			sure(){
				uni.navigateTo({
					url:"../successOrder/successOrder"
				})
			},
			edit(){
				uni.navigateTo({
					url:"../address/address?editNum=0"
				})
			},
			back(){
				uni.reLaunch({
					url:"../home-product/home-product"
				})
			}
		},
		computed:{
			addressData() {
				return this.$store.state.addressData[0]
			},
			cartd(){
				return this.$store.state.cartd
			},
			total(){
				var sum = 0 
				this.$store.state.cartd.forEach(val=>{
					sum+=val.num*val.newprice
				})
				return sum
			}
		}
		
		
	}
</script>

<style lang="scss">
	.order{
		background-color: #EFEFF4;
		overflow: hidden;
	}
	.order-num{
		font-size: 74upx;
		color:#57D9A3 ;
		padding-left:40upx ;
		padding-bottom: 72upx;
		background-color: #091E42;
	}
	.order-item{
		position: relative;
		top:-32upx;
		background-color: #FFFFFF;
		overflow: hidden;
		border-radius: 32upx;
		.order-txt{
			width:246upx;
			height:58upx;
			font-size:48upx;
			text-align: center;
			line-height: 58upx;
			background-color: #57D9A3;
			margin: 48upx;
		}
		.order-address{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 50upx;
			margin-right: 50upx;
			margin-bottom: 50upx;
			p{
				width:405upx;
				font-size:34upx;
				color: #5E6C84;
			}
			image{
				width: 42upx;
				height: 42upx;
			}
		}
	}
	.shopping{
		margin-left: 50upx;
		margin-right: 50upx;
		margin-bottom: 40upx;
		.shopping-txt{
			width:140upx;
			height:58upx;
			font-size: 48upx;
			color: #FFFFFF;
			text-align: center;
			line-height: 58upx;
			background-color: #FFAB00;
		}
		.item{
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 40upx;
				.item-img{
					width: 170upx;
					height: 170upx;
					
					image{
						width: 100%;
						height: 100%;
					}
				}
				
				.item-txt{
					h3{
						height:32upx;
						font-size:34upx;
						font-family:Adobe Heiti Std;
						font-weight:normal;
						color:#091E42;
						margin-top: 20upx;
						margin-bottom: 20upx;
					}
					p{
						height:28upx;
						font-size:30upx;
						font-family:PingFang;
						font-weight:500;
						color:#5E6C84;
						margin-bottom: 78upx;
					}
					text{
						height:32upx;
						font-size:34upx;
						font-family:Adobe Heiti Std;
						font-weight:normal;
						color:#172B4D;
					}
				}
				.item-calc{
					width: 60upx;
					display: flex;
					flex-wrap:wrap;
					justify-content:center;
					align-content:center;
					text:not(:nth-of-type(2)){
						width:60upx;
						height:60upx;
						font-size: 60upx;
						color: #5E6C84;
						text-align: center;
						line-height: 60upx;
					}
					text:nth-of-type(2){
						width:60upx;
						height:60upx;
						color: #FFFFFF;
						background-color:#57D9A3;
						border-radius: 50%;
						text-align: center;
						line-height: 60upx;
						margin-top: 10upx;
						margin-bottom: 10upx;
					}
				}
			}
		
	}
	.cart-total{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 50upx;
			text:nth-of-type(1){
				height:32upx;
				font-size:34upx;
				font-family:Adobe Heiti Std;
				font-weight:normal;
				color:#5E6C84;
			}
			text:nth-of-type(2){
				height:46upx;
				font-size:48upx;
				font-family:Adobe Heiti Std;
				font-weight:normal;
				color:#172B4D;
			}
	}
	.cart-foot{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 50upx;
		margin-right: 50upx;
		image:nth-of-type(1){
			width: 48upx;
			height: 48upx;
		}
		.checkmark{
			width: 128upx;
			height: 128upx;
			background-color: #2684FF;
			border-radius: 50%;
			text-align: center;
			line-height: 128upx;
			image{
				width: 58upx;
				height: 54upx;
				vertical-align: middle;
			}
		}
	}
</style>
