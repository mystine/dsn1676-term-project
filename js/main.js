var $document = $('.slidingDiv');
var $show_hide = $('.show_hide');
var $btnTrigger = $('.btn-trigger');

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


