$(document).ready(function() {
	$("#create_bot").click(function(){
		var bot_id = $("#bot_id").val();
		var context = $("#context_ta").val();
		var bot_im_url = $('#bot_im_url').val()
		$.post("/create_bot", {"id":bot_id, "context":context, "bot_im_url":"https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_960_720.jpg"},function(data, status){
			alert("Succesfully Created!");
			$('#bot_url').text("Deployed at : "+data);
		});
	});
});
