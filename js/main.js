$( function() {
	var $body = $('body');

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

});