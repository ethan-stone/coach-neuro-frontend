import { createApp } from "vue";
import { createStore } from "vuex";
import { authModule } from "./modules/auth";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import AnalysesPage from "./pages/AnalysesPage.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import "./index.css";

const store = createStore({
  modules: {
    auth: authModule
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/analyses",
      component: AnalysesPage
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

app.use(store);
app.use(router);
app.use(VueClickAway);

app.mount("#app");
