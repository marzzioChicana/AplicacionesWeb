<template>
    <div class="w-full">
        <pv-toolbar>
            <template #start>
                <img src="../assets/logo.png" alt="" width="100" height="30">&nbsp
            </template>

            <template #end>
                <pv-inputtext id="search" aria-describedby="seach-bar" type="text" v-model="value" />
                <pv-button class="text" severity="success" outlined label="search"/>
            </template>
        </pv-toolbar>
    </div>
    <div>
        <div class="title">
            Fiesta anual de fin de año
        </div>
        <div>
            <img src="../assets/fondo.jpg" alt="" class="image">
        </div>
        <div class="centrado">
            <div class="text">
                Llegan a Perú, los artistas más esperados del momento.
                Más de mil entradas disponibles para disfrutar de los talentos más grandes del rock en español.
                Te esperamos en Surco, Lima, ¡No faltes!
            </div>
        </div>
        <div class="centrado">
            <div class="text">
                Coste de Entrada : s/. 5
            </div>
            <div class="text">
                Fecha y Hora: 10:00 AM 02/6/23
            </div>
            <div class="text">
                Ubicación: Barranco, Lima
            </div>
            <div class="inputbox">
                <router-link to="/pg-eventos">
                    <pv-button class="text" label="Comprar Entrada" severity="success" outlined/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "social-evento.component"
}
</script>

<style >
.text{
    margin-bottom: 12px;
    font-family: "Century Gothic";
    font-size: 24px;
    color:#79B791;
    text-align: center;
}
.title{
    margin-top: 32px;
    margin-bottom: 32px;
    font-family: "Century Gothic";
    font-size: 32px;
    color:#79B791;
    text-align: center;
}
.centrado{
    flex: 0 0 auto;
    padding: 10px;
    width: 50%;
    margin-left: 25%;
}
.image{
    flex: 0 0 auto;
    padding: 10px;
    width: 80vw;
    height: 40vw;
    margin-left: 10vw;
}
.inputbox{
    text-align: center;
    margin-top: 64px;
}

</style>