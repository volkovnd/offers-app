export default {
  path: "/",
  name: "home",
  component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue"),
};
