import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {createRouter, createWebHashHistory} from 'vue-router';
import Inicio from "../src/components/inicio.component.vue";
import ToolbarC from "../src/components/toolbar.component.vue";
import Registro from "../src/components/registro.component.vue"
import PgEventosComponent from "@/components/pg-eventos.component.vue";
import SocialEventoComponent from "@/components/social-evento.component.vue";

import 'primevue/resources/themes/lara-dark-teal/theme.css';
import '/node_modules/primeflex/primeflex.css';

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Card from 'primevue/card';

const routes = [
    {path:'/', component: ToolbarC},
    {path:'/login', component: Inicio},
    {path: '/register', component: Registro},
    {path: '/pg-eventos', component: PgEventosComponent},
    {path: '/social-evento', component: SocialEventoComponent}
]

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {ripple:true})
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-inputtext', InputText)
    .component('pv-password', Password)
    .component('pv-radiobutton', RadioButton)
    .component('pv-card', Card)
    .mount('#app')
