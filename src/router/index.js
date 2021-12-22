import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import postDetails from '../views/postDetails.vue'
const routes = [
    {
        path: '/post-details/:id',
        name: 'post-details',
        props:true,
        component: postDetails,
    },
    {
        path: '/',
        name: 'EventList',
        component: EventList,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router