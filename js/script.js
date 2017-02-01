$("#clickme").click(function(){
	console.log("click works");
	$("#SusanStorm").toggle(); 
});

$("#SusanStorm").mouseover(function(){
	$("body").css("background-color", "green");
});
$("#SusanStorm").mouseout(function(){
	$("body").css("background-color", "purple");
});

