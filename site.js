$(document).ready(function() {
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

	$('.vertical-mover').on('click', function() {
		$("html, body").animate({ scrollTop: $(this).attr('data-top') }, 1500);
		return false;
	})

	////////////////////////
	// Vertical changer
	/////////

	function setVerticalToActualPos(pos) {
		if (pos <= 500 && pos >= 0) { 
			if (!$('#toTop div').hasClass('active_dot')) {
				$('.active_dot').removeClass('active_dot');
				$('#toTop div')
					.addClass('active_dot');
			}
		} else if (pos > 500 && pos <= 1500) {
			if (!$('#toSecond div').hasClass('active_dot')) {
				$('.active_dot').removeClass('active_dot');
				$('#toSecond div')
					.addClass('active_dot');
			}
		} else {
			if (!$('#toThird div').hasClass('active_dot')) {
				$('.active_dot').removeClass('active_dot');
				$('#toThird div')
					.addClass('active_dot');
			}
		}
	}

	var toSecond = $('#main_screen').height();
	var toThird = $('#main_screen').height() + $('#second_screen').height() + $('#second_to_third').height();

	$('#toTop').attr('data-top','0');
	$('#toSecond').attr('data-top', toSecond);
	$('#toThird').attr('data-top', toThird);
	

	////////////////////////
	// Image changer
	/////////

	function imageChanger() {
		if ($('.hidden_image').attr('data-id') == 'mac') {
			$('#secondVideo')
				.css({
					"transform": "rotateZ(0deg) rotateY(0deg)", /* W3C */
  				"-webkit-transform": "rotateZ(0deg) rotateY(0deg)", /* Safari & Chrome */
  				"-moz-transform": "rotateZ(0deg) rotateY(0deg)", /* Firefox */
  				"-ms-transform": "rotateZ(0deg) rotateY(0deg)", /* Internet Explorer */
  				"-o-transform": "rotateZ(0deg) rotateY(0deg)" /* Opera */
  			})
  			.animate({
  				width: '65%',
  				height: '50%',
  				left: '17%',
  				top: '18%'
  			}, 'slow');
  		$('#secondVideo > div').css('left','75%');
		} else {
			$('#secondVideo')
				.css({
					"transform": "rotateZ(1deg) rotateY(4deg)", /* W3C */
  				"-webkit-transform": "rotateZ(1deg) rotateY(4deg)", /* Safari & Chrome */
  				"-moz-transform": "rotateZ(1deg) rotateY(4deg)", /* Firefox */
  				"-ms-transform": "rotateZ(1deg) rotateY(4deg)", /* Internet Explorer */
  				"-o-transform": "rotateZ(1deg) rotateY(4deg)" /* Opera */
  			})
  			.animate({
  				width: '35%',
  				height: '35%',
  				left: '36%',
  				top: '34%'
  			}, 'slow');
  		$('#secondVideo > div').css('left','70%');
		}
		$('.hidden_image')
			.animate({opacity : 1}, 'slow', function() {
				$(this).removeClass('hidden_image');
			})
			.siblings('img')
				.animate({opacity : 0}, 'slow', function() {
					$(this).addClass('hidden_image');
				})
		imageChangerTimer = window.setTimeout(function() { imageChanger(); }, 5000 );			
	}


	var imageChangerTimer = window.setTimeout(function() { imageChanger(); }, 5000 );


	window.onscroll = function(event) {

		subScreenActualOffsets = subScreens.getBoundingClientRect();
		thirdScreenActualOffsets = thirdHeadline.getBoundingClientRect();

		var thirdScreen = document.getElementById('thirdScreen').getBoundingClientRect();

		setVerticalToActualPos(Math.abs(subScreenActualOffsets.top - 777));

		if (subScreenActualOffsets.top <= 0) {
				$('#rootVideo').appendTo('#thirdVideo');
				rootVideo.play();
		} else {
				$('#rootVideo').appendTo('#main_screen');
				rootVideo.play()
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
				.animate({right: '4%'}, 'slow', function() {
					$('#onlive_logo').css('visibility','hidden');
				});
		}		

	}

});