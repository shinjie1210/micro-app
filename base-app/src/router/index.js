import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Vue2Webpack from '../views/vue2-webpack.vue'

const routes = [{
    path: '/ ',
    component: () => import('../views/main.vue')
}, {
    path: '/foo',
    component: () => import('../views/foo.vue')
}, {
    path: '/bar',
    component: () => import('../views/bar.vue')
}, {
    // 👇 非严格匹配，/vue2-webpack/* 都指向 MyPage 页面
    path: '/vue2-webpack/:page*', // vue-router@4.x path的写法为：'/vue2-webpack/:page*'
    name: 'vue2-webpack',
    component: Vue2Webpack,
}, ]

const router = createRouter({
    // 设置主应用基础路由为main-vite(用于后续部署)，则子应用基础路由(baseroute)为/main-vite/xxx
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
console.log('import.meta.env.BASE_URL',
    import.meta.env.BASE_URL);
export default router