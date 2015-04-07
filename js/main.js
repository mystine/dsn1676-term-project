var $document = $('.slidingDiv');
var $show_hide = $('.show_hide');
var $btnTrigger = $('.btn-trigger');
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

$btnTrigger.on('click', function () {
    $bus.addClass('js-animate');
})

$btnTrigger.on('click', function () {
    $secondBus.addClass('js-animate');
})

$btnTrigger.on('click', function () {
    $thirdBus.addClass('js-animate');
})
