export default {
    name: "mg-tx",
    template:/*html */`
    <section id="about" class="section-padding">
        <div class="container grid">
            <div class="left-content">
                <h4 v-text="config.h4[0]"></h4>
            </div>
            <div class="right-content">
                <img :src="config.img1_1">
            </div>
        </div>
        <div class="container grid">
            <div class="left-content">
                <h5 class="heading" v-text="config.h5[0]"></h5>
                <p v-text="config.p[0]"></p>
            </div>
            <div class="right-content">
                <h5 class="heading" v-text="config.h5_2[0]"></h5>
                <p v-text="config.p_2[0]"></p>
            </div>
        </div>
    <div class="container grid">
        <div class="left-content">
            <img :src="config.img1_2" >
        </div>
        <div class="right-content">
            <img :src="config.img1_3" >
        </div>
    </div>
    <div class="container grid">
        <div class="left-content">
            <h5 class="heading"v-text="config.h5_3[0]"></h5>
            <p v-text="config.p_3[0]"></p>
        </div>
        <div class="right-content">
            <h5 class="heading" v-text="config.h5_4[0]"></h5>
            <p v-text="config.p_4[0]"></p>
        </div>
    </div>
    <div class="container grid">
        <div class="left-content">
            <img :src="config.img1_4" >
        </div>
        <div class="right-content">
            <h4 v-text="config.h4_1[0]"></h4>
        </div>
    </div>
    </section>`,
    props:{
        config: Object
    },
    data() {
        return {

        }
    }
}