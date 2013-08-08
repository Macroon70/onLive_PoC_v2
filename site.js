$(function() {
	var mainScreen = document.getElementById('main_screen');
	var mainScreenOffsets = mainScreen.getBoundingClientRect();
	var subScreens = document.getElementById('sub_screens');
	var video = document.getElementById('rootVideo');

	subScreens.style.marginTop = mainScreenOffsets.bottom - 15 + "px";

	for ( var i = 0; i <= 30; i++) {
		var rElem = $('.fill_bubbles');
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
			rElem.clone().appendTo($('#second_screen'));
			$('#second_screen #header_wrapper').attr('id','second_headline');
			$('#second_headline h1').html('WATCH<br />ANY GAME');
			rElem.clone().appendTo($('#thirdScreen'));
			$('#thirdScreen #header_wrapper').attr('id','third_headline');
			$('#third_headline h1').html('PLAY<br />ANYWHERE,<br />ANYTIME.');
		}
	}

	var secondToThirdOffsets = document.getElementById('second_to_third').getBoundingClientRect();

	var secondHeadline = document.getElementById('second_headline');
	var thirdHeadline = document.getElementById('third_headline');

	var subScreenActualOffsets = subScreens.getBoundingClientRect();
	var thirdScreenActualOffsets = thirdHeadline.getBoundingClientRect();

	var scrollModifier = 0.7;

	function checkSecondHeadline(pusher) {
		secondHeadline.style.top = scrollModifier * (subScreenActualOffsets.bottom - subScreenActualOffsets.height + pusher) + 'px';
	}

	function checkThirdHeadline(pusher) {
		thirdHeadline.style.top = scrollModifier * (subScreenActualOffsets.bottom - subScreenActualOffsets.height + 
			parseInt($('#second_screen').height()) + secondToThirdOffsets.height + pusher) + 'px';
	}

	checkSecondHeadline(0 - subScreenActualOffsets.top + 200);
	checkThirdHeadline(0 - thirdScreenActualOffsets.top + 400);

	$('.subButton').on('click', function() {
		$("html, body").animate({ scrollTop: 0 }, 3000);
		return false;
	})

	window.onscroll = function(event) {

		subScreenActualOffsets = subScreens.getBoundingClientRect();
		thirdScreenActualOffsets = thirdHeadline.getBoundingClientRect();

		var thirdScreen = document.getElementById('thirdScreen').getBoundingClientRect();


		if (subScreenActualOffsets.top <= 0) {
				$('#loading1').css('display','none');
				$('#loading2').css('display','block');
				$('video').appendTo('#secondVideo');
				rootVideo.play();
		} else {
				$('#loading1').css('display','block');
				$('video').appendTo('#main_screen');
				rootVideo.play()
		}
		if (thirdScreen.top <= 0) {
				$('#loading2').css('display','none');
				$('#loading1').css('display','block');
				$('video').appendTo('#thirdVideo');
				rootVideo.play();
		}



		if (subScreenActualOffsets.top >= -200) {
			checkSecondHeadline(0);
		}

		if (thirdScreenActualOffsets.top >= -400) {
			checkThirdHeadline(0);
		}


		if (mainScreenOffsets.bottom - 16 > subScreenActualOffsets.top && !$('#side_wrapper').hasClass('hiding_side')) {
			$('#side_wrapper')
				.addClass('hiding_side')
				.animate({right: parseInt($(this).width()) * -1 }, 'slow', function() {
					$('#onlive_logo').css('visibility','visible');
				});
		} else if (mainScreenOffsets.bottom - 17 <= subScreenActualOffsets.top && $('#side_wrapper').hasClass('hiding_side')) {
			$('#side_wrapper')
				.removeClass('hiding_side')
				.animate({right: '0px'}, 'slow', function() {
					$('#onlive_logo').css('visibility','hidden');
				});
		}		

	}

});