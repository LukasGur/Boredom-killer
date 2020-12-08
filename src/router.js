import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ActivityGenerator from "@/views/ActivityGenerator.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activity-generator",
    component: ActivityGenerator
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
