<template>
  <ToolbarComponent/>
  <div>
    <pv-card>
      <template #header>
        <img :alt="event.name" :src="event.image">
      </template>
      <template #title>
        <h2>{{ event.name }}</h2>
      </template>
      <template #content>
        <p>{{ event.description }}</p>
        <p><strong>Price:</strong> {{ event.price }}</p>
        <!-- Add other event details as needed -->
      </template>
    </pv-card>
  </div>
</template>

<script>
import { EventsApiService } from "../services/events-api.service";
import ToolbarComponent from "@/components/toolbar-eventManager.vue";
import EventCardComponent from "@/components/event-card.component.vue";
import EventCardShowCreatedEventsComponent from "@/events/pages/event-card-showCreatedEvents.component.vue";
export default {
  components: {ToolbarComponent, EventCardComponent, EventCardShowCreatedEventsComponent},
  data() {
    return {
      id:0,
      event: [],
      eventsService: new EventsApiService(),
    };
  },
  methods: {
    getDataEvent(){
      this.eventsService.getById(this.id).then((response) =>{
        this.event= response.data[0];
        console.log(this.event);
      });
    }
  },
  beforeMount() {
    this.id=this.$route.params.id;
    console.log(this.id);
    this.getDataEvent();
    console.log(this.event);
  },
};
</script>

<style scoped>

</style>
