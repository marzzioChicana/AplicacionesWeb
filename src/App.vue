<template>
    <div class="w-full">
        <pv-toolbar>
            <template #start>
                <img src="./assets/logo.png" alt="" width="100" height="30">&nbsp
                <pv-button label="Servicios" severity="success" text />
                <pv-button label="Nosotros" severity="success" text />
                <pv-button label="Soporte" severity="success" text />
            </template>

            <template #end>

                <pv-button label="Iniciar Sesion" severity="success" outlined/>&nbsp &nbsp
                <pv-button label="Registrar" severity="success" severities />
            </template>
        </pv-toolbar>
    </div>
    <div>
        <img src="./assets/fondo.jpg" alt="" width="1520" height="650">
    </div>
    <div>
        <registro-component></registro-component>
    </div>
</template>

<script>
import Inicio from '@/components/inicio.component.vue'
import inicioComponent from "@/components/inicio.component.vue";
import RegistroComponent from "@/components/registro.component.vue";

export default{
    name:'App',
    computed: {
        inicioComponent() {
            return inicioComponent
        }
    },
    components:{Inicio,RegistroComponent}
}
</script>