<template>
	<view class="shoppingCart">
		<view class="mol">
			<view class="mol-cart">
				<view class="cart-close">
					<!-- <uniIcon class="icon-close" type="clear" size="32" color="#FF5230"></uniIcon> -->
					<image src="../../static/img/ion-close-circled.png" mode=""></image>
				</view>
				
				<view class="cart-list">
					<view class="item">
						<view class="item-img">
							<image src="../../static/img/Img01.png" mode=""></image>
						</view>
						
						<view class="item-txt">
							<h3>简约现代风储物格</h3>
							<p>34BA 系列</p>
							<text>￥671.5</text>
						</view>
						
						<view class="item-calc">
							<text>+</text>
							<text>1</text>
							<text>-</text>
						</view>
					</view>
					
					<view class="item">
						<view class="item-img">
							<image src="../../static/img/Img02.png" mode=""></image>
						</view>
						
						<view class="item-txt">
							<h3>简约现代风靠椅</h3>
							<p>
                                型号 A1234
                            </p>
							<text>￥854.5</text>
						</view>
						
						<view class="item-calc">
							<text>+</text>
							<text>1</text>
							<text>-</text>
						</view>
					</view>
				</view>
				
				<view class="cart-total">
					<text>总计价格</text>
					<text>￥ 1526.0</text>
				</view>
				
				<view class="cart-btn">
					<button type="primary">提交</button>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				
			};
		},
		components: {uniIcon}
	}
</script>

<style lang="scss">
	.shoppingCart{
		position: relative;
		width: 100%;
		height:1334upx;
		margin-top: 40upx;
		.mol{
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(9, 30, 66, 0.2);
			
			.mol-cart{
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				background-color: #FFFFFF;
				border-top-left-radius:32upx;
				border-top-right-radius: 32upx;
				
				.cart-close{
					width: 100%;
					overflow: hidden;
					image{
						width: 64upx;
						height: 64upx;
						float: right;
						margin-top: 50upx;
						margin-right: 60upx;
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
				
				.cart-total{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-left: 50upx;
					margin-right: 50upx;
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
					margin-bottom: 56upx;
					button{
						width:332upx;
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
		}
	}
	
</style>
