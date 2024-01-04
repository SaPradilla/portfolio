import './assets/main.css'
// import 'primevue/resources/themes/lara-light-amber/theme.css'
import ES from './locale/es.json'
import EN from './locale/en.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import Ripple from 'primevue/ripple';
import AnimateOnScroll from 'primevue/animateonscroll';
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
    allowComposition: true, 
    locale:'ES',
    messages :{
        ES:ES,
        EN:EN
    }
    
})
app.directive('animateonscroll', AnimateOnScroll);
app.directive('ripple', Ripple);
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true  });
app.use(i18n)
app.mount('#app')
 