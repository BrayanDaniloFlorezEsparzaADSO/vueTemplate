export default{
    name:"fondo",
    template:/*html*/`
    <section class="hero">
        <img :src="config.img1" class="translateX" data-speed="0.25" id="moon" alt="">
        <img :src="config.img2" class="translateY" data-speed="0.35" id="clouds" alt="">
        <img :src="config.img3" class="translateY" data-speed="0.15" id="mount" alt="">
        <h1 id="text" class="translateX" data-speed="-3" v-text="config.h1[0]"></h1>
        <a href="#" id="btn"v-text="config.a[0]"></a>
        <img :src="config.img4" class="translateY" data-speed="0" id="base" alt="">
    </section>
    
    `,
    props:{
        config: Object
        
    },
    data() {
        return {
            translateX: null,
            translateY: null,
            scroll: 0
        };
    },
    mounted() {
        this.translateX = document.querySelectorAll(".translateX");
        this.translateY = document.querySelectorAll(".translateY");
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
        this.scroll = window.pageYOffset;
        this.translateX.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateX(${this.scroll * speed}px)`;
        });
        this.translateY.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${this.scroll * speed}px)`;
        });
        }
    }
    // data(){
    //     return{
    //     }
    // },
    // methods:{
    //     translateX(){
    //         let scroll = window.pageYOffset;
    //         translateX.forEach(element => {
    //         let speed = element.dataset.speed;
    //         element.style.transform = `translateX(${scroll * speed}px)`;
    //         })
    //     },
    //     translateY(){
    //         translateY.forEach(element => {
    //             let speed = element.dataset.speed;
    //             element.style.transform = `translateY(${scroll * speed}px)`;
    //             })
    //     }
    // }
}