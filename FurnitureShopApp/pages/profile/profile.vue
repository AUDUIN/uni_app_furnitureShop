<template>
	<view class="account">
		<view class="account-title">
			<text>账户</text>
			<image src="../../static/img/Shopping-Bag.png" mode=""></image>
		</view>
		
		<view class="account-user">
			<view class="account-user-info">
				<view class="fans">
					<image src="" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.account{
		background-color: #091E42;
		.account-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 42upx;
			margin-right: 42upx;
			padding-bottom: 40upx;
			border-bottom: 2upx solid #5E6C84;
			text{
				font-size: 72upx;
				color: #57D9A3;
			}
			image{
				width:45upx;
				height:40upx;
			}
		}
	}
</style>
