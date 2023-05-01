import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import NProgress from "nprogress";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history,
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});
export default router;
