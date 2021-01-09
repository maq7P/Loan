import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import videoPlayer from './modules/playVideo';
import Diference from './modules/difference';
import Form from './modules/forms';
import PhoneMask from './modules/regulars/phoneMask';
import CheckMailInputs from './modules/regulars/checkMailInputs'

window.addEventListener('DOMContentLoaded', () => {
    const pageOneSlider = new MainSlider({
        btns: '.next',
        container: '.page'
    });
    pageOneSlider.render();

    const pageTwoSlider = new MainSlider({
        btns: '.next',
        container: '.moduleapp',
        prev: '.prevmodule',
        next: '.nextmodule'
    });
    pageTwoSlider.render();


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

    new videoPlayer('.showup .play', '.overlay').init();
    new videoPlayer('.module__video-item .play', '.overlay').init();
    new videoPlayer('.colored .play', '.overlay').init();

    new Diference('.officerold', '.officer__card-item').init();
    new Diference('.officernew', '.officer__card-item').init();

    new Form('.form').init();

    new PhoneMask('[name="phone"]').init();
    new CheckMailInputs().init();
});