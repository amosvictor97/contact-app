import { createWebHistory, createRouter } from "vue-router";


const routes =  [
  {
    path: "/",
    alias: "/contacts",
    name: "contacts",
    component: () => import("../components/ListContact.vue")
  },
  {
    path: "/contact/:id",
    name: "contact-details",
    component: () => import("../components/EditContact.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddContact")
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;