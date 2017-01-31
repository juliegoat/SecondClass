$("#clickme").click(function(){
	console.log("click works");
	$("#SusanStorm").slideUp(); 
});

$("#SusanStorm").mouseover(function(){
	$("body").css("background-color", "green");
});
$("#SusanStorm").mouseout(function(){
	$("body").css("background-color", "purple");
});

