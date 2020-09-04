import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate) {
        super(container, next, prev, prev, activeClass, animate)
        if (this.container.classList.contains('feed__slider')) {
            this.slides = document.querySelectorAll('.feed__item');
        }
    }
    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0'
            }
        });

        this.slides[0].classList.add(this.activeClass)
        if(this.animate){
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1'
        }
    }

    nextSlide(){
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
    }

    prevSlide(){
        this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
        this.decorizeSlides();
    }

    bindTriggers(){

        this.next.addEventListener('click', () => {
            this.nextSlide()
        });
        this.prev.addEventListener('click', () => {
            this.prevSlide()
        });
        if(this.btns){
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.nextSlide()
                });
            })
        }
    }


    init(){
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
        `;
        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay.existence) {
            if (!this.autoplay.time){
                this.autoplay.time = 3000;
            }
            let interval = setInterval(() => {
                this.nextSlide()
            }, this.autoplay.time);
            this.slides.forEach(slide => {
                slide.addEventListener('mouseover', () => {
                    clearTimeout(interval);
                });
                slide.addEventListener('mouseout', () => {
                    interval = setInterval(() => {
                        this.nextSlide()
                    }, this.autoplay.time);
                });
            });
        }
    }
}