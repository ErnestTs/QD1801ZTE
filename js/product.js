define(["jquery", "jquery-cookie"], function($){
	var product = function(){
		console.log("商品详情");
		//加载数据解析数据
		$(function(){
			$.ajax({
				url: "data/data.json",
				type: "GET",
				success: function(res){
					var list_unstyled1 = "";
					var list_unstyled2 = "";
					var product_list = "";
					for(var i = 0; i < res[0].detail1.length; i++){
						list_unstyled1 += '<li class="sub-menu"><a class="sub-menu-a" href="#"><div class="goods-img" style="border-left: medium none"><img src="'+ res[0].detail1[i].img +'" alt="" /></div><div class="goods-data"><div class="goods-name-block"><span>'+ res[0].detail1[i].name +'</span></div><div class="goods-pri-block"><span class="new-pri">￥<strong>'+ res[0].detail1[i].pri +'</strong></span></div></div></a></li>' 
					}
					$(".list-unstyled1").html(list_unstyled1);
					for(var i = 0; i < res[1].detail2.length; i++){
						list_unstyled2 += '<li class="sub-menu"><a class="sub-menu-a" href="#"><div class="goods-img" style="border-left: medium none"><img src="'+ res[1].detail2[i].img +'" alt="" /></div><div class="goods-data"><div class="goods-name-block"><span>'+ res[1].detail2[i].name +'</span></div><div class="goods-pri-block"><span class="new-pri">￥<strong>'+ res[1].detail2[i].ppri +'</strong><span style="text-decoration:line-through">￥'+ res[1].detail2[i].pri +'</span></span></div></div></a></li>' 
					}
					$(".list-unstyled2").html(list_unstyled2);
					for(var i = 0; i < res[8].product_slide.length; i++){
						product_list +='<li><img src="'+ res[8].product_slide[i].img +'" alt=""></li>'
					}
					$(".product-list-img").html(product_list);
				}
			})
		})
		$(".create-f1").hover(function(){
			$(this).find(".detail-block").find("ul").css({
				"display": "block",
				"padding-top": "35px"})
		},function(){
			$(this).find(".detail-block").find("ul").css("display","none");	
		}).on("mouseenter",".sub-menu-a",function(){
			$(this).animate({marginTop: -5}, 100);
			$(this).find("span").find("span").css("color", "#1292d5");
		}).stop().on("mouseleave", ".sub-menu-a", function(){
			$(this).animate({marginTop: 0}, "fast");
			$(this).find("span").find("span").css("color", "#000");	
		})
		//扫码显示
		$("#QR_code_buy").hover(function(){
			$(this).find(".ewm-img-block").slideDown()
		},function(){
			$(this).find(".ewm-img-block").slideUp()
		})
		//选择版本
		$(".list-inline").find("li").click(function(){
			$(".list-inline li").removeClass("current");
			$(this).addClass("current");
		})
		
		//放大镜
		var goodsblock = document.getElementById("goods-block")
		var imgblock = document.getElementById("img-block");
		var small_box = document.getElementById("product-main-img");
		var big_box = document.getElementById("hide-big-img");
		var mask = document.getElementById("mask");
		var big_Img = document.getElementById("big-img");

		//2.监听鼠标进入product
		small_box.onmouseover = function(){
			//2.1 把隐藏的内容显示
			mask.style.display = "block";
			big_box.style.display = "block";

			//2.2监听鼠标的移动
			small_box.onmousemove = function(event){
				var e = event || window.event;			
				//2.3求出鼠标的坐标
				var pointX = e.clientX - goodsblock.offsetLeft - 45 - mask.offsetWidth * 0.5;
				var pointY = e.clientY - goodsblock.offsetTop - 15 - mask.offsetHeight * 0.5;

				//2.4 边界检测
				if(pointX < 0){
					pointX = 0;
				}else if(pointX >= small_box.offsetWidth - mask.offsetWidth){
					pointX = small_box.offsetWidth - mask.offsetWidth;
				}
				if(pointY < 0){
					pointY = 0;
				}else if(pointY >= small_box.offsetHeight - mask.offsetHeight){
					pointY = small_box.offsetHeight - mask.offsetHeight;
				}

				//2.5 让放大镜移动起来
				mask.style.left = pointX + "px";
				mask.style.top = pointY + "px";

				//2.6让大图动起来
				/*
					smallX / bigX = small_box.width / 大图的宽度
					bigX = smallX / (small_box.width / 大图的宽度)
				*/
				big_Img.style.left = - pointX / (small_box.offsetWidth / big_box.offsetWidth) + "px";
				big_Img.style.top = - pointY / (small_box.offsetHeight / big_Img.offsetHeight) + "px";
			}
			
		}

		//3.监听鼠标离开小盒子
		small_box.onmouseout = function(){
			mask.style.display = "none";
			big_box.style.display = "none";
		}
		
		//pic-slide效果
		$(".product-list-img").on("mouseover","li",function(){
			$(this).find("img").css("border-color", "#f60");
			var address = $(this).find("img")[0].src;
			$("#main-img").attr('src', address);
			$("#big-img").attr('src', address);
		})
		$(".product-list-img").on("mouseout","li",function(){
			$(this).find("img").css("border-color", "#e0e0e0");
		})
	}
	return {
		product: product
	}
})