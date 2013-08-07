$(function() {
	var mainScreen = document.getElementById('main_screen');
	var mainScreenOffsets = mainScreen.getBoundingClientRect();
	var subScreens = document.getElementById('sub_screens');
	console.log(subScreens);
	subScreens.style.marginTop = mainScreenOffsets.bottom - 15 + "px";

	window.onscroll = function(event) {

		var subScreenActualOffsets = subScreens.getBoundingClientRect();
		

	}

});