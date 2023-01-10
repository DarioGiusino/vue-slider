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
            } else {
                this.currentIndex++
            }
        }
    }
});

app.mount('#app');