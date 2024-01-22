const {createApp} = Vue;
const app = createApp({
    data(){
       return{
        destinations,
        currentIndex : 0,
       }
    },
    computed:{

    },
    methods:{
        goNextIndex(){
            if(this.currentIndex === this.destinations.length -1){
               this.currentIndex = 0;
            }else this.currentIndex ++;
        },

        goPrevIndex(){
            if(this.currentIndex === 0){
                this.currentIndex = this.destinations.length -1
            } else this.currentIndex --;
        }
    }
    
})
app.mount('#root')



