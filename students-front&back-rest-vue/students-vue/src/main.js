import Vue from "vue";
import App from "./App.vue";

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
