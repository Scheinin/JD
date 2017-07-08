


$(function() {
	// 网站导航二级菜单位置
	// $('#ttbar-navs .dd').css('right',(1190-$(document).width())/2+'px');
	// 手机京东下拉
	// console.log($(document).width())
	$('#ttbar-mob').hover(
		function() {
			$('#shortcut .mobile_pop').stop().slideDown(function() {
			$('#ttbar-mob .triangle-down').css('border-bottom','8px solid #fff')
			});
		},
		function() {
			$('#shortcut .mobile_pop').stop().slideUp();
			$('#ttbar-mob .triangle-down').css('border-bottom','8px solid #f6f6f6')
		}
		)
	//搜索框
	var text = $('.search-m .text').val();
	$('.search-m .text').bind('focus', function() {
		if($(this).val()) {
			$(this).val('');
		}
	}).bind('blur', function() {
		$(this).val(text);
	})
	// 我的购物车
	$('#settleup').hover(
		function() {
		$(this).css('border','none');
		},
		function(){
		$(this).css('border','1px solid #e3e4e5');
		}
	)
	//公告栏
		var aHead = $('.mod_tab_head_item');
		var aContent = $('.mod_tab_content_item');
		for(var i=0;i<aHead.length;i++){

			aHead[i].index = i;
			aHead[i].onmouseover = function(){
				if($('.news_tab_active').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){
		 		$('.news_tab_active').css('transform','matrix(1, 0, 0, 1, 52, 0)')
			
		 	}else{
		 		$('.news_tab_active').css('transform','matrix(1, 0, 0, 1, 0, 0)')
		 	}
				for(var i=0;i<aContent.length;i++){
					aContent[i].style.display = 'none';
				}
				aContent[this.index].style.display = 'block';
			}
		}
		// //工具栏
		$('.jdm_toolbar_tab').mouseover(function() {//给这个标签绑定鼠标移入事件
			var obj=$(this).children()[1];//obj用来保存当前鼠标移入的第二个子元素
			$(obj).stop().animate({ //将dom对象转换成jquery对象

				left: '-61px'

			})
			})
			$('.jdm_toolbar_tab').mouseout(function() {
				var obj=$(this).children()[1];
				$(obj).stop().animate({

					left: '61px'

				})
			})


	





})
