import './stylesheets/main.scss';
import './node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    initialSlide: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});