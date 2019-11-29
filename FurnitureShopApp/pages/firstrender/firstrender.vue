<template>
	<view class="uni-flex uni-column" style="margin-top: 40upx;">
		
	                <view class="flex-item flex-item-V uni-bg-red  ">
					  <view class="first">
					  	<view class="welcome">探索</view>
						<text class="title">搜索任何你感兴趣的商品</text>
						<view class="">
							<image class="one-pc" src="../../static/photo1.png" mode="scaleToFill"></image>
						</view>
					  </view>
					</view>
	                <view class="flex-item flex-item-V uni-bg-green">
						<view class="first">
							<view class="welcome">商店</view>
												<text class="title">在全球任何地方都可服务</text>
												<view class="">
													<image class="one-pc" src="../../static/photo2.png" mode="scaleToFill"></image>
												</view>
						</view>
					</view>
	                <view class="flex-item flex-item-V uni-bg-blue">
						<view class="first">
							<view class="welcome">及时</view>
												<text class="title">我们承诺尽快送达。</text>
												<view class="">
													<image class="one-pc" src="../../static/photo3.png" mode="scaleToFill"></image>
												</view>
												<button @tap="tologin" class="btn-login" type="primary">马上进入</button>
						</view>
					</view>
	            </view>
	
</template>

<script>
	export default{
		methods:{
			tologin(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>
	.first {
		width:750upx;
		height:1624upx;
		background:rgba(9,30,66,1);
	}
	.title {
		margin-left: 65upx;
		width:393upx;
		height:32upx;
		font-size:34upx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:54upx;
	}
	.welcome {
		margin-bottom: 25upx;
		width: 480upx;
		font-size: 68upx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(87, 217, 163, 1);
		padding-top: 98upx;
		padding-left: 66upx;
	}
	.one-pc {
		margin-top: 64upx;
		margin-left: 59upx;
		margin-right:59upx;
		width:630upx;
		height:1034upx;
		background:rgba(23,43,77,1);
		box-shadow:0upx 14upx 34upx 0upx rgba(9,30,66,0.2);
		border-radius:16upx;
	}
	.btn-login {
		margin-top:120upx;
		margin-bottom:120upx;
		width:332upx;
		height:96upx;
		background:rgba(38,132,255,1);
		box-shadow:0upx 14upx 34upx 0upx rgba(38,132,255,0.3);
		border-radius:48upx;
	}
</style>
