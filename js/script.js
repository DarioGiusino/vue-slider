// // console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'Games Slider',
    data(){
        return {
            currentIndex: 0,
            pictures,
            motion: '',
            isStarted: true
        }
    },
    methods: {
        changePic(target){
            if (target === 'prev'){
                this.stopAutoPlay();
                this.currentIndex--;
                if(this.currentIndex < 0) this.currentIndex = this.pictures.length - 1;
            } else if (target === 'next') {
                this.stopAutoPlay();
                this.currentIndex++;
                if(this.currentIndex === this.pictures.length) this.currentIndex = 0;
            } else {
                this.stopAutoPlay();
                this.currentIndex = target;
            }
        },
        autoPlay(){
            this.isStarted = true;
            this.motion = setInterval(() => {
                this.changePic('next');
            }, 3000);
        },
        stopAutoPlay(){
            this.isStarted = false;
            clearInterval(this.motion);
        }
    },
    mounted(){
        this.autoPlay()
        // this.stopAutoPlay()
    }
});

app.mount('#app');