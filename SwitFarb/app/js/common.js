
$(document).ready(function() {

	// Custom JS
    $(".upbutton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //logos.wrap('<div class="opened"></div>');
        if($(window).width() <= '768'){
            $(".logos .image:gt(9)").addClass('closed').css("display","none");
            $(".more p").on('click' ,function () {
                $(".closed").slideToggle();
                $(".closed").toggleClass("on");
                if($(".closed").hasClass("on")){
                    $(this).text("Сховати");
                }
                else{
                    $(".closed").removeClass("on");
                    $(".more p").text("Та інші...");
                }
            });
        }

    //nav
    $(".nav-trigger").click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
        }else{
            $(this).addClass("is-active");
        }
        $(".top_nav_mob").slideToggle(500);
    });
});
