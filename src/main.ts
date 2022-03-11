/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Oruga UI
import { Autocomplete, Sidebar } from "@oruga-ui/oruga-next"; // tree-shaking
import "@oruga-ui/oruga-next/dist/oruga.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Autocomplete)
  .use(Sidebar)
  .mount("#app");
