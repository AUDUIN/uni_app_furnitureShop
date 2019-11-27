<template>
	<view class="account">
		<view class="account-title">
			<text>账户</text>
			<image src="../../static/img/Shopping-Bag.png" mode=""></image>
		</view>
		
		<view class="account-user">
			<view class="account-user-info">
				<view class="fans">
					<image src="../../static/img/ion-bookmark.png" mode=""></image>
					<text>945</text>
					<text>粉丝</text>
				</view>
				<view class="profile-picture">
					<!-- <image src="" mode=""></image> -->
				</view>
				<view class="collect">
					<image src="../../static/img/ion-heart.png" mode=""></image>
					<text>102</text>
					<text>收藏</text>
				</view>
			</view>
			<view class="account-user-nameloc">
				<text>哈哈</text>
				<view class="location">
					<image src="../../static/img/ion-location.png" mode=""></image>
					<text>美国，拉斯维加斯</text>
				</view>
			</view>
		</view>
		
		<view class="msg-box">
			<view class="msg-title">
				<view class="new-msg active">
					<image src="../../static/img/ion-star.png" mode=""></image>
					<text>新消息</text>
				</view>
				<view class="save-msg">
					<text>已保存</text>
				</view>
			</view>
			
			<view class="msg-list">
				<view class="item">
					<view class="item-info">
						<text>添加到收藏夹</text>
						<h4>北欧现代简约储物格</h4>
						<text>15 分钟前</text>
					</view>
					<image src="../../static/img/Img01.png" mode=""></image>
				</view>
				<view class="item">
					<view class="item-info">
						<text>添加到收藏夹</text>
						<h4>北欧现代简约储物格</h4>
						<text>15 分钟前</text>
					</view>
					<image src="../../static/img/Img01.png" mode=""></image>
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
	}
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
	.account-user{
		.account-user-info{
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 156upx 42upx 56upx 42upx;
			
			.fans{
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					width:28upx;
					height:36upx;
					margin-bottom: 30upx;
				}
				text{
					font-size:34upx;
					&:nth-of-type(1){
						color:#FFFFFF;
					}
					&:nth-of-type(2){
						color:#A5ADBA;
					}
				}
				
			}
			.profile-picture{
				width:200upx;
				height:200upx;
				background-color: #FFFFFF;
				border-radius: 50%;
				position: relative;
				&:after{
					display: block;
					content: '+';
					position: absolute;
					bottom: 0;
					right: 0;
					width: 60upx;
					height: 60upx;
					font-size: 74upx;
					text-align: center;
					line-height: 60upx;
					background-color: #57D9A3;
					border-radius: 50%;
				}
			}
			.collect{
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					width:28upx;
					height:36upx;
					margin-bottom: 30upx;
				}
				text{
					font-size:34upx;
					&:nth-of-type(1){
						color:#FFFFFF;
					}
					&:nth-of-type(2){
						color:#A5ADBA;
					}
				}
				
			}
		}
		
		.account-user-nameloc{
			margin-top: 54upx;
			padding-bottom: 110upx;
			text-align: center;
			text{
				font-size:40upx;
				color: #57D9A3;
			}
			.location{
				image{
					width:20upx;
					height:32upx;
					margin-right: 12upx;
				}
				text{
					font-size: 34upx;
					color: #A5ADBA;
				}
			}
		}
	}
	
	.msg-box{
		background-color: #FFFFFF;
		border-top-left-radius: 32upx;
		border-top-right-radius: 32upx;
		overflow: hidden;
		.msg-title{
			display: flex;
			justify-content:space-between;
			margin: 140upx 64upx 40upx 64upx;
			.new-msg{
				width: 200upx;
				padding-bottom: 18upx;
				text-align: center;
				image{
					width: 36upx;
					height: 36upx;
					margin-right: 18upx;
				}
				text{
					font-size: 34upx;
					color: #A5ADBA;
				}
			}
			.save-msg{
				width: 200upx;
				padding-bottom: 18upx;
				text-align: center;
				text{
					font-size: 34upx;
					color: #A5ADBA;
				}
			}
			.active{
				color: #091E42;
				border-bottom: 4upx solid #57D9A3;
			}
		}
		
		.msg-list{
			
			.item{
				display: flex;
				justify-content: space-between;
				margin-left: 60upx;
				margin-right: 60upx;
				margin-bottom: 30upx;
				padding-top: 30upx;
				&:not(:nth-of-type(1)){
					border-top: 2upx solid #A5ADBA;
				}
				.item-info{
					text{
						font-size: 34upx;
						color: #5E6C84;
					}
					h4{
						font-size: 34upx;
						color: #091E42;
						margin-bottom: 30upx;
					}
				}
				image{
					width:146upx;
					height:146upx;
				}
			}
		}
	}
</style>
