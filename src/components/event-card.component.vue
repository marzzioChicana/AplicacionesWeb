<script>
 export default{
      name: "event-card",
      props:{
        event:null
      },
      data(){
        return {
            eventDialog: false,
            deleteEventDialog: false,
        };
      },
      methods:{
          editEvent(event){
              console.log(event);
              this.event = {...event};
              console.log(this.event);
              this.eventDialog = true;
          },
          confirmDeleteEvent(){
              this.$emit('delete', this.event);
          },
      }
  }
</script>

<template>
    <pv-card class="card">
        <template #header>
            <img :alt="event.name" :src="event.image">
        </template>
        <template #title>
            <p>{{ event.name }}</p>
        </template>
        <template #content>
            <p class="flex align-content-start flex-wrap">
                <span class="flex align-items-center justify-content-center">{{ event.name }}</span>
            </p>
            <p class="flex align-content-start flex-wrap mt-4">
                {{ event.description }}
            </p>
        </template>
        <template #footer="slotProps" >
            <pv-button
                    icon="pi pi-pencil"
                    class="p-button-text p-button-rounded"
                    @click="editEvent(slotProps.data)"
            />
            <pv-button
                    icon="pi pi-trash"
                    class="p-button-text p-button-rounded"
                    @click="confirmDeleteEvent()"
            />
            <router-link :to="'/events/' + event.id">
              <pv-button
                    icon="pi pi-eye"
                    class="p-button-text p-button-rounded"
              />
            </router-link>
        </template>
    </pv-card>
</template>

<style>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width:100%;
}

.card img {
    width: 300px;
    height: 200px;
}
</style>