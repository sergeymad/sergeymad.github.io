$(function() {

	// Custom JS
    $(".upbutton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    $(window).resize(
        function(){
            if ($(window).width() <= '768') {
                $(".logos a").filter(':even').hide();
            }
            else
                $(".logos a").show();
        }
    );
    $(window).load(deleting());

});
