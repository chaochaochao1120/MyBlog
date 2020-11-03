import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // -------------------------------首页------------------------------------------
        {
            path: "/",
            name: "Home",
            component: () => import("../views/Home")
        },
        // -------------------------------博客页----------------------------------------
        {
            path: "/blog/:id",
            name: "Blog",
            component: () => import("../views/Blog")
        },
        // -------------------------------留言页----------------------------------------
        {
            path: "/message",
            name: "Message",
            component: () => import("../views/Message")
        },
        // -------------------------------日记页----------------------------------------
        {
            path: "/diary",
            name: "Diary",
            component: () => import("../views/Diary")
        },
        // -------------------------------关于页----------------------------------------
        {
            path: "/about",
            name: "About",
            component: () => import("../views/About")
        },
        // -------------------------------友链页----------------------------------------
        {
            path: "/link",
            name: "Link",
            component: () => import("../views/Link")
        },
    ]
})

export default router
