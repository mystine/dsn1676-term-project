var $document = $('.slidingDiv');
var $show_hide = $('.show_hide');
var $bus = $('.bus');
var $secondBus = $('.second-bus');
var $thirdBus = $('.third-bus');

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

$bus.waypoint (function () {
  $bus.toggleClass('js-active');
}, {offset: '50%'});

$secondBus.waypoint (function () {
  $secondBus.toggleClass('js-active');
}, {offset: '50%'});

$thirdBus.waypoint (function () {
  $thirdBus.toggleClass('js-active');
}, {offset: '50%'});