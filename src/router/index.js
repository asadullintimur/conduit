import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomeView")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
