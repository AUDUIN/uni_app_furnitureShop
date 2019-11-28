<template>
	<view>
		<view class="my-list">
			<view class="my-item" @tap="handleImg">
				<text>头像</text>
				<view class="my-right" >
					<!-- <view class="my-pic"></view> -->
					<view class="cu-avatar radius bg-gray"></view>
					<text class="cuIcon-right"></text>

				</view>
				
			</view>
			<view class="my-item">
				<text>用户名</text>
				<view class="my-right">
					<text>哈哈</text>
					<text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="my-item">
				<text>性别</text>
				<view class="my-right">
					<text>男</text>
					<text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="my-item">
				<text>出生年月</text>
				<view class="my-right">
					<text>1987-04</text>
					<text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="my-item">
				<text>收货地址</text>
				<view class="my-right">
					<text class="cuIcon-right"></text>
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
		},
		methods:{
			handleImg(){
				uni.navigateTo({
					url:'../upload/upload'
				})
			}
		}
	}
</script>

<style lang="scss">

	.my-list{
		background-color: #FFFFFF;
		margin-top: 40upx;
		.my-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			background-color: #FFFFFF;
			line-height: 100upx;
			margin-left: 30upx;
			margin-right: 30upx;
			&:not(:last-of-type){
				border-bottom: 2upx solid #F4F5F7;
			}
			
			text{
				font-size: 32upx;
			}
			.my-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					font-size: 32upx;
					color: #A5ADBA;
				}
				
			}
			
		}
	}
</style>
