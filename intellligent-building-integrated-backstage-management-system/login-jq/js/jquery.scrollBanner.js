/* 该插件实现了Banner图的滚动效果。
 * 
 * 一、插件的属性：
 * images : 接受数组类型，数组的每个值应为对象。对象具有属性： src->图片的路径 title->图片指上后的文字   href->点击图片跳转的页面
 * 
 * scrollTime : 每张图片的停留时间，单位毫秒。 2000
 * bannerHeight : Banner图的高度.  500px
 * 
 * iconColor : 提示图标的颜色。默认 white
 * iconHoverColor : 提示图标指上之后的颜色。  默认 orange
 * iconPosition : 提示图标的位置，可选值left/center/right。 默认center
 * 
 */
!function($){
	$.fn.scrollBanner = function(obj){
		// 声明各个属性的默认值
		var defaults = {
			images : [],
			scrollTime : 2000,
			bannerHeight : "614px",
			iconColor : "#2a2a2b",
			iconHoverColor : "white",
			iconPosition : "center"
		}
		// 将默认值与传入的对象比对，如果传入的对象有未赋值属性，则使用默认对象的属性
		obj = $.extend(defaults,obj);
		
		// 组件DOM布局
		$("body").css({"padding":"0px","margin" : "0px"});
		
		this.empty().append("<div class='scrollBanner-banner' id='particle-div'></div>");
		$.each(obj.images,function(index,item){
			$(".scrollBanner-banner").append("<div class='scrollBanner-bannerInner'><a ><img src='"+item.src+"'  /></a></div>");
		});
		$(".scrollBanner-banner").append("<div class='scrollBanner-bannerInner'><a href='"+obj.images[0].href+"' target='_black'><img src='"+obj.images[0].src+"' title='"+obj.images[0].title+"' /></a></div>");
		this.append("<div class='login-language'><a  class='active' id='china'>中文</a>|<a   id='english'>ENG</a></div>");
		this.append("<div class='login-main'><div class='login-logo'><img src='login/login-logo.png'></div><div class='login-info'><p style='display:none'>您的用户名为空</p></div><div class='login-name'><i class='login-icon1'></i><a href='javascript:;' style='display:none' id='delete1'><i class='login-icon-delete1'></i></a><input type='text' name='username' class='login-name-input login-input' placeholder='请输入用户名' tabindex='1' value maxlength='20' style='boder:1px solid rgb(203,203,213);'></div>  <div class='login-password'><i class='login-icon2'></i><a href='javascript:;' style='display:none' id='delete2'><i class='login-icon-delete2'></i></a><input type='text' name='password' class='login-password-input login-input'placeholder='请输入密码' tabindex='2 value maxlength='20' style='boder:1px solid rgb(203,203,213);'></div><div class='login-sub'><input type='button' value='登  录' class='login-button' onclick='onSubmit()' style='background-color:rgb(0,0,0);'></div></div>");
		this.append("<div class='scrollBanner-icons'> ");
		this.append("<div class='login-agreement'><a href='javascript:;'>服务协议</a>|<a href='javascript:;'>权力声明</a>|<a href='javascript:;'>版本更新</a>|<a href='javascript:;'>帮助中心</a>|<a href='javascript:;'>版权投诉</a></div>");
		this.append(" <div class='login-code'><div class='login-code-android'><img src='login/login-android.png'  class='code-android'></div><div class='login-code-ios'><img src='login/login-ios.png' class='code-ios'></div><div class='login-code-android-code' style='background-image:url(login/login-prompt2.png);top:-165px;left:64px;display:none;'><div class='code-title' style='margin-top:10px;'>安卓端下载</div><div class='code-img'><img src='login/login-android-code.png' class='code-img-size'></div></div><div class='login-code-ios-code' style='background-image:url(login/login-prompt2.png);top:-165px;left:215px;display:none;'><div class='code-title' style='margin-top:10px;'>ios端下载</div><div class='code-img'><img src='login/login-ios-code.png'  class='code-img-size'></div></div></div>");
		$.each(obj.images,function(index,item){
			// data-* 属性是H5允许用户自行在HTML标签上保存数据的属性。
			// 保存在data-*中的数据，可以使用JS读取调用。
			$(".scrollBanner-icons").append("<div class='scrollBanner-icon' data-index='"+index+"'></div>");
		})
		
		// 设置各种CSS
		this.css({
			"width": "100%",
			"height": obj.bannerHeight,
			"overflow": "hidden",
			"position": "relative"
		});
		
		$(".scrollBanner-banner").css({
			"width": obj.images.length+"00%",
			"height": obj.bannerHeight,
			"transition": "all 1000ms ease-in",
		});
		
		$(".scrollBanner-bannerInner").css({
			"width": 100/(obj.images.length)+"%",
			"height": obj.bannerHeight,
			"overflow": "hidden",
			"float": "left"
		});
		
		$(".scrollBanner-bannerInner img").css({
			"width": "1920px",
			"height": obj.bannerHeight,
			"position": "relative",
			"left": "50%",
			"margin-left": "-960px",
		});
		
		$(".scrollBanner-icons").css({
			"width": "70px","height":"14px",
			"position":"absolute",
			"left":"0px",
			"bottom":"65px",
			"z-index": "100",
            "background-color": "#737d8d",
            "background-color": "rgba(0,0,0,0.4)",
            "text-align":"center",
            "-webkit-border-radius": "16px",
            "-moz-border-radius": "16px",
            "-ms-border-radius": "16px",
           " border-radius": "16px"
		});
		
		switch (obj.iconPosition){
			case "left":
				$(".scrollBanner-icons").css({
					"left":"40px",
				});
				break;
			case "right":
				$(".scrollBanner-icons").css({
					"right":"40px",
				});
				break;
			case "center":
				$(".scrollBanner-icons").css({
					"left":"48%",
					"margin-left": "auto"
				});
				break;
		}
		
		$(".scrollBanner-icon").css({
			"width": "10px",
			"height": "10px",
			"display": "inline-block",
			"margin-left": "5px",
			"margin-right": "10px",
			"margin-bottom":"5px",
			"text-aligin":"center",
           "border-radius": "10px",
			"background-color": obj.iconColor,
			
		});
		// $(".scrollBanner-icon:eq(0)").css({
		// 	"background-color":obj.iconHoverColor,
			
		// });
		
		
		// 实现Banner滚动功能
		var count = 1;
		var icons = $(".scrollBanner-icon");
		setInterval(function(){
			$(".scrollBanner-banner").css({
				"margin-left":"-"+count+"00%",
				"transition": "all 1000ms ease-in",
				// "transform": "translateX(-1684.44px)"
			});
			$(".scrollBanner-icon").css("background-color",obj.iconColor);
			$(".scrollBanner-icon:eq("+count+")").css("background-color",obj.iconHoverColor);
			
			if(count>=obj.images.length)
			$(".scrollBanner-icon:eq("+0+")").css("background-color",obj.iconHoverColor);
			
			if(count>=obj.images.length){
				count = 0;
				$(".scrollBanner-banner").css({
					"margin-left":"0px",
					"transition": "all 1000ms ease-in",
				});
			}
			count++;
		},obj.scrollTime);
		
		
		// 小图标指上以后变色并且切换Banner图
		$(".scrollBanner-icon").mouseover(function(){
			$(".scrollBanner-icon").css("background-color",obj.iconColor);
			// ↓ 由span触发mouseover事件，则this指向这个span。
			// ↓ 但是，这this是JS对象，必须使用$封装成JQuery对象。
			$(this).css("background-color",obj.iconHoverColor);
			// $(this).css("box-shadow","0 0 5px 2px white");
		
			var index = $(this).attr("data-index");
			// 将计数器count修改为index的值，让Banner滚动的定时器能够刚好滚到所指图片的下一张
			count  = index; 
			$(".scrollBanner-banner").css({
				"transition": " all 1000ms ease-in",
				"margin-left": "-"+index+"00%"
			});
		});
		
		// login页面
		$(document).ready(function() {
			/**chrome**/
			if(navigator.userAgent.toLowerCase().indexOf('chrome')>0) {
				$(".login-input").focus(function() {
					$(this).css("border","1px solid #0080d1");
					$(this).prev().css("display", "");
				});
				$(".login-input").blur(function() {
					$(this).css("border","1px solid #cbcbd5");
					$(this).prev().css("display", "none");
					var name = $(".login-name-input").val();
					var pass = $(".login-password-input").val();
					if(name!="" && pass!=""){
						$(".login-button").css("background-color", "#0070c9");
					}else{
						$(".login-button").css("background-color", "#000000");
					}
				});
			}
			/**Opera**/
			if(navigator.userAgent.toLowerCase().indexOf('opera')>0) {
				$(".login-input").focus(function() {
					$(this).css("border","1px solid #0080d1");
					$(this).prev().css("display", "");
				});
				$(".login-input").blur(function() {
					$(this).css("border","1px solid #cbcbd5");
					$(this).prev().css("display", "none");
					var name = $(".login-name-input").val();
					var pass = $(".login-password-input").val();
					if(name!="" && pass!=""){
						$(".login-button").css("background-color", "#0070c9");
					}else{
						$(".login-button").css("background-color", "#000000");
					}
				});
			}
			/**Safari**/
			if(navigator.userAgent.toLowerCase().indexOf('safari')>0) {
				$(".login-name").click(function () {
					$(".login-name-input").css("border","1px solid #0080d1");
					$("#delete1").css("display", "");
					$(".login-password-input").css("border","1px solid #cbcbd5");
					$("#delete2").css("display", "none");
				})
				$(".login-password").click(function () {
					$(".login-password-input").css("border","1px solid #0080d1");
					$("#delete2").css("display", "");
					$(".login-name-input").css("border","1px solid #cbcbd5");
					$("#delete1").css("display", "none");
				})
			}
			/** IE **/
			if (window.navigator.userAgent.indexOf("MSIE")>=1){
				$(".login-name").click(function () {
					$(".login-name-input").css("border","1px solid #0080d1");
					$("#delete1").css("display", "");
					$(".login-password-input").css("border","1px solid #cbcbd5");
					$("#delete2").css("display", "none");
				})
				$(".login-password").click(function () {
					$(".login-password-input").css("border","1px solid #0080d1");
					$("#delete2").css("display", "");
					$(".login-name-input").css("border","1px solid #cbcbd5");
					$("#delete1").css("display", "none");
				})
			}
			if (!!window.ActiveXObject || "ActiveXObject" in window) {
				$(".login-name").click(function () {
					$(".login-name-input").css("border","1px solid #0080d1");
					$("#delete1").css("display", "");
					$(".login-password-input").css("border","1px solid #cbcbd5");
					$("#delete2").css("display", "none");
				})
				$(".login-password").click(function () {
					$(".login-password-input").css("border","1px solid #0080d1");
					$("#delete2").css("display", "");
					$(".login-name-input").css("border","1px solid #cbcbd5");
					$("#delete1").css("display", "none");
				})
			}
			/**firefox**/
			if(navigator.userAgent.toLowerCase().indexOf('firefox')>0){
				$(".login-name").click(function () {
					$(".login-name-input").css("border","1px solid #0080d1");
					$("#delete1").css("display", "");
					$(".login-password-input").css("border","1px solid #cbcbd5");
					$("#delete2").css("display", "none");
				})
				$(".login-password").click(function () {
					$(".login-password-input").css("border","1px solid #0080d1");
					$("#delete2").css("display", "");
					$(".login-name-input").css("border","1px solid #cbcbd5");
					$("#delete1").css("display", "none");
				})
			}
			$("#delete1").mousedown(function () {
				$(".login-name-input").val("");
			})
			$("#delete2").mousedown(function () {
				$(".login-password-input").val("");
			})
			// 鼠标滑过出现二维码
			var me = this;
			$(".login-code-ios").hover(function () {
				me.tipShowTimer = setTimeout(function() {
					$(".login-code-ios").css("background-color", "#d1d0d2");
					$(".code-ios").attr("src","login/login-ios2.png");
					var h = document.documentElement.clientHeight;
					if(h>=720){
						$(".login-code-ios-code").css("background-image", "url(login/login-prompt.png)");
						$(".login-code-ios-code").css("top", "54px");
						$(".login-code-ios-code").css("left", "217px");
						$(".code-title").css("margin-top", "20px");
					}else{
						$(".login-code-ios-code").css("background-image", "url(login/login-prompt2.png)");
						$(".login-code-ios-code").css("top", "-165px");
						$(".login-code-ios-code").css("left", "215px");
						$(".code-title").css("margin-top", "10px");
					}
					$(".login-code-ios-code").css("display", "block");
				}, 300)
			},function () {
				clearTimeout(me.tipShowTimer);
				$(".login-code-ios").css("background-color", "");
				$(".code-ios").attr('src',"login/login-ios.png");
				$(".login-code-ios-code").css("display", "none");
			});
			$(".login-code-android").hover(function () {
				me.tipShowTimers = setTimeout(function() {
					$(".login-code-android").css("background-color", "#d1d0d2");
					$(".code-android").attr('src',"login/login-android2.png");
					var h = document.documentElement.clientHeight;
					if(h>=720){
						$(".login-code-android-code").css("background-image", "url(login/login-prompt.png)");
						$(".login-code-android-code").css("top", "54px");
						$(".login-code-android-code").css("left", "64px");
						$(".code-title").css("margin-top", "20px");
					}else{
						$(".login-code-android-code").css("background-image", "url(login/login-prompt2.png)");
						$(".login-code-android-code").css("top", "-165px");
						$(".login-code-android-code").css("left", "64px");
						$(".code-title").css("margin-top", "10px");
					}
					$(".login-code-android-code").css("display", "");
				}, 300)
			}, function () {
				clearTimeout(me.tipShowTimers);
				$(".login-code-android").css("background-color", "");
				$(".code-android").attr('src',"login/login-android.png");
				$(".login-code-android-code").css("display", "none");
			});
			$(".login-button").mousedown(function () {
				var name = $(".login-name-input").val();
				var password = $(".login-password-input").val();
				if(name != "" && password != ""){
					$(".login-button").css("background-color", "#66bbff");
				}
			})
			$(".login-button").mouseup(function () {
				var name = $(".login-name-input").val();
				var password = $(".login-password-input").val();
				if(name != "" && password != ""){
					$(".login-button").css("background-color", "#0070c9");
				}
			})
			$(".login-name-input").keyup(function () {
				var name = $(".login-name-input").val();
				var password = $(".login-password-input").val();
				if(name!=""&&password!="") {
					$(".login-button").css("background-color", "#0070c9");
				} else {
					$(".login-button").css("background-color", "#000000");
				}
			})
			$(".login-password-input").keyup(function () {
				var name = $(".login-name-input").val();
				var password = $(".login-password-input").val();
				if(name!=""&&password!="") {
					$(".login-button").css("background-color", "#0070c9");
				} else {
					$(".login-button").css("background-color", "#000000");
				}
			})
			// $(".login-wjmm").click(function () {
			// 	$(".login-wjmm").css("text-decoration", "underline");
			// })
		})
		// 切换语言
		function setLanguage(id) {
			$("#"+id).addClass('active');
			if(id == "china") {
				$("#english").removeClass('active');
			} else {
				$("#china").removeClass('active');
			}
		}
		// 
		// 登陆错误提示
		function onSubmit() {
			var name = $(".login-name-input").val();
			var password = $(".login-password-input").val();
			$(".login-info").empty();
			if(name == "" || name == null || name === undefined) {
				$(".login-info>p").css("display","block");
				return;
			} else if(password == "" || password == null || password === undefined) {
				$(".login-info>p").css("您的密码为空");
				return;
			}
			$("#formID").doLogin();
		}
	
	}
}(jQuery);


