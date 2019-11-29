<template>
	<view class="uni-flex uni-column  bgc" style="margin-top: 40upx;">
		<view class="flex-item flex-item-V uni-bg-red">
			<image class="logo" src="../../static/login/logo.png" mode="aspectFill"></image>
			<view class="welcome">新账户</view>
			<view class="book">
				<text class="booklogin" @tap="handleMyCenter">登录</text>
				<text class="booklogin ml active">注册</text>
			</view>
		</view>
		<view class="flex-item flex-item-V uni-bg-green second-box1">
			<view class=" second-box ">
				<view class="box">
					<input v-model="username" type="confirmtype" class="e-mail" value="" placeholder="请输入用户名" />
					<image class="human" src="../../static/login/ion-ios-person%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>
				<view class="box">
					<input type="confirmtype" class="e-mail" value="" placeholder="请输入邮箱" @blur="checkmail($event.detail.value)" />
					<image class="human" src="../../static/login/ion-android-mail%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>
				<view class="box2">
					<input type="password" class="pwd" value="" placeholder="请输入密码" @blur="checkpwd($event.detail.value)" />
					<image class="human hpwd " src="../../static/login/ion-android-lock%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>
				<view class="box2">
					<input type="password" v-model="pwd" class="pwd" value="" placeholder="请再次输入密码" @blur="checkpwd($event.detail.value)" />
					<image class="human hpwd " src="../../static/login/ion-android-lock%20-%20Ionicons.png" mode="aspectFill"></image>
				</view>

				<view class="box3"><button class="btn-login" type="primary" @tap="reg">Next</button></view>
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
			photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			nickname: '尚未登录',
			userid: '',
			username:'admin1',
			pwd:'123456',
		};
	},
	onShow() {
		// 方法1:
		// let userinfo = this.userInfo;
		// console.log(userinfo)
		// if(userinfo){
		// 	this.photo = userinfo.photo;
		// 	this.nickname = userinfo.username;
		// 	this.userid = userinfo.userid;
		// }

		// 方法2:
		// let userinfo = getApp().globalData.userInfo;
		// console.log(userinfo);
		// if (userinfo) {
		// 	this.photo = userinfo.photo;
		// 	this.nickname = userinfo.username;
		// 	this.userid = userinfo.userid;
		// }
	},
	methods: {
		handleMyCenter() {
			uni.navigateTo({
				url: "../login/login"
			});
		},
		reg(){
			uni.request({
				url:this.BASE_URL+'/users/reg',
				data:{
					username:this.username,
					pwd:this.pwd
				},
				success: (res) => {
					console.log(res.data.code==1)
					if(res.data.code==1){
						uni.showModal({
							content: '注册成功',
							showCancel: false
						});
						uni.navigateTo({
							url: `../login/login?username=${this.username}`
						});
					}else{
						uni.showModal({
							content: '用户名已存在',
							showCancel: false
						});
					}
				}
			})
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
.tologin {
	width: 40upx;
	height: 40upx;
	font-family: PingFang;
	color: rgba(255, 255, 255, 1);
	font-size: 40upx;
	padding-top: 32upx;
	padding-left: 32upx;
	font-weight: bold;
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
	height: 700upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0upx 14upx 34upx 0upx rgba(9, 30, 66, 0.2);
	border-radius: 32upx;
}
.e-mail {
	padding-top: 44upx;
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
	padding-top: 44upx;
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
	margin-top: 70upx;
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
