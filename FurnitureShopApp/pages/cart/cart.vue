<template>
	<view class="cart">
		<view class="head">
					<view class="head-title fl">
						购物车
					</view>
					<view class="head-user fr">
						<image :src="BASE_URL+userinfo.userimgurl" mode=""></image>
					</view>
		</view>
		<view class=" clearfix">
			
		</view>
		<view class="cart-order">
			<view class="order-count">
				<text>{{cartd.length}}商品</text>
			</view>
			<view class="cart-list">
				<view class="item" 
				v-for="(item,index) in cartd"
				:key="index"
				>
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
			
			<view class="calc-price">
				<view class="price">
					<text >商品总计价格</text>
					<text >￥ {{total}}</text>
				</view>
				<view class="fare">
					<text >运费</text>
					<text >+  ￥ 0</text>
				</view>
			</view>
			
			<view class="cart-total">
				<text>总计费用</text>
				<text>￥ {{total}}</text>
			</view>
			
			<view class="cart-btn">
				<button type="primary" @tap="uporder">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			cartd(){
				return this.$store.state.cartd
			},
			total(){
				var sum = 0 
				this.$store.state.cartd.forEach(val=>{
					sum+=val.num*val.newprice
				})
				return sum
			},
		
				userinfo(){
					return this.$store.state.userinfo
				}
		
		},
		methods:{
			uporder(){
				console.log(this.cartd)
				uni.navigateTo({
					url:"../address/address"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
    .cart{
		width: 100vw;
		height:80vh;
		background-color: #4CD964;
		margin-top: 40upx;
	}
	.head{
			padding-bottom: 150upx;
			background: $bgc;
			.head-title{
				color: $head-text-color;
				font-size: 72upx;
				padding-left: 32upx;
			}
			.head-user{
				text-align: center;
				line-height: 64upx;
				margin-top: 24upx;
				margin-right: 32upx;
				border-radius: 50%;
				width: 64upx;
				height: 64upx;
				background-color: white;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}
	.cart-order{
		position: relative;
		top:-32upx;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border-radius:32upx;
		padding-bottom: 100upx;
		.order-count{
			width: 100%;
			text{
				display: inline-block;
				width:200upx;
				height:58upx;
				background:rgba(255,171,0,1);
				font-size:48upx;
				font-family:Adobe Heiti Std;
				font-weight:normal;
				color:rgba(255,255,255,1);
				line-height:58upx;
				text-align: center;
				letter-spacing: 14upx;
				margin-left: 48upx;
				margin-top: 64upx;
				margin-bottom: 64upx;
			}
		}
		.cart-list{
			.item:not(:nth-of-type(1)){
				border-top: 2upx solid #F4F5F7;
			}
			.item{
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-left: 32upx;
				margin-right: 32upx;
				margin-bottom: 40upx;
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
		.calc-price{
			display: flex;
			flex-wrap: wrap;
			padding: 54upx 0;
			margin: 0 50upx;
			border-top: 2upx solid #F4F5F7;
			text:nth-of-type(odd){
				font-size: 34upx;
				color: #A5ADBA;
			}
			text:nth-of-type(even){
				font-size: 34upx;
				color: #5E6C84;
			}
			.price{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 60upx;
			}
			.fare{
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
		}
		.cart-total{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 50upx;
			margin-right: 50upx;
			padding-top: 60upx;
			border-top: 2upx solid #F4F5F7;
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
					
		.cart-btn{
			margin-top: 56upx;
			padding-bottom: 56upx;
			button{
				width:382upx;
				height:96upx;
				background:rgba(38,132,255,1);
				box-shadow:0upx 14upx 34upx 0upx rgba(38,132,255,0.3);
				border-radius:48upx;
				font-size:34upx;
				text-align: center;
				line-height: 96upx;
			}
			
		}
	}

</style>
