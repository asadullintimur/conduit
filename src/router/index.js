import {createRouter, createWebHistory} from 'vue-router'

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
    },
    {
        path: "/article/:slug",
        name: "article.show",
        component: () => import("@/views/ArticleView"),
        props: true
    },
    {
        path: "/profile/:username",
        name: "profile",
        component: () => import("@/views/ProfileView"),
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
