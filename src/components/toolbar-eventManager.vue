<script>
import LanguageSwitcher from "@/components/language-switcher.component.vue";
export default {
  name: "toolbar-component",
  components: {LanguageSwitcher},
  data(){
    return{
      drawer: false,
    }
  }
}
</script>

<template>
  <header>
    <pv-toolbar class="color">
      <template #start>
        <div class="flex-column">
          <router-link to="/home">
            <pv-button class="p-button-text text-white">
              <img alt="logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9sR_nWTDzfp9SIzKkcfWmdH-iRGU0St9fb0T9AN5pZvkxAMo0xWPrhhVGeKhXVbvJ5sK0zeSqjqFxonVmDArMQbadEL1mRSQZdbC6Zz3IzALjELX7DDEKyMIryGOiTp87D-QOr2qAN-u6EyBFZP719qCyw4Y_N3ixtOOCHyXqTPsN69piBY_ehbhSIw/s320/logo.png" height="40" class="mr-2" />
            </pv-button>
          </router-link>
        </div>
        <div class="flex-column" >
          <router-link to="/events">
            <pv-button class="p-button-text text-white">Events</pv-button>
          </router-link>
          <router-link to="/profile">
            <pv-button class="p-button-text text-white">Profile</pv-button>
          </router-link>
          <a href="https://onservice-ws51.github.io/LandingPage.github.io/" target="_blank">
              <pv-button class="p-button-text text-white">About Us</pv-button>
          </a>
        </div>
      </template>
      <template #end>
        <div>
          <pv-input-text placeholder="Search" type="text"/>
          <pv-button class="color"><i class="pi pi-search" ></i></pv-button>
        </div>
        <language-switcher/>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
.color{
    background-color: #242423;
}
</style>