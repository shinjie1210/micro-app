<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    //子应用向基座应用发送数据--------------------------
    // dispatch只接受对象作为参数
    // window.microApp.dispatch({ type: '子应用home页面mounted时发送的数据' })

    //子应用发送全局数据--------------------------------
    // setGlobalData只接受对象作为参数
    // window.microApp.setGlobalData({type: '子应用发送的全局数据'})

    // 子应用直接获取全局数据--------------------------------
    // const globalData = window.microApp.getGlobalData() // 返回全局数据
    // console.log('子应用直接获取全局数据', globalData);


    //子应用接收全局数据---------------------------------------------------------------
    /**
    * 绑定监听函数
    * dataListener: 绑定函数
    * autoTrigger: 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
    */
  //  function dataListener(data) {
  //  console.log('子应用绑定监听函数获取的全局数据', data)
  //  }
    // window.microApp.addGlobalDataListener(dataListener,true)

    // 解绑监听函数
    // window.microApp.removeGlobalDataListener(dataListener)

    // 清空当前子应用绑定的所有全局数据监听函数
    // window.microApp.clearGlobalDataListener()

  },
};
</script>
