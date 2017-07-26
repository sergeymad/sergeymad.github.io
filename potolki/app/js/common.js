$(document).ready(function() {

    //scripts for desktop devices
    if($(window).width()>= '768')
    {
        //script for topline(tabs fors p)
        $(".text p").not(':first').hide();
        var counter = 1;
        var length = $(".text p").length;
        setInterval(function () {
            if (length == counter) {
                counter = 1;
            }
            $(".text p").hide();
            $(".text p").eq(+counter).fadeIn('slow');
            counter++;
        }, 2000);
    }



    //masked
    $("#form_phone, #form_phone2, #s16_phone, #s13_phone").mask("+380(999)-999-99-99");


    //magnific-popup
    $(".desktop_mfp, .mobile_mfp").magnificPopup({
        type: 'inline',
        preloader: false
    });

    $(".s12_popup_1").magnificPopup({
        items: {
            src: '#s12_doc_1'


        },
    });
    $(".s12_popup_2").magnificPopup({
        items: {
            src: '#s12_doc_2'


        },
    });
    $(".s15_item").click(function(){
        $(".s15_item").removeClass("active");
        $(this).toggleClass("active");
    });



});
