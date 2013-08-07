$(function() {
	var mainScreen = document.getElementById('main_screen');
	var mainScreenOffsets = mainScreen.getBoundingClientRect();
	var subScreens = document.getElementById('sub_screens');
	console.log(subScreens);
	subScreens.style.marginTop = mainScreenOffsets.bottom - 15 + "px";
	
	$("#mainvideo").children().clone(false, false).appendTo($("#secondvideo")[0]);
	//$("#secondvideo")[0].html($("#mainvideo")[0].html());

	window.onscroll = function(event) {

		var subScreenActualOffsets = subScreens.getBoundingClientRect();
		

	}

});