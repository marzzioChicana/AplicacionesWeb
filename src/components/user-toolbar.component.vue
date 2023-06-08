<template>
    <pv-toolbar class="color-box">
        <template #start>
            <img src="../assets/user_toolbar/logo1.png" alt="logo" width="120" height="40"/>
        </template>

        <template #end>
            <div class="button-container">
                <pv-button class="mr-2" text>
                    <span class="boton">Agenda</span>
                </pv-button>

                <pv-button class="mr-2" text>
                    <span class="boton">Usuario</span>
                </pv-button>
            </div>
        </template>
    </pv-toolbar>



</template>

<script>
export default {
    name: "toolbar.component"
}
</script>

<style scoped>
.mr-2 {
    margin-right: 2px;
}

.boton {
    color: #79b791;
    font-size: 20px;
}

.color-box {
    background-color: #242422;
    border-color: #242422;
}

@media screen and (max-width: 768px) {
    .button-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .mr-2 {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
</style>