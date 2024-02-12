import { createApp } from "vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Chart from "primevue/chart";


import 'primeflex/primeflex.css';
import './assets/scss/general.scss';
import './assets/scss/variables.scss';


import "./style.css";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(Chart)
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount("#app");
