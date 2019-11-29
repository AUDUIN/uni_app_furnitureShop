<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import "colorui/main.css"; */
	@import "colorui/icon.css";
	.fr{
		float: right;
	}
	.fl{
		float: left;
	}
	.clearfix{
		clear: both;
	}
	.clearfix:after {
	    display: block;
	    clear: both;
	    content: '';
	    height: 0;
	    overflow: hidden;
	    visibility: hidden;
	}
	.clearfix{zoom:1;} /*为了兼容IE6,IE7*/
</style>
