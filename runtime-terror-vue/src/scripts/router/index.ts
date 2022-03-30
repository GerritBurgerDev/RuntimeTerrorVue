import {createRouter, createWebHistory, Router} from "vue-router";
import Home from '../../components/Home/home-component.vue';
import About from '../../components/About/about-component.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About}
];

// ROUTER SETUP
export const router: Router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
