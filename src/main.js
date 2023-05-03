import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-dark-teal/theme.css';

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

createApp(App)
    .use(PrimeVue, {ripple:true})
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .mount('#app')
