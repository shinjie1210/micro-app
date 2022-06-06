import './public-path'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
window.addEventListener('unmount', function(e) {
    console.log('子应用内自监测卸载',e);
})
//子应用微前端环境判断
console.log('微前端环境判断:', window.__MICRO_APP_ENVIRONMENT__);
//在子应用中获取应用的name值，即<micro-app>标签的name值
console.log('子应用name值:', window.__MICRO_APP_NAME__);
//子应用的静态资源前缀,webpack必须配置
console.log('__webpack_public_path__需要替换值:', window.__MICRO_APP_PUBLIC_PATH__);
//子应用基础路由,baseroute值
console.log('子应用基础路由:', window.__MICRO_APP_BASE_ROUTE__);

//子应用向基座应用传递数据
// dispatch只接受对象作为参数
window.microApp.dispatch({ type: '子应用发送的数据' })

