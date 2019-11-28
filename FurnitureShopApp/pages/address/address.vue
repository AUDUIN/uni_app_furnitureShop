<template>
	<view class="address">
		<view class="head clearfix">
			<view class="head-title fl">
				配送
			</view>
			
		</view>

		<view class="delivery-box">
			<view class="delivery">
				<view class="shipping-address">
					<text>配送地址</text>
				</view>
				<form>
					<view class="">
						<input v-model="addressInfo.username" placeholder="收货人姓名" name="name"></input>
					</view>
					<view class="">
						<input v-model="addressInfo.phone" placeholder="手机号" name="phone"></input>
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
						<input v-model="addressInfo.address" placeholder="详细地址" name="address"></input>
					
					</view>
				</form>
			</view>
			<view class="arrow" @tap="saveData">
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
		onLoad(option) {
			console.log(option)
			if (option.editNum !== -1) {
				this.addressInfo = JSON.parse(JSON.stringify(this.addressData[option.editNum]));
				this.sel1 = this.addressData[option.editNum].loc[0].num;
				this.sel2 = this.addressData[option.editNum].loc[1].num;
				this.sel3 = this.addressData[option.editNum].loc[2].num;
			}
		},
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
				uni.navigateTo({
					url:"../confirmations/confirmations"
				})
				return this.$store.commit('addressAddMut',newAddress);


			},
	
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

	.head{
		padding-bottom: 42upx;
		background: $bgc;
		.head-title{
			color: $head-text-color;
			font-size: 64upx;
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
					// height: 44upx;
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
