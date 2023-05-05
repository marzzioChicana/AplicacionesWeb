<template>
    <div class="grid">
        <div class="col-6 align-items-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="Phone image" width="700" height="700">
        </div>

        <div class="col-6">
            <div class="title">
                Iniciar Sesion
            </div>
            <!-- Email input -->
            <div class="inputbox">
                <div class="text">Correo electronico</div>
                <pv-inputtext v-model="value" type="email" class="p-inputtext-sm" />
            </div>

            <!-- Password input -->
            <div class="inputbox">
                <div for="password" class="text">Password</div>
                <pv-password v-model="value" :feedback="false" class="p-inputtext-sm" inputId="password" />
            </div>

            <!-- Submit button -->
            <div class="inputbox">
                <pv-button label="Sign in" severity="success" outlined/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "inicio.component"
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
.align-items-center{
    align-items: center;
}
</style>
