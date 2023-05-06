<script>
import {MethodsApiService} from "@/events/services/methods-api.service";

export default {
    name:"add-payment",
    data(){
        return{
            isValidate: false,
            methods:[],
            method:{},
            methodsService: null,
            submitted:false,
            item:{
                item:{
                    label:"Add event",
                    to: "/add-event"
                }
            },
            value:null
        }
    },
    created(){
      this.methodsService= new MethodsApiService();
      this.methodsService.getAll().then((response) => {
          this.methods = response.data;
          console.log(this.methods);
      });
    },
    methods:{
        validateField(value) {
            if (!value) {
                return 'Value is required.';
            }

            this.isValidate=true;
        },
        getStorableMethod(displayableMethod){
            return{
                id: displayableMethod.id,
                cardNumber: displayableMethod.cardNumber,
                dateVen: displayableMethod.dateVen,
                cvv: displayableMethod.cvv
            }
        },
        saveMethod(){
            this.submitted=true;
            if(this.method.cardNumber.trim()){
                if(this.method.cardNumber.id){
                    console.log(this.method);
                    this.method=this.getStorableMethod(this.method);
                    this.methodsService
                        .update(this.method.id, this.method)
                        .then((response) => {
                          console.log(response.data.id);
                          this.$toast.add({
                              severity:"success",
                              summary: "Successful",
                              detail: "Method Updated",
                              life:3000,
                              group:'br'
                          });
                          console.log(response);
                        });
                }else {
                   this.method.id=0;
                   console.log(this.method);
                   this.method = this.getStorableMethod(this.method);
                   this.methodsService.create(this.method).then((response) => {
                       this.methods.push(this.method);
                       this.$toast.add({
                           severity: "success",
                           summary: "Successful",
                           detail: "Method Created",
                           life: 3000,
                           group: 'br'
                       });
                       console.log(response);
                   });
                }
                this.tutorial={};
            }
        },
        deleteMethod(){
            this.methodsService.delete(this.method.id).then((response) => {
                this.tutorials = this.tutorial.filter(
                    (t) => t.id !== this.method.id
                );
                this.method={};
                this.$toast.add({
                    severity: "success",
                    summary:"Successful",
                    detail: "Method Deleted",
                    life: 3000,
                    group:'br'
                });
                console.log(response);
            })
        }
    }
}
</script>

<template>
    <div class="card flex justify-content-center">
        <pv-toast position="bottom-right" group="br" />

        <form class="flex flex-column gap-2" @submit.prevent="saveMethod">
            <div>Please choose method of payment.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <pv-radio-button v-model="value" inputId="method1" name="paymentMethod" value="Debit" />
                    <label for="method1" class="ml-2">Debit</label>
                </div>
                <div class="flex align-items-center">
                    <pv-radio-button v-model="value" inputId="method2" name="paymentMethod" value="Credit" />
                    <label for="method2" class="ml-2">Credit</label>
                </div>
                <div class="flex align-items-center">
                    <pv-radio-button v-model="value" inputId="method3" name="paymentMethod" value="Paypal" />
                    <label for="method3" class="ml-2">Paypal</label>
                </div>
            </div>
            <template v-if="value === 'Credit' || value === 'Debit' || value === 'Paypal'">
                <div class="field mt-3">
                    <span class="p-float-label">
                        <pv-input-text type="text" id="cardNumber" v-model.trim="method.cardNumber" :required="submitted" autofocus />
                        <label for="cardNumber">Card Number</label>
                        <small class="p-error" v-if="submitted && !method.cardNumber">Card number is required</small>
                    </span>
                </div>
                <div class="field mt-3">
                    <span class="p-float-label">
                        <pv-input-text type="text" id="dateVen" v-model.trim="method.dateVen" :required="submitted" />
                        <label for="dateVen">Date Expired</label>
                        <small class="p-error" v-if="submitted && !method.dateVen">Date expired is required</small>
                    </span>
                </div>
                <div class="field mt-3">
                    <span class="p-float-label">
                        <pv-input-text type="text" id="cvv" v-model.trim="method.cvv" :required="submitted" />
                        <label for="cvv">CVV</label>
                        <small class="p-error" v-if="submitted && !method.cvv">CVV is required</small>
                    </span>
                </div>
            </template>

            <pv-button @click=saveMethod type="submit" label="Add method payment" class="p-button-text text-black add-event-btn" icon="pi pi-credit-card" />
        </form>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

</style>

