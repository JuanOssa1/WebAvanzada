import VueRouter from "vue-router";
import Vue from 'vue';
import HomeView from "../views/HomeView"
import PetsView from "../views/PetsView"


Vue.use(VueRouter);

const routes=[
    {
        path:"/",
        component: HomeView,
    },
    {
        path: "/pets",
        component: PetsView,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;