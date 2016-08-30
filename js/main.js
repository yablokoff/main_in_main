$( function() {
	var $window = $(window),
	 	$body = $('body'),

		cssClassActive = "_active"
	;

//form file
	(function(){
		var $fileBox = $(".js-form-file");

		$fileBox.on ("change", ".js-form-file-input", (function(){
			var $input = $(this),
				$filePathBox = $input.closest(".js-form-file").find(".js-form-file-name"),
				value = $input.val() ? $input.val() : $filePathBox.attr("data-empty")
			;

			$filePathBox.text(value);

		}));

	})();


//popup
	(function(){

		$body.on ("click", ".js-popup-door", (function(event){
			var $door = $(this),
				id = $door.attr("data-popup"),
				$popups = $(".js-popup"),
				$curPopup = $body.find(".js-popup" + "[ data-popup="+ id +"]")
			;

			$popups.hide();
			$curPopup.show();
		}));

		//close
		$body.on ("click", ".js-popup-close", (function(){
			var $popup = $(this).closest(".js-popup");

			$popup.hide();
		}));

	})();



//animate blocks, header article
	(function(){
		var jsClassAnimate = ".js-animate",
			cssClassAnimate = "_animate",

			$blocks = $(jsClassAnimate),
			$articleHeader = $('.js-scroll-header'),

			top = 200,
			articleHeaderOffset = $articleHeader.offset().top
		;

		$window.scroll(function(){
			var windowTop = $window.scrollTop();

			$blocks.each(function () {
				var $block = $(this);

				if (!$block.is(cssClassAnimate)) {
					if (($block.offset().top - $body.height()+top) <= windowTop) {
						$block.addClass(cssClassAnimate);
					}
				}

			});


			if ($articleHeader.length) {

				if (windowTop > articleHeaderOffset) {
					$articleHeader.addClass(cssClassActive);
				} else {
					$articleHeader.removeClass(cssClassActive);
				}
			}


		});

	})();

});