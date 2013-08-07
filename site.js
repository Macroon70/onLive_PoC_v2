$(function() {
	var mainScreen = document.getElementById('main_screen');
	var mainScreenOffsets = mainScreen.getBoundingClientRect();
	var subScreens = document.getElementById('sub_screens');
	var headline = document.getElementById('header_wrapper');
	subScreens.style.marginTop = mainScreenOffsets.bottom - 15 + "px";

	for ( var i = 0; i <= 30; i++) {
		var rElem = $('.fill_bubbles');
		console.log(rElem.width() + (document.body.offsetWidth * 0.06));
		var xPos = Math.floor(Math.random() * parseInt(rElem.width() + (document.body.offsetWidth * 0.12)));
		var yPos = Math.floor(Math.random() * parseInt(rElem.height() + (document.body.offsetHeight * 0.12)));
		var xyWidth = Math.floor(Math.random() * 30);
		var eOpacity = Math.random() * 1;
		$('<div/>')
			.addClass('bubble')
			.css({
				width : xyWidth,
				height : xyWidth,
				top : yPos + 80,
				left : xPos,
				opacity : eOpacity
			}).appendTo(rElem);
		if (i == 30) {
			rElem.clone().appendTo($('#secondScreen'));
			$('#secondScreen h1').html('WATCH<br />ANY GAME');
			rElem.clone().appendTo($('#thirdScreen'));
			$('#thirdScreen h1').html('PLAY<br />ANYWHERE,<br />ANYTIME.');
		}
	}


	window.onscroll = function(event) {

		var subScreenActualOffsets = subScreens.getBoundingClientRect();

		if (subScreenActualOffsets.top > 0) {
			headline.style.top = subScreenActualOffsets.bottom - subScreenActualOffsets.height + 'px';
		}

	}

});