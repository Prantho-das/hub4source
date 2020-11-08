let navbar = document.querySelector('.navmain');
//let scrolld = document.querySelector('.scrolld');
// var height=$('body').innerHeight();
// const percent = 100 / height;
window.addEventListener("scroll", () => {
    // var scrollr = window.pageYOffset;
    // var rate = (scrollr * percent) + 1;
    //scrolld.style.width = `${ rate }%`;
    if (window.pageYOffset >= 370) {
        navbar.classList.add("navactive");
        $('.btn-dark').fadeIn('1500');
    } else {
        navbar.classList.remove("navactive");
       $('.btn-dark').fadeOut('1000');
    }
})
//sticky navbar 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        },
        600: {
            items: 3,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        },
        1000: {
            items: 5,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
            
        }
    }
})
//carousel
$('#back-to-top').click(function () {
    window.scrollTo(0, 0);
})
//scroll to top
AOS.init();
// jQuery counterUp (used in Whu Us section)
$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});
// Porfolio isotope and filter
$(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
        aos_init();
    });
});

// Initiate venobox (lightbox feature used in portofilo)
$(document).ready(function () {
    $('.venobox').venobox({
        'share': false
    });
});
//turning off left click in website
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });
//language
const lang = document.getElementById('lang');
const load=() => {
    setTimeout(() => {
        lang.classList.add('addlang');
    }, 700);
}
