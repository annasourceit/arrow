import $ from 'jquery';
//import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

let mobmenu = $('.mobmenu__item');


$(document).ready(function() {

    /*-----------Mobile menu-----------*/
    $('.header__mobmenu').on('click',function () {

        $(this).toggleClass('header__mobmenu--active');

        if ($(this).hasClass('header__mobmenu--active')) {
            mobmenu.first().css("transform", "rotate(45deg) translateX(6px) translateY(6px)");
            mobmenu.eq(1).css("display", "none");
            mobmenu.eq(2).css("transform", "rotate(-45deg) translateX(5px) translateY(-5px)");
        } else {
            mobmenu.each(function () {
                mobmenu.removeAttr("style");
            });
        }

        let elem = $('.menu').hasClass('menu--active');
        if ( !elem ) {
            $('.menu').addClass('menu--active');
            $('.menu--active').slideDown(1000);

        } else {
            if ( $('.menu--active').is( ":hidden" ) ) {
                $('.menu--active').slideDown(1000);
            } else {
                $('.menu--active').slideUp(500);
            }
        }
    });

    /*-----------Slider-----------*/
   let i = 0;
    function slideNext(e) {
        e.preventDefault();
        let slider = $('.listComment__item');
        i++;
        if (i >= slider.length ){
            i = 0;
        }
        slider.eq(i-1).hide();
        slider.eq(i).show();
    }

    function slidePrev(e) {
        e.preventDefault();
        let slider = $('.listComment__item');
        --i;
        if (i < 0) {
            i = slider.length - 1;
            slider.eq(0).removeClass('listComment__item--active');
            slider.eq(0).hide();
            slider.eq(i).show();

        } else {
            slider.eq(i+1).hide();
            slider.eq(i).show();
        }
    }
    function getIndex(e) {
        e.preventDefault();
        let logo = $('.listLogo__item');
        logo.removeClass('listLogo__item--active');
        logo.eq(i).addClass('listLogo__item--active');
    }

    let btnNext = $('.next');
    let btnPrev = $('.prev');
    let comment = $('.listComment');
    btnNext.on('click', slideNext );
    btnNext.on('click', getIndex );
    btnPrev.on('click', slidePrev );
    btnPrev.on('click', getIndex );

    /*-----------Smooth scroll-----------*/

    $(".menu__item .menu__link").on("click", function(e) {
        e.preventDefault();
        let el = $(this).attr("href");
        console.log($(el).offset().top);
        let top = $(el).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
    $(".button-scroll-down__link").on("click", function(e) {
        e.preventDefault();
        let button = $(this).attr("href");
        let btop = $(button).offset().top;
        $('body,html').animate({scrollTop: btop}, 700);
    });
});



// Scripts that will run on window resize
$(window).on('resize', function (e) {

    /*-----------Mobile menu-----------*/
    if (window.innerWidth > 992) {
        $('.menu').removeClass('menu--active').removeAttr('style');
        mobmenu.removeAttr("style");
        $('.header__mobmenu').removeClass('header__mobmenu--active');

    }
});


