$(function() {

	$('textarea').click(function() {
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});

	$('textarea').on('keyup', function() {
		var count     = $(this).val().length,
			remaining = 140 - count;

		$('#char-count').text(remaining);
		
		if(remaining <= 10) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', '#999');
		}

		if (count > 140) {
			$('#tweet-submit').attr('disabled', 'disabled');
		} else {
			$('#tweet-submit').attr('disabled', false);
		}
	});

});
