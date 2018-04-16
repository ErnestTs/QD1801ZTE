define(["jquery", "jquery-cookie"], function($){
	var login = function(){
		console.log("登录注册");
		//用户名正则判断
		$("#input_uname").blur(function(){
			var uname_zz = /^[1][3,4,5,7,8][0-9]{9}$/;
			var oValue = this.value.replace(/\s/g, "");
			this.value = oValue;

			if(!oValue){
				$(this).css("borderColor", "#DC143C");
				$("#remind_1").html("用户名不能为空").css("display", "block");
			}else if(!uname_zz.test($(this).val())){
					$(this).css("borderColor", "#DC143C");
					$("#remind_1").html("请输入正确用户名").css("display", "block");
			}else{
				$(this).css("borderColor", "#ccc");
				$("#remind_1").html("").css("display", "none");
			}		
		})
		//密码正则判断
		var password = null;
		$("#input_password").blur(function(){
			password = this.value.replace(/\s/g, "");
			this.value = password;
			if(!password){
				$(this).css("borderColor", "#DC143C");
				$("#remind_2").html("密码不能为空").css("display", "block");
			}else if(this.value.length < 6 || this.value.length > 12){
				$(this).css("borderColor", "#DC143C");
				$("#remind_2").html("密码长度6~12位").css("display", "block");
			}else{
				$(this).css("borderColor", "#ccc");
				$("#remind_2").html("").css("display", "none");
			}
		})
		//再次输入密码正则判断
		$("#input_password_again").blur(function(){			
			if(this.value != password){
				$(this).css("borderColor", "#DC143C");
				$("#remind_3").html("密码输入不一致").css("display", "block");
			}
		})
		//验证码验证
	}
	return {
		login: login
	}
})