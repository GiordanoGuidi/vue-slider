const {createApp} = Vue;
const app = createApp({
    data(){
       return{
        destinations,
        currentIndex : 0,
        interval:null,
       }
    },
    computed:{

    },
    methods:{
        //FUNZIONE PER AUMENTARE L'INDICE
        goNextIndex(){
            if(this.currentIndex === this.destinations.length -1){
               this.currentIndex = 0;
            }else this.currentIndex ++;
        },

        //FUNZIONE PER DIMINUIRE L'INDICE
        goPrevIndex(){
            if(this.currentIndex === 0){
                this.currentIndex = this.destinations.length -1
            } else this.currentIndex --;
        },

        stopAutoPlay(){
            clearInterval(this.interval)
        }
    },
    mounted(){
        this.interval = setInterval(()=>{
            this.goNextIndex()
        },1000)
    }
    
})
app.mount('#root')



