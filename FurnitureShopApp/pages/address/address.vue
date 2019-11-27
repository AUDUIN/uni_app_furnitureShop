<template>
	<view class="address">
		<view class="head clearfix">
			<view class="head-title fl">
				配送
			</view>
			<view class="head-price fr">
				$ 1531.0
			</view>
		</view>

		<view class="delivery-box">
			<view class="delivery">
				<view class="shipping-address">
					<text>配送地址</text>
				</view>
				<form>
					<view class="">
						<input placeholder="收货人姓名" name="name"></input>
					</view>
					<view class="">
						<input placeholder="手机号" name="phone"></input>
					</view>

					<view class="">
						<select v-model="sel1" @change="handlesel1" name="province_code" class="sel">
							<option :value="-1">请选择城市</option>
							<option :value="index" v-for="(item, index) in loc1" :key="index">{{item.Name}}</option>
						</select>
					</view>
					<view class="sel-two">
						<select v-model="sel2" @change="handlesel2" class="select-item">
							<option :value="-1">请选择省份</option>
							<option :value="index" v-for="(item, index) in loc2" :key="index">{{item.Name}}</option>
						</select>
						<select v-model="sel3" class="select-item">
							<option :value="-1">请选择区县</option>
							<option :value="index" v-for="(item, index) in loc3" :key="index">{{item.Name}}</option>
						</select>
					</view>
					
					<view class="">
						<input placeholder="详细地址" name="address"></input>
					</view>
				</form>
			</view>
			<view class="arrow">
				<image src="../../static/img/arrow-forward.png" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	import cityData from '../../static/js/city.js'
	export default {
		data() {
			return {
				loc1: cityData,
				sel1: -1,
				sel2: -1,
				sel3: -1,
				addressInfo: {
					'username': '',
					'phone': '',
					'tel': ['', ''],
					'address': '',
					'isDefault': false
				}
			}
		},
		// created() {
		// 	if (this.editNum !== -1) {
		// 		this.addressInfo = JSON.parse(JSON.stringify(this.addressData[this.editNum]));
		// 		this.sel1 = this.addressData[this.editNum].loc[0].num;
		// 		this.sel2 = this.addressData[this.editNum].loc[1].num;
		// 		this.sel3 = this.addressData[this.editNum].loc[2].num;
		// 	}
		// },
		methods: {
			handlesel1() {
				this.sel2 = this.sel3 = -1;
			},
			handlesel2() {
				this.sel3 = -1;
			},
			haddleClose() {
				return this.$emit('popClose');
			},

			saveData() {
				let newAddress = this.addressInfo;
				newAddress.loc = [{
						'text': this.loc1[this.sel1].Name,
						'num': this.sel1
					},
					{
						'text': this.loc2[this.sel2].Name,
						'num': this.sel2
					},
					{
						'text': this.loc3[this.sel3].Name,
						'num': this.sel3
					}
				];

				this.$emit('popClose');
				return this.$store.commit('addressAddMut', {
					idx: this.editNum,
					newAddress
				});


			}
		},
		computed: {
			loc2() {
				return this.sel1 === -1 ? [] : this.loc1[this.sel1].City
			},
			loc3() {
				return this.sel2 === -1 ? [] : this.loc2[this.sel2].Region
			},
			isSave() {
				return this.addressInfo.username !== '' && this.addressInfo.phone !== '' && this.sel1 !== -1 && this.sel2 !== -1 &&
					this.addressInfo.address !== ''
			},
			addressData() {
				return this.$store.state.addressData
			}
		},


	}
</script>

<style lang="scss">
	.address {
		// height: 100%;
		height: 1334upx;
		background-color: #091E42;
	}

	.head {
		.head-title {
			color: #57D9A3;
			font-size: 72upx;
			margin-left: 48upx;
			margin-top: 12upx;
			margin-bottom: 26upx;
		}

		.head-price {
			margin-right: 48upx;
			margin-top: 30upx;
			margin-bottom: 30upx;
			font-size: 48upx;
			color: white;
		}


	}

	.delivery-box {
		background-color: #57D9A3;
		border-radius: 32upx;
		position: relative;

		.delivery {
			width: calc(100% - 78upx);
			background-color: #FFFFFF;
			border-radius: 32upx;
			overflow: hidden;

			.shipping-address {
				width: 254upx;
				height: 58upx;
				background-color: #57D9A3;
				margin-left: 48upx;
				margin-top: 48upx;
				margin-bottom: 20upx;
				text-align: center;

				text {
					line-height: 58upx;
					font-size: 48upx;
					color: #FFFFFF;
				}
			}

			form {
				display: inline-block;
				margin-bottom: 208upx;

				input {
					font-size: 34upx;
					line-height:44upx;
					margin-left: 48upx;
					margin-right: 48upx;
					border-bottom: 2upx solid #DFE1E6;
					padding-bottom: 40upx;
					padding-top: 40upx;
					padding-left: 18upx;
					
				}

				.sel {
					width: 576upx;
					margin-left: 48upx;
					margin-right: 48upx;
					padding-bottom: 40upx;
					padding-top: 40upx;
					padding-left: 18upx;
					border: none;
					border-bottom: 2upx solid #DFE1E6;
					font-size: 34upx;
					color: #172B4D;
					outline: none;
					appearance: none;
					background: url(../../static/img/chevron-down.png) no-repeat right center;
					background-size: 42upx 24upx;
				}

				.sel-two {
					display: flex;
					justify-content: space-between;
					margin-left: 48upx;
					margin-right: 48upx;

					.select-item {
						width: 240upx;
						padding-bottom: 40upx;
						padding-top: 40upx;
						padding-left: 18upx;
						border: none;
						border-bottom: 2upx solid #DFE1E6;
						font-size: 34upx;
						color: #172B4D;
						outline: none;
						appearance: none;
						background: url(../../static/img/chevron-down.png) no-repeat right center;
						background-size: 42upx 24upx;
					}
				}

			}
		}

		.arrow {
			position: absolute;
			bottom: -64upx;
			left: 50%;
			transform: translate(-50%);
			width: 128upx;
			height: 128upx;
			border-radius: 50%;
			background-color: #2684FF;
			text-align: center;
			line-height: 128upx;

			image {
				width: 48upx;
				height: 48upx;
				vertical-align: middle;
			}
		}
	}
</style>
