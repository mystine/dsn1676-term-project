var $document = $('.slidingDiv');
var $show_hide = $('.show_hide');

$(document).ready(function(){
    $('.show_hide').click(function(){
        $(this).next('.slidingDiv').slideToggle();
         return false;
    });
});