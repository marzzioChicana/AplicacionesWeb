<script>
import LanguageSwitcher from "@/components/language-switcher.component.vue";
export default {
    name: "toolbar-component",
    components: {LanguageSwitcher},
    data(){
        return{
            drawer: false,
            items:[
              {label: "Events", to: "/events",  style: { fontFamily: "Century Gothic", fontSize: "25px" }},
              {label: "Profile", to: "/profile", style: { fontFamily: "Century Gothic", fontSize: "25px" }},
              {label: "About Us", to: "/about", style: { fontFamily: "Century Gothic", fontSize: "25px" }}
            ]
        }
    }
}
</script>


<template>
    <pv-toast />
    <header>
        <pv-toolbar class="bg-black-alpha-90">
            <template #start>
                <div class="flex-column">
                    <router-link
                        to="/home"
                        custom
                        v-slot="{ navigate, href }"
                    >
                        <pv-button
                            class="p-button-text text-white"
                            :href="href"
                            @click="navigate"
                        >
                            <img alt="logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9sR_nWTDzfp9SIzKkcfWmdH-iRGU0St9fb0T9AN5pZvkxAMo0xWPrhhVGeKhXVbvJ5sK0zeSqjqFxonVmDArMQbadEL1mRSQZdbC6Zz3IzALjELX7DDEKyMIryGOiTp87D-QOr2qAN-u6EyBFZP719qCyw4Y_N3ixtOOCHyXqTPsN69piBY_ehbhSIw/s320/logo.png" height="40" class="mr-2" />
                        </pv-button>

                    </router-link>
                </div>
                <div class="flex-column hover:bg-pink-900">
                    <router-link
                        v-for="item in items"
                        :to="item.to"
                        custom
                        v-slot="{ navigate, href }"
                        :key="item.label"
                    >
                        <pv-button
                            class="p-button-text text-green-500"
                            :href="href"
                            @click="navigate"
                            :style="item.style"
                        >{{ item.label }}</pv-button>
                    </router-link>
                </div>
            </template>
            <template #end>
                <language-switcher/>
            </template>
        </pv-toolbar>
    </header>
    <body class="content-container">
        <RouterView />
    </body>

</template>

<style>
i{
    color: white;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}

.content-container {
    margin-top: 100px;
}
</style>