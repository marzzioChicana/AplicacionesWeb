import { createApp } from 'vue'
import { createPinia} from 'pinia';

import App from './App.vue'
import router from './router'
import i18n from "@/i18n";

import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Menubar from "primevue/menubar";
import Calendar from "primevue/calendar";
import InputMask from "primevue/inputmask";
import RadioButton from "primevue/radiobutton";
import Password from "primevue/password";
import SelectButton from "primevue/selectbutton";

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Toast Service
app.use(ToastService);

// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });
app.use(i18n);
app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-textarea", Textarea);
app.component("pv-button", Button);
app.component("pv-row", Row);
app.component("pv-sidebar", Sidebar);
app.component("pv-menu", Menu);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);
app.component("pv-menubar", Menubar);
app.component("pv-calendar", Calendar);
app.component("pv-input-mask", InputMask);
app.component("pv-radio-button", RadioButton);
app.component("pv-password", Password);
app.component("pv-select-button", SelectButton);
app.mount('#app')
