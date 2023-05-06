<template>
    <div class="grid">
        <div class="col-6 align-items-center">
            <img src="src/assets/Side-Image.png" alt="" width="491" height="732"/>
        </div>
        <div class="col-6">
            <div class="title">
                ¡Registrese ahora!
            </div>
            <div class="inputbox">
                <div class="text">Nombre de usuario</div>
                <pv-inputtext id="username" aria-describedby="username-help" type="text" v-model="value" />
            </div>
            <div class="inputbox">
                <div class="text">Correo Electrónico</div>
                <pv-inputtext type="text" v-model="value" />
            </div>
            <div class="inputbox">
                <div class="text">Contraseña</div>
                <pv-inputtext type="password" id="password" v-model="value"/>
            </div>
            <div class="inputbox grid align-items-center">
                <div class="flex  col">
                    <pv-radiobutton v-model="plan" inputId="plan1" name="plan" value="Normal" />
                </div>
                <div class="col-1 align-items-center">
                    <label class="text" for="plan1">Usuario Normal</label>
                </div>
                <div class="flex col">
                    <pv-radiobutton v-model="plan" inputId="plan2" name="plan" value="Gestor" />
                </div>
                <div class="col-1 align-items-center">
                    <label class="text" for="plan2">Gestor de Eventos</label>
                </div>
            </div>
            <div class="inputbox">
                <router-link to="/pg-eventos">
                <pv-button class="text" label="Registrarse" severity="success" outlined/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "registro.component"
}
</script>

<style>
.grid{
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
}
.inputbox{
    margin-top: 32px;
}
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
.col-6{
    flex: 0 0 auto;
//padding: $gutter;
    width: 50%;
    padding: 4rem;
}
.col{
    flex: 0 0 auto;
    padding: $gutter;
    width: 10%;
}
.col-1{
    flex: 0 0 auto;
    padding: $gutter;
    width: 25%;
}
.align-items-center{
    align-items: center;
}
.flex{
    flex: 1 1 0%;
}
</style>