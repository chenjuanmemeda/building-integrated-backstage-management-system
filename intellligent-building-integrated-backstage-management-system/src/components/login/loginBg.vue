<template>
	<div class="index-bn">
		<div :class="{active:curBanner==1}" >
			<div class="pic-bg">
				<div class="logo"></div>
				<img :src="imgs[0].url" class="banner">
			</div>
			<div class="pic-bg" id="particle-div">
				<img :src="imgs[1].url" class="banner">
			</div>
		</div>
		<ul class="banner-dot">
			<li v-for="(pic,i) in imgs" :key="i" :class="{active:curBanner==i}"  class="dot" @click="bannerTab(i)"></li>
			<div class="login-agreement">
				<a  hideFocus v-for="(item,index) in items" :key="index">{{item}}&nbsp|&nbsp</a>
				<a hideFocus>版权投诉</a>
			</div>
		</ul>
		<div class="login-language">
			<a hideFocus href="" class='active' id="china">中文</a>
			<a hideFocus href=""  id="english">|&nbsp&nbspENG</a>
			<div class="login-main">
				<div class="login-logo">
					<img src="static/images/login/login-logo.png" >
				</div>
				<div class="login-info" v-show='usernameErrorShow'>{{usernameError}}</div>	
				<div class="login-name" >
					<i class="login-icon1"></i>
					<a v-show="iconShow"  @click="resetName()" id="delete1">
						<i class="login-icon-delete1"></i>
					</a>
					<input type="text" name="username" 
						class="login-name-input login-input"
					placeholder="请输入用户名" v-model="userInfo.username"  
					@change="inputChange('username',userInfo.username)" @focus="iconVisible()" @blur="iconHidden()">
				</div>
				<div class="login-info" v-show='passwordErrorShow'>{{passwordError}}</div>	
				<div class="login-password">
					<i class="login-icon2"></i>
					<a v-show="iconShow" @click="resetPassword()" id="delete2">
						<i class="login-icon-delete2"></i>
					</a>
					<input type="password" name="password" 
						class="login-password-input login-input"
					placeholder="请输入密码" v-model="userInfo.password" 
					@change = "inputChange('password',userInfo.password)"
					@focus="iconVisible()" @blur="iconHidden()">
				</div>
				<div class="login-sub">
					<input type="button" value="登  录" class="login-button" @click="submit()" :disabled = 'beDisabled' >
				</div>
        	</div>
			<div class="login-code">
				<div class="login-code-android" @mouseenter="codeAVisible()" @mouseleave="codeAHidden()">
            	</div>
				<div class="login-code-ios" @mouseenter="codeIosVisible()" @mouseleave="codeIosHidden()">
				</div>
				
				 <div class="login-code-android-code" v-show="codeA">
					<div class="code-title" style="margin-top:10px;">安卓端下载</div>
					<div class="code-img">
						<img src="static/images/login/login-android-code.png" alt="" class="code-img-size">
					</div>
				</div>
				<div class="login-code-ios-code" v-show="codeIos">
					<div class="code-title" style="margin-top:10px;">ios端下载</div>
					<div class="code-img">
						<img src="static/images/login/login-ios-code.png"  class="code-img-size">
					</div>
				</div>
        	</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'index-bn',
		data() {
			return {
				imgs:[
					{
						des:'1',
						url:'../static/images/login/login-1.png'
					},
					{
						des:'2',
						url:'../static/images/login/login-2.png'
					}
				],
				items:['服务协议','权力声明','版本更新','帮助中心'],
				// codes:['../static/images/login/login-android.png','../static/images/login/login-ios.png'],
				curBanner:0,
				timer:null,
				userInfo:{
					username:'',   //用户名
					password:'',   //密码
				},
				usernameError:'',   //用户名错误提示信息 
				usernameErrorShow:false,  //用户名错误提示框

				passwordError:'',   //密码错误提示信息
				passwordErrorShow:false,  //密码错误提示框
				beDisabled:true,		 //如果格式错误 按钮不可点击
				iconShow:false,       //input框内清空提示图片

				codeA:false,codeIos:false //安卓二维码和苹果二维码
			}
		},
		created:function(){
			this.startAutoTab();
		},
		watch:{
			curBanner:function(){
				this.timer=setTimeout(function(){
					// nextBanner();
				},2500);
			},
		},
		mounted(){
			 //配置
		    var config = {
		        vx: 4,	//小球x轴速度,正为右，负为左
		        vy: 4,	//小球y轴速度
		        height: 3,	//小球高宽，其实为正方形，所以不宜太大
		        width: 3,
		        count: 150,		//点个数
		        color: "185,185,185", 	//点颜色
		        stroke: "185,185,185", 		//线条颜色
		        dist: 6000, 	//点吸附距离
		        e_dist: 20000, 	//鼠标吸附加速距离
		        max_conn: 10 	//点到点最大连接数
		    }

		    //调用
		    CanvasParticle(config);
		},
		methods:{
			// banner start
			stopAutoTab:function(){
				clearInterval(this.timer);
			},
			startAutoTab:function(){
				this.timer=setInterval(this.nextBanner,5000);
			},
			bannerTab:function(i){
				this.curBanner=i;
			},
			nextBanner:function(){
				if (this.curBanner==this.imgs.length-1) {
					this.curBanner=0;
				}else{
					this.curBanner++;
				}
			},
			preBanner:function(){
				if (this.curBanner==0) {
					this.curBanner=this.imgs.length-1;
				}else{
					this.curBanner--;
				}
			},
			// banner end
			// login start
				// 验证用户输入格式是否正确,如果正确则给服务器发送用户注册信息
			inputChange:function(errorItem,inputContent){
					var reg1 = /^([a-zA-Z]|[\u4e00-\u9fa5]){1}([a-zA-Z0-9]|[\u4e00-\u9fa5]|[_]){3,15}$/ ;  //用户名由4-16位的字母，数字，汉字，下划线组成，开头只能是字母和汉字
					var reg2 =/^[a-zA-Z0-9]{4,10}$/;   //密码由4-10位的字母，数字组成
					var reg3 = /^1[3|4|5|7|8]\d{9}$/;//手机号码正则表达式
					var reg4=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;  //邮箱验证
					
				if (errorItem === 'username') {
					if (this.userInfo.username=='') {
						this.usernameErrorShow= true;
						this.usernameError= '用户名不能为空';
						this.beDisabled = true;
					}else if(!reg1.test(inputContent)){
							this.usernameErrorShow= true;
							this.usernameError= '请输入4-6位由字母和汉字组成的用户名';
							this.beDisabled = true;
							this.iconShow=true;
					}else{
						this.usernameErrorShow= false; 
						this.beDisabled = false;  
					}
				}else if(errorItem === 'password') {
					if (inputContent=='') {
							this.passwordErrorShow = true;
						this.passwordError = '密码不能为空';
						this.beDisabled = true;
					}else if(!reg2.test(inputContent)){
							this.passwordErrorShow = true;
							this.passwordError = '请输入由4-10位的字母，数字组成的密码';
							this.beDisabled = true;
					}else{
							this.passwordErrorShow = false;
							this.beDisabled = false; 
						}
					}
				},
				// 重置
				resetName:function(){
					this.userInfo.username='';this.usernameErrorShow=false;
				},
				resetPassword:function(){
					this.userInfo.password='';this.passwordErrorShow = false;
				},
				//给服务器发送请求
				submit:function(){
					this.$http({
						url:'http://localhost:8080/signUp',
						emulateJSON: true,
						method:"post",
						data:this.userInfo
					}).then(function(res){
						console.log(res);
						if(res.data == 'yes'){
							if(confirm('是否自动跳转到首页')){
								
								window.location.replace("../../myindex.html");
							}else{
								window.location.reload();
							}
							// window.location.replace("../../myindex.html");
							// this.$store.state.isShow=true;
						}else{
							this.usernameErrorShow= true;
							this.usernameError= '该用户名已被注册';
							this.beDisabled = true;
						}
					},function(){})
			},
			iconVisible:function(){
				this.iconShow=true;
			},
			iconHidden:function(){
				this.iconShow=false;
			},
			// login end
			// code start
			codeAVisible:function(){
				this.codeA=true;
			},
			codeAHidden:function(){
				this.codeA=false;
			},
			codeIosVisible:function(){
				this.codeIos=true;
			},
			codeIosHidden:function(){
				this.codeIos=false;
			}
			// code end
		}
		
	}
</script>
<style type="text/css">
 @import 'login.css';
</style>
