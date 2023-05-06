import {createRouter, createWebHistory} from "vue-router";
import EventFormAddEvent from "@/events/pages/event-form-addEvent.component.vue";
import EventFormAddMethodPayment from "@/events/pages/event-form-addMethodPayment.component.vue";
import EventCardEventResume from "@/events/pages/event-card-eventResume.component.vue";
import EventCardShowCreatedEvents from "@/events/pages/event-card-showCreatedEvents.component.vue";
import EventCardProfile from "@/events/pages/event-card-profile.component.vue";
import EventHome from "@/events/pages/event-home.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/events',
            name: 'events of Event Manager',
            component: EventCardShowCreatedEvents,
        },
        {
            path: '/method-payment',
            name: 'method payment for create a event',
            component: EventFormAddMethodPayment,
        },
        {
            path: '/add-event',
            name: 'Event Manager create a event',
            component: EventFormAddEvent,
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/LandingPageView.vue'),
        },
        {
            path: '/event-created',
            name: 'Event created',
            component: EventCardEventResume,
        },
        {
            path: '/',
            redirect: 'Home',
            component: EventHome,
        },
        {
            path: '/profile',
            name: 'Profile of user',
            component: EventCardProfile
        },
        {
            path: '/home',
            name: 'Home',
            component: EventHome
        }
    ]
})

export default router