
$(document).ready(function() {
$(".description").equalHeights();
$(".investments-heading").equalHeights();
$(".support ul li").equalHeights();


// nav trigger
    $(".nav-trigger").click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
        }else{
            $(this).addClass("is-active");
        }
        $(".menu-mobile").slideToggle(500);
    });
    new WOW().init();

    //script for videos
    $("#radchenko").click(function(){
        if($("#v_radchenko").hasClass("hidden")){
            $("#v_radchenko").removeClass("hidden");
            $("#v_savchenko").addClass("hidden");
        }
    });

    $("#savchenko").click(function(){
        if($("#v_savchenko").hasClass("hidden")){
            $("#v_savchenko").removeClass("hidden");
            $("#v_radchenko").addClass("hidden");
        }
    });

    //UPBUTTON
    $(".upbutton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    var $allVideos = $("iframe[src^='https://www.youtube.com/']");

    // The element that is fluid width
    var $fluidEl = $(".container");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    $(window).resize(function() {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

        // Kick off one resize to fix all videos on page load
    }).resize();


    //SCROLL TO ELEMENT
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600);
        return false;
    });
    //resize video
});
