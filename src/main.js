import Vue from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import WebFontsPlugin from "@/plugins/web-fonts";
import GlobalComponentsPlugin from "@/plugins/global-components";

Vue.config.productionTip = false;

Vue.use(WebFontsPlugin);
Vue.use(GlobalComponentsPlugin);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
