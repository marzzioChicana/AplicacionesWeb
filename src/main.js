import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {createRouter, createWebHashHistory} from 'vue-router';

import LandingPageComponent from "@/components/landing-page.component.vue";
import LoginComponent from "@/components/login.component.vue";
import RegisterComponent from "@/components/register.component.vue";
import EventsComponent from "@/components/events.component.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'bootstrap';


import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import RadioButton from "primevue/radiobutton";

import Dialog from "primevue/dialog";

const routes = [
    {path:'/', component: LandingPageComponent},
    {path:'/home', component: LandingPageComponent},
    {path:'/login', component: LoginComponent},
    {path: '/register', component: RegisterComponent},
    {path: '/events', component: EventsComponent}
]

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {ripple:true})
app.component("pv-toolbar", Toolbar)
app.component("pv-button", Button)
app.component("pv-card", Card)
app.component("pv-inputtext", InputText)
app.component("pv-inputnumber", InputNumber)
app.component("pv-radiobutton", RadioButton)

app.component("pv-dialog", Dialog)

app.mount('#app')