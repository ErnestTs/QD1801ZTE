define(["jquery", "jquery-cookie"], function($){
	var index = function(){
		console.log("首页");
		//加载数据解析数据
		$(function(){
			$.ajax({
				url: "data/data.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var list_unstyled1 = "";
					var list_unstyled2 = "";
					var carousel = "";
					var zx_today = "";
					var zx_block = "";
					var zx_block_one = "";
					var zx_block_two = "";
					var zx_block_thr = "";
					var zx_block_ai = "";
					var zx_ad_banner = "";
					for(var i = 0; i < res[0].detail1.length; i++){
						list_unstyled1 += '<li class="sub-menu"><a class="sub-menu-a" href="javascript:void(0);"><div class="goods-img" style="border-left: medium none"><img src="'+ res[0].detail1[i].img +'" alt="" /></div><div class="goods-data"><div class="goods-name-block"><span>'+ res[0].detail1[i].name +'</span></div><div class="goods-pri-block"><span class="new-pri">￥<strong>'+ res[0].detail1[i].pri +'</strong></span></div></div></a></li>' 
					}
					$(".list-unstyled1").html(list_unstyled1);
					for(var i = 0; i < res[1].detail2.length; i++){
						list_unstyled2 += '<li class="sub-menu"><a class="sub-menu-a" href="javascript:void(0);"><div class="goods-img" style="border-left: medium none"><img src="'+ res[1].detail2[i].img +'" alt="" /></div><div class="goods-data"><div class="goods-name-block"><span>'+ res[1].detail2[i].name +'</span></div><div class="goods-pri-block"><span class="new-pri">￥<strong>'+ res[1].detail2[i].ppri +'</strong><span style="text-decoration:line-through">￥'+ res[1].detail2[i].pri +'</span></span></div></div></a></li>' 
					}
					$(".list-unstyled2").html(list_unstyled2);
					for(var i = 0; i < res[2].carousel.length; i++){
						carousel += '<li class="item"><a href="javascript:void(0);"><img src="'+ res[2].carousel[i].img +'" alt=""></a></li>'
					}
					$(".carousel-inner").html(carousel);
					for(var i = 0; i < res[3].zx_today.length; i++){
						zx_today += '<li class="qg-list"><a href="javascript:void(0);"><img src="'+ res[3].zx_today[i].img +'" alt=""></a></li>'
					}
					$(".qg-ul").html(zx_today);

					zx_block = '<li class="zx-goods-li"><div class="mobile-banner"><a href="javascript:void(0);"><img src="'+ res[4].zx_block[0].img +'" alt=""></a></div></li>'
					for(var i = 1; i < res[4].zx_block.length; i++){
						zx_block += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[4].zx_block[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[4].zx_block[i].name +'</h6></div><div class="sale-goods-ad"><h6>'+ res[4].zx_block[i].ad +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[4].zx_block[i].pri +'</strong></span><span id="'+ res[4].zx_block[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</button></div></div></a></div></li>'							
					}
					$(".zx-goods-ul1").html(zx_block);
					zx_block_one = '<li class="zx-goods-li"><div class="mobile-banner"><a href="javascript:void(0);"><img src="'+ res[5].zx_block_three[0].goods[0].img +'" alt=""></a></div></li>'
					for(var i = 1; i < res[5].zx_block_three[0].goods.length; i++){
						zx_block_one += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[5].zx_block_three[0].goods[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[5].zx_block_three[0].goods[i].name +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[5].zx_block_three[0].goods[i].pri +'</strong></span><span id ="'+ res[5].zx_block_three[0].goods[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</span></div></div></a></div></li>'
					}
					$(".zx-goods-ul2").html(zx_block_one);
					for(var i = 0; i < res[5].zx_block_three[1].goods.length; i++){
						zx_block_two += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[5].zx_block_three[1].goods[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[5].zx_block_three[1].goods[i].name +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[5].zx_block_three[1].goods[i].pri +'</strong></span><span id="'+ res[5].zx_block_three[1].goods[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</span></div></div></a></div></li>'
					}
					$(".zx-goods-ul3").html(zx_block_two);
					for(var i = 0; i < res[5].zx_block_three[2].goods.length; i++){
						zx_block_thr += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[5].zx_block_three[2].goods[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[5].zx_block_three[2].goods[i].name +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[5].zx_block_three[2].goods[i].pri +'</strong></span><span id="'+ res[5].zx_block_three[2].goods[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</span></div></div></a></div></li>'
					}
					$(".zx-goods-ul4").html(zx_block_thr);
					zx_block_ai = '<li class="zx-goods-li"><div class="mobile-banner"><a href="javascript:void(0);"><img src="'+ res[6].zx_block_ai[0].img +'" alt=""></a></div></li>'
					for(var i = 1; i < res[6].zx_block_ai.length; i++){
						zx_block_ai += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[6].zx_block_ai[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[6].zx_block_ai[i].name +'</h6></div><div class="sale-goods-ad"><h6>'+ res[6].zx_block_ai[i].ad +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[6].zx_block_ai[i].pri +'</strong></span><span id="'+ res[6].zx_block_ai[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</span></div></div></a></div></li>'							
					}
					$(".zx-goods-ul5").html(zx_block_ai);
					zx_ad_banner = '<a href="javascript:void(0);"><img src="'+ res[7].zx_ad_banner +'" alt=""></a>';
					$(".zx-ad-banner").html(zx_ad_banner);
				}	
			})
		})
		$(".create-f1").hover(function(){
			$(this).find(".detail-block").find("ul").css({
				"display": "block",
				"padding-top": "35px"})
		},function(){
			$(this).find(".detail-block").find("ul").css("display","none");	
		}).on("mouseenter","a",function(){
			$(this).animate({marginTop: -5},"slow");
			$(this).find("span").find("span").css("color", "#1292d5");
		}).stop().on("mouseleave", "a", function(){
			$(this).animate({marginTop: 0}, "fast");
			$(this).find("span").find("span").css("color", "#000");	
		})

		var iNow = 0;
		var timer = null;
		var aBtns = $(".carousel-indicators").find("li");
		aBtns.click(function(){
			iNow = $(this).index();
			tab(); 
		})
		function tab(){
			aBtns.removeClass("active").eq(iNow).addClass("active");
			if(iNow == 5){
				aBtns.eq(0).addClass("active");
			}
			$(".carousel-inner").animate({
				left: -1357 * iNow 
			}, 500, function(){
				if(iNow == 5){
					iNow = 0;
					$(".carousel-inner").css("left", 0)
				}
			})
		}
		function timerInner(){
			iNow ++;
			tab();
		}
		timer = setInterval(timerInner, 3000);
		$(".page-index").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(timerInner, 3000);
		})
		// $(".zx-goods-ul1 li").mouseover(function(){
		// 	alert(1);
		// // 	$(this).animate({marginTop: -5}, "slow");
		// // }, function(){
		// // 	$(this).animate({marginTop: 0}, "fast");
		// // 	$(this).css("boxShadow", "none");
		// })
		var iActive = 0;
		$(".zx-title-block").find(".zx-more-classify").mouseover(function(){
			iActive = $(this).index();
			$(".zx-title-block").find(".zx-more-classify").removeClass("active").eq(iActive).addClass("active");
			$(".zx-goods-2").find(".zx-goods-ul").css("display", "none");
			$(".zx-goods-2").find(".zx-goods-ul").eq(iActive).css("display", "block");
		})
		//添加hover盒子的移动+阴影效果
		$(".zx-goods-ul").on("mouseenter", "li", function(){
			$(this).animate({top: -5}, 300);
			$(this).css("boxShadow", "0 10px 10px #c0c0c0");
		}).stop().on("mouseleave", "li", function(){
			$(this).animate({top: 0}, "fast");
			$(this).css("boxShadow", "none");
		});

		//ajax加载数据，解析数据
		$(function(){
			$.ajax({
				url: "data/data2.json",
				type: "GET",
				success: function(res){
					//将数据进行解析，添加到页面上
					var allproducts = "";
					for(var i = 0; i < res.length; i++){
						allproducts += '<li class="zx-goods-li"><div class="sale-block"><a href="javascript:void(0);"><div class="sale-goods-img"><img src="'+ res[i].img +'" alt=""></div><div class="sale-goods-description"><div class="sale-goods-name"><h6>'+ res[i].name +'</h6></div><div class="sale-goods-pri"><span class="new-pri">￥<strong>'+ res[i].pri +'</strong></span><span id="'+ res[i].id +'" class="sc_btn" style="border: 0; background-color: #fff; margin-left: 10px; color: #e0e0e0">加入购物车</span></div></div></a></div></li>'
					}
					$(".zx-allproducts-ul").html(allproducts);
				}	
			})
		})

		$(".zx-allproducts-ul").on("mouseover", ".sc_btn", function(){
			$(this).css("color", "orange");
		}).on("mouseout", ".sc_btn", function(){
			$(this).css("color", "#e0e0e0");
		}).on("click", ".sc_btn", function(){
			var id = this.id;
			/*
				购物车
				id
				num
				进行cookie缓存
			*/
			//<1>是否是第一次
			var first = $.cookie("goods") == null ? true : false;
			var same = false; //指示是否之前添加过
			if(first){
				//<2>第一次添加，建立cookie
				$.cookie("goods",`[{id:${id},num:1}]`);
			}else{
				//<3>不是第一次，判断是否之前添加过该商品
				var str = $.cookie("goods");
				var arr = eval(str);
				//遍历，判断之前是否有添加过
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num ++;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
						same = true;
						break;
					}
				}
				if(!same){
					//<5>之前没有添加过
					arr.push({id: id, num: 1});
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
		})
		
		$(".sc_car").mouseenter(function(){
			$(this).find("div").css("display", "block");
			sc_msg();
		})
		$(".sc_car").mouseleave(function(){
			$(this).find("div").css("display", "none");
		})

		function sc_msg(){
			$.ajax({				
				url: "data/data2.json",
				type: "GET",
				success: function(res){
					var sc_str = ($.cookie("goods"));
					if(sc_str){
						var sc_arr = eval(sc_str);
						var sc_car_block = "";
						for(var i = 0; i < sc_arr.length; i++){
							sc_car_block += '<div style="padding: 12px 24px"><section style="width: 150px; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; display: inline-block; margin-right: 20px;"><img src="'+ res[sc_arr[i].id].img +'" alt="" / style="margin-right: 12px; max-width: 48px; max-height: 48px; border: 1px solid #e0e0e0;"><span style="display: inline-block; color: #787878;width: 82px; line-height: 16px; vertical-align: middle;">'+ res[sc_arr[i].id].name +'</span></section><section style="display: inline-block; line-height: 82px; color: #000; text-align: center;"><span style="margin-right: 10px; color: orange;">￥ '+ res[sc_arr[i].id].pri +'</span><span>X'+ sc_arr[i].num +'</span></section></div>'
						}
						$(".sc_car_block").html(sc_car_block);
					}
				}
			})
		}

		// function sc_msg(){
		// 	$.ajax({
		// 		url: "data.json",
		// 		type: "get",
		// 		success: function(res){
		// 			var sc_arr = eval($.cookie("goods"));
		// 			var html = '';
		// 			for(var i in sc_arr){
		// 				html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>这是商品曲奇饼干</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>';
		// 			}
		// 			$(".sc_right ul").html(html);
		// 		}
		// 	})
		// }


	}
	return {
		index: index
	}
})