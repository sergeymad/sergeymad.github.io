$(function() {

	// Custom JS
    $(".upbutton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".hamburger").on('click', function(){
        $(this).toggleClass('is-active');
        $(".top_nav").slideToggle();
    });

    $(window).resize(
        function(){
            if ($(window).width() >= '780') {
                $(".logos a:gt(29)").hide();
                $(".logos a:lt(29)").show();
            }
            else if ($(window).width() >= '480')
            {
                $(".logos a:gt(19)").hide();
                $(".logos a:lt(19)").show();
            }
            else if ($(window).width() >= '320')
            {
                $(".logos a:gt(9)").hide();
                $(".logos a:lt(9)").show();
            }

        }
    );
    $(window).load(
        function(){
            if ($(window).width() >= '780') {
                $(".logos a:gt(29)").hide();
                $(".logos a:lt(29)").show();
            }
            else if ($(window).width() >= '480')
            {
                $(".logos a:gt(19)").hide();
                $(".logos a:lt(19)").show();
            }
            else if ($(window).width() >= '320')
            {
                $(".logos a:gt(9)").hide();
                $(".logos a:lt(9)").show();
            }

        }

    );
    $(".more").click(function(){


            $(".logos a:lt(60)").show();


    });
});
