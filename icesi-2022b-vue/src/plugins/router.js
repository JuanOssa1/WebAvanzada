import VueRouter from "vue-router";
import Vue from 'vue';
import HomeView from "../views/HomeView"
import PetsView from "../views/PetsView"
import FavoritesView from "../views/FavoritesView.vue"


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
    {
        path:"/favorites",
        component: FavoritesView
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;