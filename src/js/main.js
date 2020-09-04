import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import videoPlayer from './modules/playVideo';
import Diference from './modules/difference';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        btns: '.next',
        container: '.page'
    });
    slider.render();

    const shoupSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true, 
        btns: '.card__controls-arrow',
    });
    shoupSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        btns: '.card__controls-arrow',
        autoplay: {
            existence: true,
            time: 5000
        }
    });
    modulesSlider.init();
    const feedSlider = new MiniSlider({
        container: '.feed-slider__items',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    const player = new videoPlayer('.showup .play', '.overlay');
    player.init();

    new Diference('.officerold', '.officer__card-item').init();
    new Diference('.officernew', '.officer__card-item').init();
});