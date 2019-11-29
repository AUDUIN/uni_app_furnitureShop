<template>
	<view class="content" style="margin-top: 40upx;">
		<view class="uni-flex uni-column">
			<view class="flex-item flex-item-V uni-bg-red">
			<view class="head">
				<view class="head-title fl">
					特殊商品
				</view>
				<view class="head-user fr">
					<image :src="BASE_URL+userinfo.userimgurl" mode=""></image>
				</view>
				<view class="clearfix"></view>	
			</view>
					</view>
			<view class="flex-item flex-item-V uni-bg-green wcontent secondcontent">
				<image class="round-table" src="../../static/iron1.png" mode="aspectFill"></image>
				<view class="m-concent">
					<view class="t-content"> 简约欧美风
						圆凳</view>
					<view class="orginal">原创设计师</view>
					<view class="m-price">$29.4</view>
				</view>
				<view class="r-concent">
					<view class="roundround" src="" mode="">+</view>
				</view>
				<view class="text-box" scroll-y="true">

				</view>
			</view>
			<view class="flex-item flex-item-V uni-bg-blue">
				<view class="good-list">
					<view class="good-list1">
						<view class="good-list1-text">
							<view class="good-text">北欧简约风
								储物格</view>
							<view class="gprice">$3.2</view>
							<image class="wood" src="../../static/wood.png" mode="aspectFill"></image>
						</view>

					</view>
					<view class="good-list2">
						<view class="good-list2-text">

							<view class="good-text2">北欧简约风
								靠椅</view>
							<view class="gprice2">$31.2</view>
							<image class="chair" src="../../static/chair.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="good-list3">
						<view class="good-list1-text">
							<view class="good-text3">北欧简约风
								吊灯</view>
							<view class="gprice">$3.2</view>
							<image class="line" src="../../static/Image.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="good-list4">
						<view class="good-list1-text">
							<view class="good-text3">北欧简约风
								办公椅</view>
							<view class="gprice">$302.2</view>
							<image class="workchair" src="../../static/iron2.png" mode="aspectFill"></image>
						</view>
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

			}
		},
		onLoad() {

		},
		methods: {

		},
		computed:{
			userinfo(){
				return this.$store.state.userinfo
			}
		}
	}
</script>

<style lang="scss">
	.head{
		background: $bgc;
		padding-bottom: 60upx;
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
	
	.toparea {
		width: 750upx;
		height: 122upx;
		// vertical-align:top;
		background: rgba(9, 30, 66, 1);
	}

	.wcontent {
		width: 750upx;
		height: 418upx;
		border-radius: 32upx;
		background-color: #FFFFFF;
		box-shadow: 0upx 8upx 16upx 0upx rgba(9, 30, 66, 0.1);
	}

	.top-text {
		vertical-align: middle;
		font-weight: SC-Bold;
		font-size: 70upx;
		width: 282upx;
		height: 70upx;
		font-family: PingFang;
		font-weight: bold;
		color: #57D9A3;
		margin-left: 34upx;
		margin-top: 12upx;
	}

	.uni-top-image {
		display: flex;
		vertical-align: middle;
		width: $uni-top-image-width;
		height: $uni-top-image-height;
		// border:1upx solid #FFFFFF;
		border-radius: 50%;
		margin-right: 100upx;
		margin-top: -60upx;
		margin-left: 654upx;
	}

	.secondcontent {
		display: flex;
		border-radius: 48upx;
		position: relative;
		top: -50upx;
	}

	.round-table {
		width: 168upx;
		height: 248upx;
		margin: 95upx 100upx 75upx 79upx;
		vertical-align: middle;
	}

	.t-content {
		vertical-align: top;
		width: 240upx;
		font-size: 48upx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(23, 43, 77, 1);
		margin-top: 108upx;
	}

	.orginal {
		vertical-align: top;
		width: 170upx;
		font-size: 34upx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(94, 108, 132, 1);
		line-height: 44upx;
	}

	.m-concent {
		width: 240upx;
		height: 170upx;
	}

	.m-price {
		font-size: 26upx;
		font-family: PingFang;
		font-weight: bold;
	}

	.roundround {
		text-align: center;
		vertical-align: top;
		width: 59upx;
		height: 59upx;
		color: #FFFFFF;
		font-size: 59upx;
		border-radius: 50%;
		background-color: #39B54A;
		margin-top: 236upx;
		margin-right: 46upx;
	}

	.good-list {
		display: flex;
		flex-wrap: wrap;
		width: 750upx;
		background-color: #FAFBFC;
	}

	.good-list1 {
		width: 328upx;
		height: 448upx;
		background: rgba(94, 108, 132, 1);
		border-radius: 16upx;
		margin: 20upx;
	}

	.good-list1-text {
		width: 328upx;
		flex-wrap: wrap;
	}

	.wood {
		width: 187upx;
		height: 192upx;
		margin-left: 62upx;
		margin-right: 78upx;
		vertical-align: middle;
	}

	.chair {
		margin-top: 32upx;
		margin-left: 32upx;
		width: 244upx;
		height: 255upx;
	}

	.good-list2 {

		width: 328upx;
		height: 538upx;
		background: rgba(241, 241, 241, 1);
		border-radius: 16upx;
		margin: 20upx;
		color: #5E6C84;

	}

	.good-list2-text {
		width: 328upx;
		flex-wrap: wrap;
	}

	.good-text2 {
		padding-top: 20upx;
		margin-left: 34upx;
		width: 170upx;
		font-size: 34upx;
		font-family: PingFang;
		font-weight: bold;
		color: #5E6C84;
	}

	.gprice2 {
		margin-top: 5upx;
		margin-left: 34upx;
		width: 70upx;
		height: 25upx;
		font-size: 30upx;
		font-family: SFProText;
		font-weight: 600;
		color: #5E6C84;
		line-height: 40upx;
	}

	.good-list3 {
		width: 327upx;
		height: 448upx;
		background: rgba(255, 171, 0, 1);
		border-radius: 16upx;
		margin-left: 20upx;
		margin-right: 20upx;
		margin-top: -80upx;
	}

	.good-text3 {
		padding-top: 20upx;
		margin-left: 34upx;
		width: 170upx;
		font-size: 34upx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(250, 251, 252, 1);
	}

	.line {
		width: 82upx;
		height: 270upx;
		margin-left: 119upx;
		margin-top: 52upx;
	}

	.good-list4 {
		width: 327upx;
		height: 358upx;
		background: rgba(87, 217, 163, 1);
		border-radius: 16upx;
		margin: 20upx;
	}

	.workchair {
		width: 169upx;
		height: 250upx;
		margin-left: 104upx;
		margin-top: -30upx;
	}

	.good-text {
		padding-top: 20upx;
		margin-left: 34upx;
		width: 170upx;
		font-size: 34upx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(250, 251, 252, 1);
	}

	.gprice {
		margin-top: 5upx;
		margin-left: 34upx;
		width: 70upx;
		height: 25upx;
		font-size: 30upx;
		font-family: SFProText;
		font-weight: 600;
		color: rgba(250, 251, 252, 1);
		line-height: 40upx;
	}
</style>
