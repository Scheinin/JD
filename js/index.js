


$(function() {
	// 网站导航二级菜单位置
	$('#ttbar-navs .dd').css('right',(1190-$(document).width())/2+'px');
	// 手机京东下拉
	$('#ttbar-mob').hover(
		function() {
			$('#shortcut .mobile_pop'). slideDown(function() {
			$('#ttbar-mob .triangle-down').css('border-bottom','8px solid #fff')
			});
		},
		function() {
			$('#shortcut .mobile_pop'). slideUp();
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
	


		$('.mod_tab_head_item').hover(function() {
		if($('.news_tab_active').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){
			$('.news_tab_active').css('transform','matrix(1, 0, 0, 1, 52, 0)')
			
		}
		else { $('.mod_tab_head_item').hover(function() {
			if($('.news_tab_active').css('transform') == 'matrix(1, 0, 0, 1, 52, 0)'){
			$('.news_tab_active').css('transform','matrix(1, 0, 0, 1, 0, 0)')
			
		}
		})}

	})	
	
	
	


		

	





})
