<script>
import { EventsApiService } from "@/events/services/events-api.service";
import { useRoute } from "vue-router";

export default{
    name: "event-page",
    data(){
        return {
            event: null,
            eventsService: null,
            id: 0,
        };
    },
    methods:{
        getEvent(id){
            this.eventsService = new EventsApiService();
            this.eventsService.getById(id).then((response)=>{
                this.event=response.data;
                console.log(this.event[0].name);
            });
        }
    },
    created(){
        let route = useRoute();
        this.id= route.params.id;
        console.log("this.id :" + this.id);
        console.log("route.params.id :" + route.params.id);
        this.getEvent(this.id)
    }
}
</script>
<template>
  <div class="main-container">
      <div class="image-container">
          <img :alt="event[0].name" :src="event[0].image" class="event-image">
      </div>
      <div class="text-center title" >{{ event[0].name }}</div>
      <div class="text-center description">{{ event[0].description }}</div>
  </div>

    <div class="main-container">
        <div class="text-center description">
            Precio de entrada: s/.{{ event[0].price }}
        </div>
        <div class="button-entrada text-center">
            <pv-button class="text-center" size="large"
                       label="Comprar entradas" severity="success" outlined />
        </div>
    </div>
</template>
<style>
  .image-container{
      width: 98%;
      height: 480px;
      overflow: hidden;
      margin-top: -5%;
  }
  .event-image{
      width: 98%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -10%;
  }
  .main-container{
      margin: 1%;
  }
  .title{
      font-size: 48px;
      color: #79b791;
      padding: 16px 0;
      flex: auto;
  }
  .description{
      font-size: 24px;
      color: #79b791;
      padding: 16px 2%;
      flex: auto;
  }
  .button-entrada{
      font-size: 32px;
      padding: 20px 0;
      //padding-left: 50%;
  }
</style>