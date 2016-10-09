$( function() {
	var $window = $(window),
	 	$body = $('body'),
		$bodyHtml = $('html, body'),

		cssClassActive = "_active"
	;

//form file
	(function(){
		var $fileBox = $(".js-form-file");

		$fileBox.on ("change", ".js-form-file-input", (function(){
			var $input = $(this),
				$box = $input.closest(".js-form-file"),
				$filePathBox = $box.find(".js-form-file-name"),
				value = $input.val() ? $input.val() : $filePathBox.attr("data-empty")
			;

			$box.toggleClass(cssClassActive, !!$input.val());
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
			$articleLinkTop = $('.js-article-top'),

			$panelTop = $('.js-panel-top'),

			top = $body.width() > 950 ? 200 : 100,
			articleHeaderOffset = $articleHeader.length ? $articleHeader.offset().top : 0,

			$progressBar = $('.js-progress-bar'),
			progressBarWidth = 0
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


			if ($articleHeader.length && $body.width() > 950 ) {

				if (windowTop > articleHeaderOffset) {
					$articleHeader.addClass(cssClassActive);
					$articleLinkTop.addClass(cssClassActive);
				} else {
					$articleHeader.removeClass(cssClassActive);
					$articleLinkTop.removeClass(cssClassActive);
				}

				progressBarWidth = windowTop / ($(document).height() - $window.height());
				$progressBar.css({ "width": (100 * progressBarWidth | 0) + "%"});

			}

			if (windowTop > 63) {
				$panelTop.addClass(cssClassActive);
			} else {
				$panelTop.removeClass(cssClassActive);
			}

		});

	})();


//animate button
	(function(){

		$body.on ("mouseenter", ".js-animate-button", (function(event){
			var $btn = $(this),
				offset = $btn.offset(),
				posLeft = Math.round(event.pageX - offset.left),
				posTop = Math.round(event.pageY - offset.top),

				$scaleBox = $btn.find(".js-animate-button-scale")
			;

			$scaleBox.css({ left: posLeft, top: posTop });
		}));

	})();


//menu
	(function(){
		var $menuBox = $(".js-frame"),
			$popup = $('.js-popup')
		;


		$menuBox.on ("click", ".js-frame-door", (function(){
			var $door = $(this),
				text = $door.attr("data-text"),
				$box = $door.closest(".js-frame");

			$door.attr("data-text", $door.text());
			$door.text(text);
			$box.toggleClass(cssClassActive);

			if ($popup.is(":visible") && !$box.is("." + cssClassActive)) {
				$popup.hide();
			}

		}));

		$menuBox.on ("click", "._isSubMenu", (function(event){
			if ($body.width() < 950) {
				$(this).toggleClass(cssClassActive);
			}

			event.preventDefault();
		}));

		$window.resize(function() {
			$menuBox.find("._isSubMenu").removeClass(cssClassActive);
		});

	})();

//submenu
	(function(){
		var scrollSpeed = 500,
			mySelector = 'data-slide',

			$articleHeader = $('.js-scroll-header'),

			menuActiveHeight = 80
		;

		$articleHeader.on ("click", ".js-scroll-header-menu-item", (function(event){
			var hash = $(this).attr('href').split('#')[1],
				goTo =  $("[" + mySelector + "='" + hash + "']"),
				offset = goTo.offset().top - menuActiveHeight + 5
			;


			if (!$articleHeader.is("." + cssClassActive)) {
				offset = offset -  $articleHeader.outerHeight();
			}

			$bodyHtml.stop().animate({ scrollTop: offset }, scrollSpeed);

			event.preventDefault();
		}));

	})();

});