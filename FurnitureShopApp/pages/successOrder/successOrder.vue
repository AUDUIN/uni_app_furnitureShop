<template>
	<view class="successOrder" @tap="back">
		<view class="txt-box">
			<view class="checkmark">
				<image src="../../static/img/ion-checkmark.png" mode=""></image>
			</view>
			<text>提交成功</text>
			<p>你的订单正在安排中请耐心等待 </p>
			<text>订单号: A890345</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.switchTab({
					url:'../home-product/home-product'
				})
			}
		}
	}
</script>

<style lang="scss">
	.successOrder{
		width: 100%;
		height:1334upx;
		background: url(../../static/img/success-order.png) no-repeat;
		background-size: cover;
		position: relative;
	}
	.txt-box{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		.checkmark{
			width:102upx;
			height:102upx;
			background-color: #FFAB00;
			text-align: center;
			line-height: 102upx;
			border-radius: 50%;
			margin: 0 auto;
			image{
				width:40upx;
				height:36upx;
				vertical-align: middle;
			}
		}
		text{
			display: inline-block;
			font-size: 40upx;
			color: #FFFFFF;
			margin-top: 40upx;
		}
		p{
			width:536upx;
			color: #57D9A3;
			font-size:60upx;
			margin-top: 30upx;
		}
	}
</style>
