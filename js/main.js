var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnExpand.on('click', function() {
    $panel.toggleClass('js-expand');
})

