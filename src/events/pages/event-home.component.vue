<script>
import ToolbarComponent from "@/components/toolbar-eventManager.vue";

export default {
    components: {ToolbarComponent}
}

</script>

<template>
  <ToolbarComponent />
  <div class="container">
    <img class="image" src="https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg" alt="">
  </div>
</template>

<style>

.container {
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container img {
    max-width: 100%;
    height: auto;
}

</style>