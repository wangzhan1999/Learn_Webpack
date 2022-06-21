import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../layout/Home.vue';

const routes :Array<RouteRecordRaw>= [
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../layout/About.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;