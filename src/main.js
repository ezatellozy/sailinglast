import App from "@/App.vue";
import "@/plugins";
import router from "@/router";
import store from "@/store";
import "@/style/main.scss";
import Vue from "vue";
import VueSocialSharing from "vue-social-sharing";
import i18n from "./i18n";
import BaseCard from "./components/ui/BaseCard.vue";
import SmallCard from "./components/ui/Card.vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

Vue.use(VueSocialSharing);

Vue.config.productionTip = false;
Vue.component("base-card", BaseCard);
Vue.component("small-card", SmallCard);
import "vue-select/dist/vue-select.css";

require("./assets/feather/iconfont.css");

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
