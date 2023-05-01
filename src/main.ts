import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
import router from "./router";
export function createApp() {
  const app = createSSRApp(App);
  app.use(router);
  const store = createPinia();
  app.use(store);
  return { app, store, router };
}
