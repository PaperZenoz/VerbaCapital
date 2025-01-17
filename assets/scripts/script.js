// $(window).on("load", function () {
//     $('#preloader').fadeOut(500)
//     $('body').css("opacity", 1)
//
// });

$(document).ready(function () {
    SmoothScroll({
// Время скролла 400 = 0.4 секунды
        animationTime: 800,
// Размер шага в пикселях
        stepSize: 200,

// Дополнительные настройки:

// Ускорение
        accelerationDelta: 30,
// Максимальное ускорение
        accelerationMax: 2,

// Поддержка клавиатуры
        keyboardSupport: true,
// Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll: 50,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

// Поддержка тачпада
        touchpadSupport: true,
    })


    //Анимации
    function animation() {
        $('.animation-element').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + $(window).innerHeight() + 30) {
                $(this).addClass("animated")
            }
        });
    }

    $(window).scroll(function () {
        animation()
    });
    animation()

    //Маска
    $('.js--tel').inputmask("+7 (999) 999-9999")

    //Поднималка
    var amountScrolled = 200;

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.up-btn').fadeIn();
        } else {
            $('a.up-btn').fadeOut();
        }
    });

    $('.up-btn').on('click', function (e) {
        e.preventDefault()
        $('html, body').animate({scrollTop: 0});
        return false;
    })


    //Хедер
    function header() {
        var $header = $('.header')
        if (!$('.menu').hasClass('open')) {

            if ($(this).scrollTop() > 0) {
                $header.addClass('fixed')
            } else {
                $header.removeClass('fixed')
            }
        } else {
            $header.removeClass('fixed')
        }
    }

    $(window).scroll(function () {
        header()
    });
    header()


    //Меню
    $('.header__menu-button').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $('.menu').toggleClass('open')
        $('body').toggleClass('open-menu')
        header()
    })

    $('.menu__projects-list').mCustomScrollbar();

    //Главная
    $('.gen-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800
    })

    if ($('.gen-slider').length) {
        $(document).on('wheel', (function (e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $('.gen-slider').slick('slickPrev');
            } else {
                $('.gen-slider').slick('slickNext');
            }
        }));
    }


    //О нас
    $('.about-us-lab__item-title').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $(this).siblings('.about-us-lab__item-content').slideToggle()
    })

    //Новости
    $('.news__button').on('click', function (e) {
        e.preventDefault()
        var $text = $(this).parents('.news__content').find('.news__text')
        $text.toggleClass('open')
        if ($text.hasClass('open')) {
            $(this).text('Скрыть текст')
        } else {
            $(this).text('подробнее')
        }
    })

    //Контакты


    if ($('#map-1').length) {
        function init() {
            var myMap_1 = new ymaps.Map("map-1", {
                    center: [55.028894, 82.926493],
                    zoom: 15
                }),

                // Создаем метку с помощью вспомогательного класса.
                myPlacemark1 = new ymaps.Placemark([55.028894, 82.926493], {
                    // Свойства.
                    // Содержимое хинта.
                    hintContent: 'Главный офис'
                }, {
                    // Опции
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/contacts/1.svg',
                    // Размеры метки.
                    iconImageSize: [34, 50],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-20, -50]
                })


            // Добавляем все метки на карту.
            myMap_1.geoObjects.add(myPlacemark1)
            myMap_1.setType('yandex#map');


            var myMap_2 = new ymaps.Map("map-2", {
                    center: [55.019398, 82.940983],
                    zoom: 15
                }),

                // Создаем метку с помощью вспомогательного класса.
                myPlacemark1 = new ymaps.Placemark([55.019398, 82.940983], {
                    // Свойства.
                    // Содержимое хинта.
                    hintContent: 'Отдел продаж'
                }, {
                    // Опции
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/contacts/1.svg',
                    // Размеры метки.
                    iconImageSize: [34, 50],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-20, -50]
                })


            // Добавляем все метки на карту.
            myMap_2.geoObjects.add(myPlacemark1)
            myMap_2.setType('yandex#map');


        }

        ymaps.ready(init);
    }


    //Тендеры
    $('.tenders__tab').on('click', function (e) {
        e.preventDefault()
        $('.tenders__tab').removeClass('active')
        $(this).addClass('active')
        $('.tenders__item').removeClass('active')
        $('.tenders__item').eq($(this).index()).addClass('active')

    })


    //Проекты
    $('.projects-list__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        centerPadding: '10vw',
        autoplay: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    })


})






