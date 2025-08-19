import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

import home from "./components/home.vue";
import login from "./components/Login.vue";
import register from "./components/Registration.vue";
import user from "./components/User.vue";
import roles from "./components/Role.vue";
import addrolepage from "./components/addRolePage.vue";
import aboutus from "./components/aboutUs.vue";
import help from "./components/Help.vue";
import vote from "./components/Vote.vue";
import results from "./components/Results.vue";
import schedule from "./components/Schedule.vue";
import goals from "./components/Goals.vue";
import rules from "./components/Rules.vue";
import standings from "./components/Standings.vue";
import Co2Erad from "./components/Co2Erad.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
  },
  {
    name: "login",
    path: "/login",
    component: login,
  },
  {
    name: "register",
    path: "/register",
    component: register,
  },
  {
    name: "Employees' Contacts",
    path: "/User",
    component: user,
  },
  {
    name: "Petitions",
    path: "/Roles",
    component: roles,
  },
  {
    name: "Sign Your Petition",
    path: "/addRolePage",
    component: addrolepage,
  },
  {
    name: "About Us",
    path: "/aboutUs",
    component: aboutus,
  },
  {
    name: "Help",
    path: "/Help",
    component: help,
  },
  {
    name: "Vote",
    path: "/Vote",
    component: vote,
  },
  {
    name: "Results",
    path: "/Results",
    component: results,
  },
  {
    name: "Schedule",
    path: "/Schedule",
    component: schedule,
  },
  {
    name: "Rules",
    path: "/Rules",
    component: rules,
  },
  {
    name: "Goals",
    path: "/Goals",
    component: goals,
  },
  {
    name: "Standings",
    path: "/Standings",
    component: standings,
  },
  {
    name: "CO2 Eradication",
    path: "/Co2Erad",
    component: Co2Erad,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
createApp(App).use(router).mount("#app");