export default class videoPlayer{
    constructor(triggers, overlay){
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close')
    }

    bindTriggers(){
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = trigger.getAttribute('data-url');
                    this.creatPlayer(path);
                }
            })
        });

    }
    closeBtn() {
        this.overlay.style.display = 'none';
        this.player.stopVideo();
    }

    bindCloseBtn(){
        this.close.addEventListener('click', () => {
            this.closeBtn()
        });

        window.addEventListener('keydown', e => {
            if(e.keyCode === 27){
                this.closeBtn()
            }
        })
    }

    creatPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });

        this.overlay.style.display = 'flex';
    }


    init(){
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn()
    }
}