

	window.onload = function () {
		var list = document.getElementById('list');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');

		function animate(offset) {
			var newLeft = parseInt(list.style.left) + offset;
			list.style.left = newLeft + 'px';
			if(newLeft< -5530) {
				list.style.left = 0;
			};
			if(newLeft > 0) {
				list.style.left = -5530 + 'px';
			};
			
		}

		//自动播放
		var timer = '';
		function play () {
			timer = setInterval (function() {
				next.onclick();
			},2000);
		}
		play();
		//鼠标停止播放
		var slider_main =  document.getElementById('slider_main');
		function stop () {
			clearInterval(timer);
		}
		slider_main.onmouseover = stop;
		slider_main.onmouseout = play;
		
		var buttons = document.getElementById('buttons').getElementsByTagName('li');
		var index = 1;

		function buttonsShow() {
			for(var i =0;i < buttons.length;i ++ ){
				if (buttons[i].className == 'on') {
					buttons[i].className = '';
				}				
			}
				buttons[index-1].className = 'on';
		}

		prev.onclick = function () {
			index -= 1;
			if(index < 0) {
				index = 8;
			}
			buttonsShow();
			animate(790);
		}
		next.onclick = function () {
			index += 1;
			if(index > 8) {
				index = 1;
			}
			buttonsShow();
			animate(-790);
		}
		for (var i = 0; i < buttons.length; i++){
			(function(i) {
				buttons[i].onclick = function() {
					var clickIndex = parseInt(this.getAttribute('index'));
					var offset = 790 * (index - clickIndex);
					animate(offset);
					index = clickIndex;
					buttonsShow();
				}

			})(i)
		}



	};