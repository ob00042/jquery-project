$(document).ready(function(){

	$("button").on("click", function(){
		$("#ul").empty();
		var size = +prompt("Please enter New Grid size up to 42");
		if (size<=42) {
			
			for (var i = 1; i <= size; i++) {
				$("#ul").append('<li></li>');
				
				for (var j = 1; j <= size; j++) {
				$("li:nth-child("+i+")").append('<div class="grid"></div>');
				}

			}
	} else {
			alert("Are you blind and dumb? Enter less than 42! Now do it again faggot.")
	}
		
	$(".grid").on("mouseenter", function(){
		$(this).addClass("highlight");

	});


	});


});
