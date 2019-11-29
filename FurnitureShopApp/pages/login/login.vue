<template>
	<view class="uni-flex uni-column  bgc" style="margin-top: 40upx;">
		<view class="flex-item flex-item-V uni-bg-red">
			<image class="logo" src="../../static/login/logo.png" mode="aspectFill"></image>
			<view class="welcome">你好,欢迎回来</view>
			<view class="book">
				<text class="booklogin active ">登录</text>
				<text class="booklogin ml" @tap="handleMyCenter">注册</text>
			</view>
		</view>
		<view class="flex-item flex-item-V uni-bg-green second-box1">
			<view class=" second-box ">
				<view class="box">
					<input type="confirmtype" class="e-mail" value="" placeholder="请输入邮箱" @blur="checkmail($event.detail.value)" v-model="username" />
					<image class="human" src="../../static/login/ion-ios-person%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>
				<view class="box2">
					<input type="password" v-model="pwd" class="pwd" value="" placeholder="请输入密码" @input="search($event)" @blur="checkpwd($event.detail.value)" />
					<image class="human hpwd " src="../../static/login/ion-android-lock%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>
				<view class="box3">
					<view class="radio"></view>
					<text class="rember rm">记住密码</text>
					<text class="rember fg">忘记密码</text>
					<button class="btn-login" @tap="login" type="primary">登录</button>
				</view>
			</view>
			<view class="fast-fast">
				<view class="fast"><text class="">或者快速登录</text></view>
				<view class="line-line"></view>
				<image class="goole" src="../../static/login/Google.png" mode="aspectFill"></image>
				<image class="face" src="../../static/login/Facebook.png" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			username:'admin1',
			photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			nickname: '尚未登录',
			pwd:'123456'
		};
	},
	onLoad(option) {
		if(option.username)
		this.username=option.username;
	// 	uni.getStorage({
	// 		key:'token',
	// 		success: (res) => {
	// 			console.log(res.data)
	// 			uni.request({
	// 				url:this.BASE_URL+'/users/token/verify',
	// 				data:{
	// 					token:res.data
	// 				},
	// 				success: (result) => {
	// 					uni.showModal({
	// 						content: result.data.msg+'即将进入首页',
	// 						showCancel: false
	// 					}).then(()=>{
	// 						uni.getStorage({
	// 							key:'userinfo',
	// 							success: (user) => {
	// 								console.log(user)
	// 								this.$store.commit('usermut',user)
	// 								// uni.switchTab({
	// 								// 	url:`../home-product/home-product`
	// 								// })
	// 							}
	// 						})
							
							
	// 					});
						
	// 				}
	// 			})
	// 		}
	// 	})
	},
	methods: {
		login(){
			uni.request({
				url:this.BASE_URL+'/users/login',
				data:{
					username:this.username,
					pwd:this.pwd
				},
				success: (res) => {
					console.log(res.data.userinfo)
					if(res.data.code==1){
						uni.showModal({
							content: res.data.msg,
							showCancel: false
						}).then(()=>{
							uni.setStorage({
								key:'token',
								data:res.data.data
							}).then(()=>{
								uni.setStorage({
									key:'userinfo',
									data:{
										username:this.username,
										userinfo:res.data.userinfo
									}
								})
							})				
							this.$store.commit('usermut',{
								username:this.username,
								userinfo:res.data.userinfo
							})
							
							uni.switchTab({
								url:`../home-product/home-product`
							})
						});
						
					}else{
						uni.showModal({
							content: res.data.msg,
							showCancel: false
						});
					}
				}
			})
		},
		search(event) {
			// console.log(event.detail.value)
			// 看input里的值
		},
		checkmail(event) {
			//下面的是邮箱验证
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			console.log(event);
			if (!reg.test(event)) {
				uni.showToast({ title: '请填写正确邮箱号', icon: 'none' });
				return false;
			}
		},
		checkpwd(event) {
			var rel = /^[a-zA-Z0-9]{6,22}$/;
			console.log(event);
			if (!rel.test(event)) {
				uni.showToast({ title: '请填写正确密码格式', icon: 'none' });
				return false;
			}
		},
		handleMyCenter() {
			uni.navigateTo({
				url: "../sign/sign"
			});
		}
	}
};
</script>

<style>
.logo {
	width: 100upx;
	height: 100upx;
	padding-left: 64upx;
	padding-top: 100upx;
}
.bgc {
	width: 750upx;
	height: 1624upx;
	background: rgba(9, 30, 66, 1);
}

.welcome {
	width: 480upx;
	font-size: 68upx;
	font-family: PingFang;
	font-weight: bold;
	color: rgba(87, 217, 163, 1);
	padding-top: 40upx;
	padding-left: 66upx;
}
.book {
	margin-top: 40upx;
	margin-bottom: 52upx;
}
.booklogin {
	padding-left: 65upx;

	width: 80upx;
	font-size: 40upx;
	font-family: PingFang;
	font-weight: bold;
	color: rgba(94, 108, 132, 1);
}
.active {
	color: rgba(255, 255, 255, 1);
}
.ml {
	padding-left: 114upx;
}

.second-box {
	width: 750upx;
	height: 650upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0upx 14upx 34upx 0upx rgba(9, 30, 66, 0.2);
	border-radius: 32upx;
}
.e-mail {
	padding-top: 64upx;
	padding-bottom: 10upx;
	margin-bottom: 20upx;
	padding-left: 64upx;
	padding-right: 64upx;
	text-align: center;
}
.human {
	width: 36upx;
	height: 36upx;
	position: absolute;
	right: 66upx;
	margin-top: -50upx;
}
.hpwd {
	margin-right: -50upx;
}
.pwd {
	margin-bottom: 20upx;
	padding-bottom: 10upx;
	padding-top: 84upx;
	padding-left: 64upx;
	padding-right: 64upx;
	text-align: center;
}
.box {
	border-bottom: 5upx solid #dfe1e6;
	margin-left: 50upx;
	margin-right: 50upx;
}
.box3 {
	padding-top: 70upx;
	position: relative;
}
.box2 {
	border-bottom: 5upx solid #dfe1e6;
	margin-left: 50upx;
	margin-right: 50upx;
	position: relative;
}
.rember {
	padding-top: 70upx;
	width: 116upx;
	height: 29upx;
	font-size: 30upx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: rgba(94, 108, 132, 1);
}
.rm {
	padding-left: 114upx;
}
.fg {
	padding-left: 340upx;
	text-decoration: underline;
}
.btn-login {
	margin-top: 80upx;
	width: 332upx;
	height: 96upx;
	background: rgba(38, 132, 255, 1);
	box-shadow: 0upx 14upx 34upx 0upx rgba(38, 132, 255, 0.3);
	border-radius: 48upx;
}
.radio {
	position: absolute;
	top: 80upx;
	left: 30upx;
	width: 36upx;
	height: 36upx;
	background: rgba(94, 108, 132, 1);
}
.second-box1 {
	width: 750upx;
	height: 900upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0upx 14upx 34upx 0upx rgba(9, 30, 66, 0.2);
	border-radius: 32upx;
}
.fast-fast {
	position: relative;
}
.fast {
	margin-bottom: -10upx;
	margin-left: 50upx;
	margin-top: 140upx;
	width: 238upx;
	height: 34upx;
	font-size: 34upx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: rgba(94, 108, 132, 1);
}
.line-line {
	left: 320upx;
	position: absolute;
	width: 100upx;
	border: 2upx solid rgba(165, 173, 186, 1);
}
.goole {
	width: 48upx;
	height: 48upx;
	position: absolute;
	right: 176upx;
	margin-top: -24upx;
}
.face {
	width: 48upx;
	height: 48upx;
	position: absolute;
	right: 82upx;
	margin-top: -24upx;
}
</style>
