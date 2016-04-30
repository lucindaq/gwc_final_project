var score;

$(document).ready(function() {
	score = 0;

	$(".next").on('click', function () {
		var answer = $('input[name="radio-choice-1"]:checked').attr('id')

		if (answer.hasClass('correct')) {
			score = score + 1;
			
		} else {
			score = score + 0;
		};

		alert('hi');
	});
});



