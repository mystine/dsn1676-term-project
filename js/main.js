var $document = $('.slidingDiv');
var $show_hide = $('.show_hide');

$(document).ready(function(){
    $('.show_hide').click(function(){
        $(this).next('.slidingDiv').slideToggle();
         return false;
    });
})

var $btnNav = $('.btn-nav');
var $nav =$('.nav');

$btnNav.on('click',function(){
	$nav.toggleClass('js-btn-nav');
})

$('.nav').localScroll();
$('.back').localScroll();
$('.history').localScroll();

var $bus = $('.banner-bottom');

$bus.waypoint(function (direction) {
	if (direction == 'down') {
		$bus.addClass('js-active');
	}
	else {
		$bus.removeClass('js-active');
	}
}, { offset: '85%' } );