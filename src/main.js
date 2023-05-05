import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-dark-teal/theme.css';

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";


createApp(App)
    .use(PrimeVue, {ripple:true})
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-inputtext', InputText)
    .component('pv-password', Password)
    .component('pv-radiobutton', RadioButton)
    .mount('#app')
