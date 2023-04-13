export default{
    name:"baner",
    template:/*html */`
    <footer>
        <div class="container">
            <a href="#">
                <img :src="config.logo" >
            </a>
        </div>
    </footer>`,
    props:{ 
        config: Object
    },
    data(){
        return{
            
        }
    }
}