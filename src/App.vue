<template>
    <div class="app-container">
        <mt-header class='aa' fixed title="Vue.项目"></mt-header>
		<div class="box"></div>
        <h1>123</h1>
		

        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
    
</template>
<style lang='less' scoped>
    .app-container{
        padding-top: 40px;
    }
	.box{
		width: 100%;
		height: 66px;
		background: red;
	}
</style>
<script>
 
</script>