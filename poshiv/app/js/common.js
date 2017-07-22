$(function() {
    // nav trigger
    $(".nav-trigger").click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
            $(".mobile-menu").removeClass("active")
        }else{
            $(this).addClass("is-active");
            $(".mobile-menu").addClass("active")
        }
        $(".main-menu-mobile").slideToggle(500);
    });
    // Custom JS

});
