import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Compra from "./pages/Compra.vue";


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/compra", component: Compra
    },
    
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
