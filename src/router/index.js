import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store"
import {ACCESS, SITE_NAME} from "@/services/constants";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/HomeView"),
        meta: {
            title: `Home`,
            access: ACCESS.ALL
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/RegisterView"),
        meta: {
            title: `Sign up`,
            access: ACCESS.GUEST
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginView"),
        meta: {
            title: `Sign in`,
            access: ACCESS.GUEST

        }
    },
    {
        path: "/article/:slug",
        name: "article.show",
        component: () => import("@/views/ArticleView"),
        props: true,
        meta: {
            title: route => route.params.slug,
            access: ACCESS.ALL
        }
    },
    {
        path: "/profile/:username",
        name: "profile",
        component: () => import("@/views/ProfileView"),
        props: true,
        meta: {
            title: route => route.params.username,
            access: ACCESS.ALL
        }
    },
    {
        path: "/settings",
        name: "settings",
        component: () => import("@/views/SettingsView"),
        meta: {
            title: "Settings",
            access: ACCESS.USER
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//checks if the user has access to the page
router.beforeEach(async (to, from) => {
    store.dispatch("auth/check")

    let isAuthenticated = store.state.auth.isAuthenticated,
        routeAccess = to.meta.access;

    if (
        (isAuthenticated && (routeAccess === ACCESS.GUEST)) ||
        (!isAuthenticated && (routeAccess === ACCESS.USER))
    ) {
        return {path: from.path}
    }
})

//set page title
router.beforeEach((to, from) => {
    let title = to.meta.title;
    document.title = (typeof title === 'function' ? title(to) : title) + ` - ${SITE_NAME}`;
})

export default router
