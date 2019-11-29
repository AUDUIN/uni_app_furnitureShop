<template>
	<view style="margin-top: 40upx;">

		<form>
			<view class="border margin">
				<view class="cu-form-group">
					<view class="grid col-1 grid-square flex-sub" style="justify-content: center;">
						<view v-if="imgUrl" class="bg-img">
							<image :src="imgUrl" mode="aspectFill"></image>
							<view class="cu-tag bg-red">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view v-else class="solids">
							<text @tap="chooseImage" class='cuIcon-camera'></text>
						</view>
					</view>
				</view>

				<view @tap="handlePub" class="cu-btn block margin bg-cyan">
					确定修改
					
					
				</view>
			</view>

		</form>
	</view>
</template>

<script>
	
	export default {

		data() {
			return {
				imgUrl: null, //存放前端展示路径
				pics: null //存放服务器存储路径 
			};
		},
		computed:{
			userinfo(){
				return this.$store.state.userinfo
			}
		},
		methods: {
			chooseImage() {
				uni.chooseImage({ //获取本地图片资源
					count: 1,
					success: (res) => {
						console.log(res.tempFilePaths)
						let temp = res.tempFilePaths[0]
						this.imgUrl = temp;
						uni.uploadFile({ //上传本地文件资源至服务器
							url: this.BASE_URL+'/profile',
							filePath: temp,
							name: 'avatar',
							success: (res1) => {
								console.log(res1)
								let data = JSON.parse(res1.data)
								if (data.code == 1) {
									this.pics = data.imgSrc
									let url = this.BASE_URL+data.imgSrc
									this.imgUrl = url
								}
							}
						})
					}
				})
			},
			handlePub() { //修改图片，传入数据库
				
				uni.request({
					url:this.BASE_URL+'/users/changeimg',
					data:{
						username:this.userinfo.username,
						userimgurl:this.pics
					},
					success: (result) => {
						console.log(result)
						uni.showModal({
							content: '修改成功',
							showCancel: false
						});
						this.$store.commit('changeimgmut',this.pics)
					}
				})
				// let pub = await generalGET(
				// 	'/users/msg', {
				// 		title: this.title,
				// 		content: this.content,
				// 		pics: JSON.stringify(this.pics)
				// 	},
				// 	'POST'
				// )
			}
		}
	}
</script>

<style lang="scss">
	 @import "../../colorui/main.css";
</style>
