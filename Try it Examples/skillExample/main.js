//  // Knob
// $(function() {
// 	var $dials = $('.dial');

// 	$dials.knob({
// 		width: '99%',
// 		readOnly: true,
// 		fgColor: '#563d7c',
// 		draw: function(){
// 			// Set text value
// 			// $(this.i).val(this.$.attr('id'));
// 			$(this.i).val("High");
// 			// Set font size depended on element width
// 			var fontSize = this.$.width() * 0.3;
// 			$(this.i).css('font-size', fontSize + 'px');
// 		}
// 	});
// 	$dials.val(70).trigger('change');
// 	// $dials.trigger('configure', {fgColor: '#225234'})
//  });

// // <input id="jQuery" class="dial" type="text">
// // #4a346e


$(function(){
	appendStars($('.jq-5stars'), 5);

	
})

function appendStars($obj, count){
	var star;
	$.each($obj, function(index, value){
		for (var i = 0; i < count; ++i){
			$star = $('<span\>').addClass('glyphicon glyphicon-star');
			$(value).append($star);
		}	
	})
	
}