import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

Vue.filter("formatSize", function(value) {
  return (value / 1024).toFixed(2) + " KB";
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
