$(function() {
	// Custom JS
    $('.first-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: ["<i class='fa fa-chevron-left' id=\"left\" aria-hidden='true'></i>","<i class='fa fa-chevron-right' id=\"right\" aria-hidden='true'></i>"],
        responsive:{
            0:{
                items:1
            },
            860:{
                items:2
            },
            1320:{
                items:3
            }
        }
    });

    $(".name").equalHeights();

    $(".subject").equalHeights();

    $(".sect3 p").equalHeights();

    $('.second-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $(".car_item").not(":nth-child(1)").hide();
    var counter= 0;


   var amount=$(".active .item .car_item").length;
    setInterval(function(){



        $(".active .item .car_item").eq(counter).hide();
        counter++;
        if(counter==amount) {
            counter = -1;
        }
        $(".active .item .car_item").eq(counter).show();

    },4000)

});
