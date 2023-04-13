export default {
    name: "barra",
    template:/*html */`

    <nav>
    
        <div class="container">
            <div class="logo">
                <img :src="config.logo">
            </div>
            <div class="links">
                <ul>
                    <li><a href="#" class="active" v-text="config.barra[0]"></a></li>
                    <li><a href="#" v-text="config.barra[1]"></a></li>
                    <li><a href="#" v-text="config.barra[2]"></a></li>
                    <li><a href="#" v-text="config.barra[3]"></a></li>
                </ul>
            </div>
            <div class="hamburger-menu">
                <div class="bar"></div>
            </div>
        </div>
    </nav>
    `,
    props:{
        config: Object
        
    } 
}