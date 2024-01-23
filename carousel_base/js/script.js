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
        lastIndex(){
            return this.destinations.length -1
        },
    },
    methods:{
        //FUNZIONE PER AUMENTARE L'INDICE
        goNextIndex(){
            if(this.currentIndex === this.lastIndex){
               this.currentIndex = 0;
            }else this.currentIndex ++;
        },

        //FUNZIONE PER DIMINUIRE L'INDICE
        goPrevIndex(){
            if(this.currentIndex === 0){
                this.currentIndex = this.lastIndex
            } else this.currentIndex --;
        },
        //FUNZIONE CHE BLOCCA L'AUTOPLAY
        stopAutoPlay(){
            clearInterval(this.interval)
        },
        //FUNZIONE CHE ATTIVA L'AUTOPLAY
        startAutoPlay(){
            this.interval = setInterval(()=>{
                this.goNextIndex()
            },1000)
        }
    },
        //FUNZIONE CHE ATTIVA L'AUTOPLAY ALL'APERTURA DELLA PAGINA
    mounted(){
        this.startAutoPlay();
    }
})
app.mount('#root')



