<template>
  <div id="login-index">
	 <login-bn>
	 </login-bn>
  </div>
</template>

<script>
  import loginBn from './components/login/loginBg'

export default {
  name: 'login-index',
  components: {
    'login-bn':loginBn
  }
}
</script>

<style>
#login-index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
/*banner图CSS设置*/


 /* .index_banner{
	width: 100%;
	background-repeat: repeat-x;
	height: 336px;
}
.index_banner img{
	margin:0 auto;
	display: block;
	position:absolute;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0;
	transition: 1.2s;
}
.index_banner img.active{
	opacity: 1;
}
.index_banner>div{
	position: relative;
}
.index_banner>div>span{
	position: absolute;
	top:50%;transform: translateY(-50%);
	height: 50px;width: 30px;
	color: rgba(243,241,241,1);
	font-size: 45px;
	cursor: pointer;
	padding: 0 5px;
	-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;
	transition: 0.5s;
}
.index_banner>div>span:hover{background: rgba(0,0,0,0.2);}
.index_banner>div>span:nth-of-type(1){left: 0;}
.index_banner>div>span:nth-of-type(2){right: 0;}
.index_banner>div>.dot_bannerNav{
	position: absolute;
	bottom: 10px;left: 50%;
	transform: translateX(-50%)
}
.index_banner>div>.dot_bannerNav>li{
	float: left;padding: 10px;
	overflow: hidden;
	cursor: pointer;
}
.index_banner>div>.dot_bannerNav>li>span{
	display: block;
	width: 8px;height: 8px;
	border-radius: 8px;background:#d9d9d9;
}
.index_banner>div>.dot_bannerNav>li:hover span,.index_banner>div>.dot_bannerNav>li>span.active{
	background: #c10d0c;
} */
   
</style>
