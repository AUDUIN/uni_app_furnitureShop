<template>
	<view class=main>
		<view class="title">
			{{detaildata.goodsname}}
		</view>
		<view class="price">
			￥{{detaildata.price}}
		</view>
		<view class="card">
			<image :src=BASE_URL+detaildata.imgurl mode=""></image>
		</view>
		<view class="info">
			<view class="title">
				新品
			</view>
			<view class="name">
				{{detaildata.goodsname}}<text>{{detaildata.content}}</text>
			</view>
			
		</view>
		<view class="btn" @tap="addmut(detaildata)">
			加入购物车 ￥{{detaildata.price}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detaildata:[]
			};
		},
		methods:{
			addmut(obj){
				console.log('即将加入购物车',obj)
				this.$store.commit('addmut',obj)
				uni.showModal({
					content: '已成功加入购物车',
					showCancel: false
				});
			}
		},
		onLoad(option) {
			console.log(option.id)
			uni.request({
				url: this.BASE_URL+`/goods/list`,
				 success: (res) => {
				        console.log(res.data.data);
						for (var i = 0; i < res.data.data.length; i++) {						if(res.data.data[i]._id==option.id){
								this.detaildata=res.data.data[i]
								break;
						}
							
							
						}
						console.log(this.detaildata)
						this.detaildata.content=this.detaildata.content.split('<p>')[1].split('</p>')[0]
				       
				    }
			})
		}
	}
</script>

<style lang="scss">
	.main{
		background-color: $bgc;
		text-align: center;
		height: 100vh;
		margin-top: 40upx;
		.title{
			font-size: 48upx;
			color: #FAFBFC;
			height: 90upx;
			line-height: 90upx;	
		}
		.price{
			font-size: 34upx;
			color: #A5ADBA;	
			padding-bottom:72upx;
		}
		.card{
			background-color: #57D9A3;
			border-radius:32px;
			padding: 82upx;
			width: 500upx;
			margin: auto;
			image{
				width: 266upx;
				height: 392upx;
			}
		}
		.info{
			padding-left: 50upx;
			padding-top: 50upx;
			padding-bottom: 50upx;
			.title{
				text-align: left;
				color: #57D9A3;
				font-size: 40upx;
			}
			.name{
				color: #FFFFFF;
				text-align: left;
				font-size: 40upx;
				text{
					padding-left: 10upx;
					padding-right: 60upx;
					color: #C8C7CC;
					font-size: 32upx;
					letter-spacing: 5upx;
				}
			}
		}
		.btn{

			background-color: #2684FF;
			font-size: 34upx;
			border-radius: 48upx;
			width: 396upx;
			height: 96upx;
			margin: auto;
			line-height: 96upx;
			color: #DEEBFF;
			box-shadow:0px 14px 34px 0px rgba(38,132,255,0.3);
		}
	}
</style>
