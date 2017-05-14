


$(function() {
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





})