import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import AnalysesPage from "./pages/AnalysesPage.vue";
import AnalysisPage from "./pages/AnalysisPage.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/analyses",
      component: AnalysesPage
    },
    {
      path: "/analysis/:id",
      component: AnalysisPage
    },
    {
      path: "/signup",
      component: SignUpPage
    },
    {
      path: "/login",
      component: LoginPage
    }
  ]
});

const app = createApp(App);

app.use(router);
app.use(VueClickAway);

app.mount("#app");
