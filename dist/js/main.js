/*  ---------------------------------------------------
    Author: Josh
    Author URI: https://twitter.com/HodJosias
---------------------------------------------------------  */

(function ($) {

    // $(document).ready(function() {
    //     /* Basic Init*/
    //     if ($(document).scrollTop() > 2) {
    //         $("header").addClass('bg-secondary shadow-lg');
    //     }
    // });
    
    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").delay(2000).fadeOut();
    //     $("#preloader").delay(2000).fadeOut("slow");
    // });
    var lastScrollTop = 0;
    $(window).scroll(function () {
        let st = $(this).scrollTop();

        if (st > 10) {
            $("header").addClass('bg-white');
        }
        else {
            $("header").removeClass('bg-white');
        }

        let headerDown = false
        if(st > lastScrollTop){
            $("header").addClass('-top-1/2');
            headerDown = false;
        }
        else {
            $("header").removeClass('-top-1/2');
            headerDown = true;
        }

        if (st > 180) {
            $(".filter-container").removeClass('relative')
            $(".filter-container").addClass('fixed top-2 left-0 right-0');
            $('.filter').addClass('border-l border-r border-black')
        }
        else {
            $(".filter-container").addClass('relative')
            $(".filter-container").removeClass('fixed top-2 left-0 right-0');
            $('.filter').removeClass('border-l border-r border-black')
        }

        if (headerDown && $(".filter-container").hasClass('fixed')) {
            $(".filter-container").addClass('translate-y-16');
        }
        else {
            $(".filter-container").removeClass('translate-y-16');
        }

        lastScrollTop = st;
    });

    new WOW().init();
    
    // Burger click
    $('#burger').click(() => {
        $('#burger').toggleClass('active')
        $('.nav').toggleClass('active')
    })

    //carousel
    $('.hero-slide').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplayHoverPause: true,
        autoplay:true,
        autoplayTimeout:2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        touchDrag: false,
        items: 1,
    });

    $('.products-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:true,
        navText:['<i class="w-10 h-10" data-feather="chevron-left"></i>','<i class="w-10 h-10 mx-auto" data-feather="chevron-right"></i>'],
        autoplayHoverPause: true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
                margin: 20,
            },
            1280:{
                items:4,
                margin:30,
            }
        }
    });

    // $('#cart-btn').on('click',function(event){
    //     event.stopPropagation();
    //     if ($('#cart').hasClass('active')) {
    //         // $('#cart-price').fadeIn("slow")
    //         $('#cart').toggleClass('active')
    //     } else {
    //         // $('#cart-price').fadeOut("slow")
    //         $('#cart').toggleClass('active')
    //     }
    // })

    // $(window).click(() => {
    //     $('#cart').removeClass('active')
    //     // $('#cart-price').fadeIn("slow")
    // });

    /*Feather Icon*/
	var featherIcon = $('i');
	if( featherIcon.length > 0 ){
		feather.replace();
    }
    

})(jQuery);