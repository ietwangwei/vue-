<template>
	<div>
		<div class="main" :class="{'success':success,'error':error}">
			<p v-show="success">{{message}}</p>
			<p v-show="error"><span class="el-icon-warning mr10"></span>{{message}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'alert',
		data:function(){
			return {
				message:'nidaye',
				success:false,
				error:false
			}
		}
	}
</script>
<style type="text/css"scoped>
	.main{
		padding: 16px;
		width: 3rem;
		text-align: center;
		position: fixed;
		bottom: 2%;
		right: 2%;
		font-size: 14px;
		opacity: 0.8;
		border-radius: 3px;
	}
	.mr10{
		margin-right: .1rem;
	}
	.success{
		background-color: #67c23a;
		color: #fff;
	}
	.error{
		background-color: #db635f;
		color: #fff;
	}

</style>