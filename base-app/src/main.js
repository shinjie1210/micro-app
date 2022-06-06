import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store' // index.js
import microApp from '@micro-zoe/micro-app'
const app = createApp(App)
app.use(router).use(store).mount('#app')


microApp.start({
    //基座应用的子应用挂载生命周期检测-----------------------------------------------------
    // lifeCycles: {
    //     created(e) {
    //         console.log(`主应用内通用检测应用:【${e.detail.name}】`,'created')
    //     },
    //     beforemount(e) {
    //         console.log(`主应用内通用检测应用:【${e.detail.name}】`, 'beforemount')
    //     },
    //     mounted(e) {
    //         console.log(`主应用内通用检测应用:【${e.detail.name}】`, 'mounted')
    //     },
    //     unmount(e) {
    //         console.log(`主应用内通用检测应用:【${e.detail.name}】`, 'unmount')
    //     },
    //     error(e) {
    //         console.log(`主应用内通用检测应用:【${e.detail.name}】`, 'error')
    //     }
    // }
})

//基座路由判断,必须在microApp.start()后执行-------------------------------------------------------
// if (window.__MICRO_APP_BASE_APPLICATION__) {
//     console.log('我是基座应用')
// }

//基座应用发送全局数据-----------------------------------------------------------------------
// setGlobalData只接受对象作为参数
// microApp.setGlobalData({ type: '基座应用发送的全局数据' })

//基座应用接收全局数据---------------------------------------------------------------
/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
 */
// function dataListener(data) {
//     console.log('基座应用绑定监听函数获取的全局数据', data)
// }
// microApp.addGlobalDataListener(dataListener, true)

// 解绑监听函数
// microApp.removeGlobalDataListener(dataListener)

// 清空基座应用绑定的所有全局数据监听函数
// microApp.clearGlobalDataListener()

//基座应用接收全局数据----------------------------------------------------------------
// 直接获取数据
// const globalData = microApp.getGlobalData() // 返回全局数据
// console.log('直接获取全局数据', globalData);