// // console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'Games Slider',
    data(){
        return {
            currentIndex: 0,
            pictures
        }
    },
    methods: {
        changePic(target){
            if (target === 'prev'){
                this.currentIndex--
                if(this.currentIndex < 0) this.currentIndex = pictures.length - 1;
            } else if (target === 'next') {
                this.currentIndex++
                if(this.currentIndex === pictures.length) this.currentIndex = 0;
            } else {
                this.currentIndex = target;
            }
        }
    }
});

app.mount('#app');