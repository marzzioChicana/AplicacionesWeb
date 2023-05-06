<script>
import EventFormAddMethodPayment from "@/events/pages/event-form-addMethodPayment.component.vue";
export default {
    name:"form-content",
    components: {EventFormAddMethodPayment},
    props:{
        event:null,
    },
    data(){
      return{
          item:{
              label:"Add payment method",
              to: "/method-payment"
          },
          submitted:false,
          eventDialog: false
      };
    },
    methods:{
        hideDialog(){
            this.eventDialog = false;
            this.submitted=false;
        },
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
        validatePrice() {
            const precioInput = document.getElementById("eventPrice");
            const precioValor = parseFloat(precioInput.value);
            const errorPrecio = document.getElementById("errorPrecio");

            if (precioValor < 0) {
                precioInput.classList.add("error");
                errorPrecio.innerText = "El precio debe ser mayor o igual a cero";
                return false;
            } else {
                precioInput.classList.remove("error");
                errorPrecio.innerText = "";
                return true;
            }
        }
    }
}

</script>

<template>
    <body>
    <div class="content">
        <div class="input-container">
            <label for="eventName">Nombre del Evento</label>
            <input type="text" id="eventName" />
        </div>
        <div class="input-container">
            <label for="eventDescription">Descripción del Evento</label>
            <input type="text" id="eventDescription" />
        </div>
        <div class="input-container">
            <label for="eventStartTime">Hora de Inicio</label>
            <input type="time" id="eventStartTime" />
        </div>
        <div class="input-container">
            <label for="eventEndTime">Hora de Finalización</label>
            <input type="time" id="eventEndTime" />
        </div>
        <div class="input-container">
            <label for="eventGuests">Invitados</label>
            <input type="text" id="eventGuests" />
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
                    icon="pi pi-credit-card"
                    :href="href"
                    @click="navigate"
                ></pv-button>
            </router-link>
        </div>
        <form onsubmit="return validatePrice()">
            <div class="input-container">
                <label for="eventPrice">Precio de Entrada</label>
                <input type="number" id="eventPrice" min="0" step="0.01" required>
                <span id="errorPrecio" class="error"></span>
            </div>
            <div class="pagination">
                <pv-button class="submit" @click="saveEvent">Crear evento</pv-button>
            </div>
        </form>
    </div>
    </body>
</template>


<style>
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: 100%;
    overflow-x: hidden;
}
input {
    width: 400px;
    height: 40px;
}
h1, h2, h3, h4, h5, h6,
p, span, label, button {
    color: #79b791;
}
input {
    background-color: #abd1b5;
    color: #242423;
}

.navbar-left h1 {
    margin: 0;
    padding-right: 20px;
    font-size: 24px;
}

.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-container input[type="text"] {
    width: 100%;
    padding: 10px 40px 10px 10px;
    font-size: 16px;
    border: 1px solid #242423;
    border-radius: 4px;
    box-sizing: border-box;
}

.search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 16px;
}

.search-icon i {
    color: #fff;
}

.content {
    max-width: 100%;
    padding: 2rem;
    background-color: #242423;
    border-top: 1px solid #79b791;

    margin: 0 auto;
    box-sizing: border-box;

}

.input-container {
    margin-bottom: 20px;
}

.input-container label {
    display: block;
    margin-bottom: 5px;
}

.input-container input[type="text"],
.input-container input[type="time"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

@media screen and (min-width: 600px) {
    .navbar-left h1 {
        font-size: 28px;
    }
}
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-color: #242423;
}

.pagination button {
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #007ad9;
    border-radius: 4px;
    background-color: #BC2C1A;
    color: #ffffff;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #98053e;
    color: #fff;
}
error {
    color: #f44336;
}
</style>