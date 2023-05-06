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
            Eventos
        </div>
        <pv-card style="width: 75rem">
            <template #content>
                <div class="grid">
                    <div class="col-40 align-items-center">
                        <img alt="user header" src="src/assets/Side-Image.png" width="480" height="480" />
                    </div>
                    <div class="col-60">
                        <div class="title">
                            Fiesta anual de fin de año
                        </div>
                        <div class="text">
                            Llegan a Perú, los artistas más esperados del momento.
                            Más de mil entradas disponibles para disfrutar de los talentos más grandes del rock en español.
                            Te esperamos en Surco, Lima, ¡No faltes!
                        </div>
                        <div class="inputbox">
                            <router-link to="/social-evento">
                                <pv-button class="text" label="Ver Página" severity="success" outlined/>
                            </router-link>
                        </div>
                    </div>
                </div>
            </template>
        </pv-card>
    </div>
</template>

<script>
export default {
    name: "pg-eventos.component"
}
</script>

<style >
.text{
    margin-bottom: 12px;
    font-family: "Century Gothic";
    font-size: 24px;
    color:#79B791;
}
.title{
    margin-top: 32px;
    margin-bottom: 32px;
    font-family: "Century Gothic";
    font-size: 32px;
    color:#79B791;
}
.col-60{
    flex: 0 0 auto;
    padding: $gutter;
    width: 50%;
}
.col-40{
    flex: 0 0 auto;
    padding: $gutter;
    width: 50%;
}
.grid{
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    padding: 1rem;
}
.align-items-center{
    align-items: center;
}
.inputbox{
    margin-top: 32px;
}

</style>