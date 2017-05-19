$(document).ready(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() < $('header').height()) {
			$('.subnav').css('top', $('header').height() - $(window).scrollTop())
		} else if ($(window).scrollTop() > $('header').height()) {
			$('.subnav').css('top', 0)
		}
	})
})