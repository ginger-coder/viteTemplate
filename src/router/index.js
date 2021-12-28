import { createRouter, createWebHashHistory } from "vue-router";
import Home from 'views/home/home.vue';
import Detail from 'views/detail/detail.vue';
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default Router;