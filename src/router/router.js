import Main from "@/views/Main"
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {
        path:'/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router