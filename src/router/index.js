import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,
  routes: [
    {
      path: "/",
      name: "offers",
      component: () => import(/* webpackChunkName: "offers" */ "@/views/offers.vue"),
    },
    {
      path: "/offers/:id",
      name: "offer",
      component: () => import(/* webpackChunkName: "offer" */ "@/views/offer.vue"),
    },
  ],
});

export default router;
