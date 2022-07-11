import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/HomeView"),
        meta: {
            title: `Home`
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/RegisterView"),
        meta: {
            title: `Sign up`
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginView"),
        meta: {
            title: `Sign in`
        }
    },
    {
        path: "/article/:slug",
        name: "article.show",
        component: () => import("@/views/ArticleView"),
        props: true,
        meta: {
            title: route => route.params.slug
        }
    },
    {
        path: "/profile/:username",
        name: "profile",
        component: () => import("@/views/ProfileView"),
        props: true,
        meta: {
            title: route => route.params.username
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    let title = to.meta.title;
    document.title = (typeof title === 'function' ? title(to) : title) + ' - Conduit';
})

export default router
