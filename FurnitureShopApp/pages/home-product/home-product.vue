<template>
	<view class="home-product">
		
		<view class="head">
			<view class="head-title fl">
				探索
			</view>
			<view class="head-user fr">
				<uni-icons type="person" size="32" v-if="true"></uni-icons>
				<image src="../../static/logo.png" mode="" v-else></image>
			</view>
			<view class="clearfix"></view>
			<view class="search">
				<image src="../../static/img/ion-android-search%20-%20Ionicons.png"></image>
				<input type="text" placeholder="搜索内容"/>
			</view>
			<view class="nav">
				<view class="nav-item active fl">
					商品推荐	
				</view>
				<view class="nav-item fl" @tap="jumptodaydeal">
					优惠
				</view>
				<view class="nav-item fl" @tap="jumptospec">
					特色商品
				</view>
				<view class="clearfix"></view>
			</view>
		
		</view>
		<view class="main">
			<view class="card">
				<view class="goodssuggest">
					<view class="title fl">
						新商品推荐
					</view>
					<view class="line fl">
						
					</view>
					<view class="lookall fl">
						查看全部
					</view>
					<view class="clearfix"></view>
					<view class="item" @tap="jumptodetail(goodsdata[0]._id)">
						<view class="left fl">
							<view class="tag">
								设计师原创
							</view>
							<view class="info">
								<view class="price">
									${{goodsdata[0].price}}
								</view>
								<view class="name">
									{{goodsdata[0].info}}
								</view>
							</view>
						</view>
						
						<view class="goodspic fl">
							<image :src=BASE_URL+goodsdata[0].imgurl  mode=""></image>
						</view>
						
					</view>
				</view>
				<view class="goodssuggest">
						<view class="title fl">
							热门推荐
						</view>
						<view class="line fl">
							
						</view>
						<view class="lookall fl">
							查看全部
						</view>
						<view class="clearfix"></view>
						
						<view class="hot-item fl" @tap="jumptodetail(goodsdata[1]._id)">
							<image :src=BASE_URL+goodsdata[1].imgurl mode=""></image>
						</view>
						<view class="hot-item fl" @tap="jumptodetail(goodsdata[2]._id)">
							<image :src=BASE_URL+goodsdata[2].imgurl mode=""></image>
						</view>	
						<view class="hot-item fl" @tap="jumptodetail(goodsdata[3]._id)">
							<image :src=BASE_URL+goodsdata[3].imgurl mode=""></image>
						</view>
						</view>
						
						
					</view>
				
			</view>			
			<view class="clearfix"></view>
			<view class="btm">
				<view class="title">
					今日分享
				</view>
				<view class="today-share"
				
				 @tap="jumptodetail(goodsdata[3]._id)">
					<image :src=BASE_URL+goodsdata[3].imgurl mode=""></image>
				</view>
			</view>
		</view>
		
			
	
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				goodsdata:[],
			};
		},
		components: {uniIcons},
		methods:{
			jumptospec(){
				uni.navigateTo({
					url:"../spec/spec"
				})
			},
			jumptodaydeal(){
				console.log('jump')
				uni.navigateTo({
					url:"../day-deal/day-deal"
				})
			},
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
		background: $bgc;
		.head-title{
			color: $head-text-color;
			font-size: 72upx;
			padding-left: 64upx;
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
		background-color: #A5ADBA;
		height: 900upx;
		.card{
			width:750upx;
			height:880upx;
			background:rgba(255,255,255,1);
			box-shadow:0upx 14upx 34upx 0upx rgba(9,30,66,0.2);
			border-radius:32upx;
			position: relative;
			top:-16upx;
			overflow: hidden;
			.goodssuggest{
				margin-top: 32upx;
				.title{
					color: #172B4D;
					width:240upx;
					height:46upx;
					font-size:48upx;
					font-weight:bold;
					line-height:44upx;
					padding-left: 52upx;
				}
				.line{
					margin-left: 78upx;
					margin-top: 20upx;
					width:200upx;
					height:4upx;
					background:rgba(255,171,0,1);
				}
				.lookall{
					color: #5E6C84;
					font-size: 26upx;
					line-height: 40upx;
					padding-left: 40upx;
				}
				.item{
					width:686upx;
					height:320upx;
					background:rgba(250,251,252,1);
					border-radius:16upx;
					margin: auto;
					padding-top: 38upx;
					.tag{
						width:174upx;
						height:52upx;
						color: #FFFFFF;
						font-size: 26upx;
						text-align: center;
						line-height: 52upx;
						background:rgba(255,171,0,1);
						box-shadow:0upx 4upx 8upx 0upx rgba(255,171,0,0.2);
						border-radius:26upx;
						margin-left: 32upx;
						margin-top: 32upx;
					}
					.info{
						color: #5E6C84;
						margin-left: 32upx;
						.price{
							margin-top: 38upx;
						}
						.name{
							margin-top: 28upx;
						}
					}
					.goodspic{
						margin-left: 120upx;
						margin-top: 42upx;
						width: 168upx;
						height: 248upx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
				.hot-item{
					height: 210upx;
					width: 142upx;
					padding: 50upx;
					vertical-align: bottom;
					image{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
	
	.btm{
		width:750upx;
		// height: 450upx;
		background-color: #A5ADBA !important;
		.title{
			padding-left: 50upx;
			width:200upx;
			height:45upx;
			font-size:48upx;
			font-family:PingFang;
			font-weight:bold;
			color:rgba(250,251,252,1);
			line-height:44upx;
		}
		.today-share{
			width: 500upx;
			margin: auto;
			text-align: center;
			image{
				width: 100%;
				margin-top: 50upx;
			}
		}
		
	}
</style>
