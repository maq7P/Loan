export default class Slider{
    constructor(page, btns){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }  

    initSlides(n) {
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated');
            slide.classList.remove('fadeIn');
        });
        this.slides[n - 1].style.display = 'block';
        this.slides[n - 1].classList.add('fadeIn');
        try{
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('fadeInUp')
                }, 3000);
            } else{
                this.hanson.style.opacity = '0';
                this.hanson.classList.remove('fadeInUp')
            }
        } catch(e){}

    }

    checkSlide(n){
        if (n < 1) {
            this.slideIndex = this.slides.length
        } 
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
    }

    render() {
        try{
            this.hanson = document.querySelector('.hanson');
        } catch(e){}

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.checkSlide(this.slideIndex += 1);
                this.initSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.sidecontrol > a').forEach(btn => {
            btn.addEventListener('click', () => {
                this.initSlides(this.slideIndex = 1);
            });
        })
    }
}