$(document).ready(function() {

    var contentBox = $("#contentBox");

    $('#sideNavBox').hover(function() {

        $($(this)).stop().animate({
            'marginLeft':'15px'
        },200);
        contentBox.stop().animate({'marginLeft':'220px'},200);

    }, function() {

        $($(this)).stop().animate({
            'marginLeft':'-170px'
        },200);
        contentBox.stop().animate({'marginLeft':'40px'},200);

    });

});