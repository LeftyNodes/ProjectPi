(function ($) {
    "use strict";

    // ============== Prealoder ============ //
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // ============== Handle Menu on Sreen scrolling ================= //
    function menuOnScroll() {
        const elementToModify = $(".site_header");
        let lastScrollTop = 0;
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            elementToModify.addClass("sticky");
        }
        $(window).on("scroll", () => {
            const scrollTop = $(window).scrollTop();
            if (scrollTop > lastScrollTop && lastScrollTop > 100) {
                elementToModify.addClass("sticky");
            } else if (scrollTop < 110) {
                elementToModify.removeClass("sticky");
            }
            lastScrollTop = scrollTop;
        });
    }


    // ============== back-to-top btn ================= //
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);


        // ============== Menu Hide ============== //
        menuOnScroll()
    });


    $(document).ready(function () {

        // ============== header scroling ============== //     
        menuOnScroll()


        // ============== Toggle Menu ============== //
        $('.hamburger').click(function (e) {
            $(this).toggleClass("active");

            $(".site_header").toggleClass("toggled_menu");
        });

        // ============== link_menu ============== //
        $('.link_menu').click(function (e) {
            $('.link_menu').not(this).removeClass("active");
            $(this).toggleClass("active");
        });


        // ============== accordion-item =========== //
        $('.accordion-button').click(function (e) {
            $('.accordion-item').not($(this).closest(".accordion-item")).removeClass("active");
            $(this).closest(".accordion-item").toggleClass("active");
        });


        // ============== team_slider ============== //
        $('.service_slider').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            items: 2,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 1,
                    margin: 16,
                    dots: true,
                },
                992: {
                    items: 2,
                }
            },
        });


        // ================ secure_slider ============== //
        $('.secure_slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            items: 3,
            smartSpeed: 700,
            center: true,
            responsive: {
                0: {
                    items: 2,
                    dots: true,
                },
                575: {
                    items: 2,
                    dots: true,
                },
                992: {
                    items: 3,
                }
            },
        });

        // =================== pertners_slider ================ //
        $('.pertners_slider').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            smartSpeed: 700,
            center: true, // Center the active item
            responsive: {
                0: {
                    items: 1.5,
                },
                575: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            },
        });


        // ======================== testimonial_sliders ======================= //
        $('.testimonial_sliders').owlCarousel({
            loop: true,
            margin: 100,
            nav: false,
            dots: false,
            smartSpeed: 700,
            items: 1,
        });


        // ==================== Aos js ==================== ///
        AOS.init({
            duration: 1500,
            once: true,
            easing: "ease",
        });


    });

})(jQuery);