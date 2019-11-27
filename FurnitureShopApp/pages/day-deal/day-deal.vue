<template>
	<view>
		<view class="head">
			<view class="head-title fl">
				优惠促销
			</view>
			<view class="head-user fr">
				
			</view>
			<view class="clearfix"></view>	
		</view>
		<view class="main">
			<view class="card">
				<view class="on-sale" @tap="jumptodetail(goodsdata[0]._id)">
					<view class="goodspic fl">
						<image :src=BASE_URL+goodsdata[0].imgurl  mode=""></image>
					</view>
					<view class="goodsinfo fl">
						<view class="title">
							{{goodsdata[0].goodsname}}
						</view>
						<view class="price">
							${{goodsdata[0].newprice}} <text>${{goodsdata[0].price}}</text>
						</view>
						<view class="addtocart fr">
							+
						</view>
					</view>
				</view>
				<view class="on-sale" @tap="jumptodetail(goodsdata[1]._id)">
						<view class="goodsinfo fl">
								<view class="title">
								{{goodsdata[1].goodsname}}
								</view>
								<view class="price">
									${{goodsdata[1].newprice}} <text>${{goodsdata[1].price}}</text>
								</view>
								<view class="addtocart fr">
									+
								</view>
							</view>
						
						<view class="goodspic fl">
							<image :src=BASE_URL+goodsdata[1].imgurl  mode=""></image>
						</view>
						</view>
				
			</view>
			<view class="btm">
					<view class="title">
						最佳收藏
					</view>
					<view class="today-share">
						<image class="fl" src="../../static/img/d4.png" mode=""></image>
						<view class="goodsinfo">
							<view class="name">
								原创个性座椅
							</view>
							<view class="price">
								$22.9 <text>$32.9</text>
							</view>
							<view class="addtocart fr">
								加入购物车
							</view>
						</view>
						<view class="clearfix">
							
						</view>
					</view>
				</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsdata:[]
			}
		},
		methods: {
			jumptodetail(id){
				uni.navigateTo({
					url:`../detail/detail?id=${id}`
				})
			}
		},
		onLoad() {
			
			uni.request({
				url: this.BASE_URL+`/goods/list`,
				 success: (res) => {
				        console.log(res.data.data);
				        this.goodsdata=res.data.data
				    }
			})
		}
	}
</script>

<style lang="scss">
	.head{
		padding-bottom: 42upx;
		background: $bgc;
		.head-title{
			color: $head-text-color;
			font-size: 64upx;
			padding-left: 64upx;
		}
		.head-user{
			margin-top: 12upx;
			margin-right: 32upx;
			border-radius: 50%;
			width: 64upx;
			height: 64upx;
			background-color: white;
		}
		.search{
			margin-top: 42upx;
			position: relative;
			image{
				position: absolute;
				width: 36upx;
				height: 36upx;
				top:32upx;
				left: 62upx;
			}
			input{
				color: #FFFFFF;
				background-color: #172B4D;
				width: 586upx;
				height: 96upx;
				border-radius:16upx ;
				margin: auto;
				padding-left: 100upx;
			}
		}
		.nav{
			margin-top: 32upx;
			padding-bottom: 60upx;
			display: flex;
			justify-content: center;
			.nav-item{
				padding: 8upx 36upx;
				text-align: center;
				color: #A5ADBA;
				&.active{
					background-color: $head-text-color;
					color: #FFFFFF;
				}
			}
		}
	}
	.main{
		background-color: #EFEFF4;
		// height: 1000upx;
		.card{
			width:750upx;
			height: 750upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 14upx 34upx 0upx rgba(9,30,66,0.2);
			border-radius:32upx;
			position: relative;
			top:-16upx;
			overflow: hidden;
			color: #091E42;
			font-size: 34upx;
			font-weight:600;
			.on-sale{
				margin-top: 30upx;			
			}
			.goodsinfo{
				width: 400upx;
			}
			.goodspic{
				padding: 0upx;
				margin-left: 90upx;
				margin-top: 68upx;
				width: 168upx;
				height: 248upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				margin-top: 86upx;
				margin-bottom: 27upx;
				margin-left: 125upx;
			}
			.price{
				margin-left: 125upx;
				text{
					text-decoration: line-through;
					font-size: 26upx;
					margin-left: 10upx;
					color: #5E6C84;
				}
			}
			.addtocart{
				width: 60upx;
				height: 60upx;
				background-color: #FF5230;
				color: #FFFFFF;
				font-size: 80upx;
				
				text-align: center;
				line-height: 50upx;
				border-radius: 100%;
				margin-top: 60upx;
				// margin-right: -80upx;
			}
			
		}
		.btm{	
				margin-top: 20upx;
				width:750upx;
				height: 470upx;
				background-color: #EFEFF4 !important;
				.title{
					padding-left: 50upx;
					width:200upx;
					height:45upx;
					font-size:48upx;
					font-family:PingFang;
					font-weight:bold;
					color:#091E42;
					line-height:44upx;
				}
				.today-share{
					width: 662upx;
					color: #091E42;
					font-size: 34upx;
					font-weight:600;
					overflow: hidden;
					image{
						width: 222upx;
						height: 225upx;
						margin-top: 140upx;
						margin-left: 80upx;
						padding-right: 100upx;
					}
					.name{
						margin-top: 100upx;
					}
					.price{
						margin-left: 125upx;
						text{
							text-decoration: line-through;
							font-size: 26upx;
							margin-left: 10upx;
							color: #5E6C84;
						}
					}
					.addtocart{
						margin-top: 100upx;
						background-color: #FFAB00;
						width: 200upx;
						height: 80upx;
						color: #FFFFFF;
						border-radius: 40upx;
						text-align: center;
						line-height: 80upx;
					}
					
				}
				
			}
		
	}
</style>
