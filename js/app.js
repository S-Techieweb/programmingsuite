$(document).ready(function(){
    $(window.onabort('scroll',function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
    } )
} )