<template>
    <div class="w-full">
        <pv-toolbar>
            <template #start>
                <img src="../assets/logo.png" alt="" width="100" height="30">&nbsp
                <pv-button label="Servicios" severity="success" text />
                <pv-button label="Nosotros" severity="success" text />
                <pv-button label="Soporte" severity="success" text />
            </template>

            <template #end>
                <router-link to="/login">
                    <pv-button label="Iniciar Sesion" severity="success" outlined/>&nbsp &nbsp
                </router-link>
                <router-link to="/register">
                    <pv-button label="Registrar" severity="success" severities />
                </router-link>
            </template>
        </pv-toolbar>
    </div>
    <div>
        <img src="../assets/fondo.jpg" alt="" width="1520" height="650">
    </div>
</template>

<script>

export default {
    name: "toolbar.component",
}
</script>

<style scoped>

</style>