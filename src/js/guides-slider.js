import 'swiper/css';
import 'swiper/css/scrollbar';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.guides__slider-swiper', {
    modules: [Scrollbar],
    slidesPerView: 'auto', // Карточки всегда берут ширину из SCSS
    spaceBetween: 35,      // Отступ между карточками
    watchOverflow: true,
    centeredSlides: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto', // На мобилках прокручиваются карточки по 220px
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 'auto', // На планшетах
            spaceBetween: 40,
        },
        850: {
            slidesPerView: 'auto', // На десктопе
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 'auto', // На десктопе
            spaceBetween: 40,
        }
    }
});