<template>
    <div style="position: relative">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="p-grid event-list">
        <h1 class="recommendations-title">Recomendaciones</h1>
        <div v-for="event in events" :key="event.id">
            <event-card  class="event-card" :event="event" ></event-card>
            <pv-dialog
                v-model:visible="this.confirmDialog"
                :style="{width:'450px'}"
                header="Confirm"
                :modal="true"
                :draggable="false"
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
                    />
                    <pv-button
                        :label="'Yes'.toUpperCase()"
                        icon="pi pi-check"
                        class="p-button-text"
                    />
                </template>
            </pv-dialog>
        </div>
    </div>
</template>

<script>
import {EventsApiService} from "@/services/events-api.service";
import {FilterMatchMode} from "primevue/api";
import EventCard from "@/components/event-card.component.vue";
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "event-list",
    components: {EventCard, UserToolbar},
    data(){
        return {
            events:[],
            filters: {},
            eventsService: null,
            confirmDialog: false,
            selectedEvent: null
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
        initFilters(){
            this.filters={
                global: {value: null, matchMode: FilterMatchMode.CONTAINS},
            };
        }
    },
};
</script>

<style scoped>
.event-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    background-color: #242423;
}

.event-card {
    width: 100%;
    margin-top: 20px;
    border: 3px solid white;
    padding: 10px;
    box-sizing: border-box;
    background-color: #242423;
}

.event-card h4 {
    font-size: 18px;
    margin: 0;
}

.event-card p {
    font-size: 16px;
    margin: 0;
}

.add-event-btn {
    margin-top: 20px;
    align-self: flex-end;
}

.recommendations-title {
    font-size: 40px;
    margin-bottom: 10px;
    color: #79B791;
    text-align: left;
}
</style>