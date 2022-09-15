import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import i18nPlugin from "./plugins/i18n";
const app = createApp(App);
app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});

app.use(router);

app.mount("#app");
