import "@/assets/style.css";
import "@/plugins/vee-validate/rules.js";
import "@/plugins/vee-validate/messages.js";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/i18n";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount("#app");
