import layout from '../layout/index.vue'
import board from '../pages/board/index.vue'
import preview from '../pages/preview/index.vue'
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/',
        redirect: '/projectBase',
        component: layout,
        children: [{
            path: '/projectBase',
            name: '伟立看板设计器',
            component: board
        }]
    },
    {
        path: '/preview',
        component: preview,
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})