$(function(){
	var dir=-1;
	var interval=3000;
	var duration=700;
	var timer;
	$("#slide ul").prepend($("#slide li:last-child"));
	$("#slide ul").css("left" ,-1000);
	timer=setInterval(slideTimer, interval);
	function slideTimer(){
		if (dir==-1) {
			$("#slide ul").animate({"left":"-=1000px"},duration,function(){
			$(this).append($("#slide li:first-child"));
			$(this).css("left",-1000);
			$("#slide li:nth-child(1)").css("opacity",0.5);
			$("#slide li:nth-child(2)").css("opacity",1);
			$("#slide li:nth-child(3)").css("opacity",0.5);
			$("#slide li:nth-child(4)").css("opacity",0.5);
		});
		}else{
			$("#slide ul").animate({"left":"+=1000px"},duration,function(){
			$(this).prepend($("#slide li:last-child"));
			$(this).css("left",-1000);
			$("#slide li:nth-child(1)").css("opacity",0.5);
			$("#slide li:nth-child(2)").css("opacity",1);
			$("#slide li:nth-child(3)").css("opacity",0.5);
			$("#slide li:nth-child(4)").css("opacity",0.5);
			dir = -1;
			});
		}
	}
$("#prevBtn").click(function(){
	dir = 1;
	clearInterval(timer);
	timer = setInterval(slideTimer, interval);
	slideTimer();
});
$("#nextBtn").click(function(){
	dir = -1;
	clearInterval(timer);
	timer = setInterval(slideTimer, interval);
	slideTimer();
});
});