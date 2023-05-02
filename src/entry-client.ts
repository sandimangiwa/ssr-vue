import "../node_modules/nprogress/nprogress.css";
import "./assets/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";
import { createApp } from "./main";

const { app } = createApp();
app.mount("#app");
