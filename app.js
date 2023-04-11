import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import mybaner from './components/mybaner.js';
import myBarra from './components/myBarra.js';
import myImg1 from './components/myImg1.js';
import mytextImg1 from './components/mytext-img1.js';
import mytextImg2 from './components/mytext-img2.js';
import mytextIng3 from './components/mytext-ing3.js';
import myText1 from './components/myText1.js';
let app = createApp(main);
app.component(mybaner.name, mybaner);
app.component(myBarra.name, myBarra);
app.component(myImg1.name, myImg1);
app.component(mytextImg1.name, mytextImg1);
app.component(mytextImg2.name, mytextImg2);
app.component(mytextIng3.name, mytextIng3);
app.component(myText1.name, myText1);

app.mount("#app");