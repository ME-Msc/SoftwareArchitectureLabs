import Vue from "vue";
import App from "./App.vue";
import VideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "bootstrap/dist/css/bootstrap.css";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VideoPlayer);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
