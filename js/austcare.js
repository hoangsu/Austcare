$(document).ready(function() {
	$("#chat-me a.close").click(function(event) {
		$(this).parents("#chat-me").hide('slow');
	});
});
