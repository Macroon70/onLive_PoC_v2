$(function() {
	var mainScreen = document.getElementById('main_screen');
	var mainScreenOffsets = mainScreen.getBoundingClientRect();
	var subScreens = document.getElementById('sub_screens');
	console.log(subScreens);
	subScreens.style.marginTop = mainScreenOffsets.bottom - 15 + "px";

	video = $("#mainvideo")[0];
	secondcanvas = $("#secondcanvas")[0];
	secondctx = secondcanvas.getContext('2d');
	secondctx.rotate(1*Math.PI/180);
	//secondctx.fillRect(50,20,100,50);
	
	copyvideo();
	
	window.onscroll = function(event) {

		var subScreenActualOffsets = subScreens.getBoundingClientRect();
		

	}

});

var video;
var secondcanvas;
var secondctx;

function copyvideo(){
  secondctx.drawImage(video, 0, 0);
  setTimeout("copyvideo();", 1000/25);
}