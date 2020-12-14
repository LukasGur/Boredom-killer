import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ActivityGenerator from "@/views/ActivityGenerator.vue";
import FavouriteList from "@/views/FavouriteList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activity-generator",
    name: "Activity generator",
    component: ActivityGenerator
  },
  {
    path: "/favourite-list",
    name: "Your favourite list",
    component: FavouriteList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
