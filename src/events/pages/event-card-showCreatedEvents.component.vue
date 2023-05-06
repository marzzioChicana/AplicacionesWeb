<script>
  import {EventsApiService} from "@/events/services/events-api.service";
  import {FilterMatchMode} from "primevue/api";
  import EventCard from "../../components/event-card.component.vue";
  import EventFormAddEvent from "@/events/pages/event-form-addEvent.component.vue";

  export default {
      name: "event-list",
      components:{EventCard, EventFormAddEvent},
      data(){
          return {
              events:[],
              filters: {},
              submitted: false,
              eventsService: null,
              selectedEvent: null,
              drawer: false,
              item:{
                  label:"Add event",
                  to: "/add-event"
              }
          };
      },
      created(){
          this.eventsService = new EventsApiService();
          this.eventsService.getAll().then((response) =>{
              this.events= response.data;
              console.log(this.events);
          });
          this.initFilters();
      },

      methods:{
          getStorableEvent(displayableEvent){
              return {
                  id: displayableEvent.id,
                  name: displayableEvent.name,
                  description: displayableEvent.description,
                  time_start: displayableEvent.time_start,
                  time_end: displayableEvent.time_end,
                  date_start: displayableEvent.date_start,
                  date_end: displayableEvent.date_end,
                  price: displayableEvent.price,
              };
          },
          hideDialog(){
              this.eventDialog = false;
              this.submitted=false;
          },
          saveEvent(){
              this.submitted = true;
              if(this.event.name.trim()){
                  if(this.event.id){
                      console.log(this.event);
                      this.event = this.getStorableEvent(this.event);
                      this.eventsService
                          .update(this.event.id, this.event)
                          .then((response) => {
                              console.log(response.data.id);
                              this.$toast.add({
                                  severity: "success",
                                  summary: "Successful",
                                  detail: "Event updated",
                                  life: 3000,
                              });
                              console.log(response);
                          });
                  } else {
                      this.event.id=0;
                      console.log(this.event);
                      this.event = this.getStorableEvent(this.event);
                      this.eventsService.create(this.event).then((response) => {
                          this.event = this.getStorableEvent(response.data);
                          this.events.push(this.event);
                          this.$toast.add({
                             severity: "success",
                             summary: "Successful",
                             detail: "Event Created",
                             life: 3000,
                          });
                          console.log(response);
                      });
                  }
                  this.eventDialog = false;
                  this.event = {};
              }
          },
          deleteEvent(){
              this.eventsService.delete(this.event.id).then((response) => {
                  this.events = this.events.filter(
                      (t) => t.id !== this.event.id
                  );
                  this.deleteEventDialog = false;
                  this.event = {};
                  this.$toast.add({
                     severity: "success",
                     summary: "Successful",
                     detail: "Event Deleted",
                     life: 3000,
                  });
                  console.log(response);
              })
          },
          initFilters(){
            this.filters={
             global: {value: null, matchMode: FilterMatchMode.CONTAINS},
            };
          },
      },
  };

</script>

<template>
        <div class="p-grid event-list">
            <div>
                <pv-input-text placeholder="Search" type="text"/>
                <pv-button><i class="pi pi-search" ></i></pv-button>
            </div>
            <div v-for="event in events" :key="event.id">
                <event-card  class="event-card" :event="event"></event-card>
                <pv-dialog
                    v-model:visible="this.item.deleteEventDialog"
                    :style="{width:'450px'}"
                    header="Confirm"
                    :modal="true"
                >
                    <div class="confirmation-content">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="event">
                            Are you sure you want to delete <b>{{ event.name }}</b>?
                        </span>
                    </div>
                    <template #footer>
                        <pv-button
                            :label="'No'.toUpperCase()"
                            icon="pi pi-times"
                            class="p-button-text"
                            @click="this.item.deleteEventDialog"
                        />
                        <pv-button
                            :label="'Yes'.toUpperCase()"
                            icon="pi pi-check"
                            class="p-button-text"
                            @click="deleteEvent"
                        />
                    </template>
                </pv-dialog>
            </div>
            <div>
                <router-link
                    :to="item.to"
                    custom
                    v-slot="{ navigate, href }"
                    :key="item.label"
                >
                    <pv-button
                        class="p-button-text text-black add-event-btn"
                        :href="href"
                        @click="navigate"
                    >{{ item.label }}</pv-button>
                </router-link>
            </div>
        </div>
</template>

<style scoped>
.event-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

.event-card {
    flex-basis: 300px;
    flex-grow: 1;
    margin-top: 10px;
}

.add-event-btn {
    margin-top: 20px;
    align-self: flex-end;
}
</style>