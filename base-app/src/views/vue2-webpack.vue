<!-- vue2-webpack.vue -->
<template>
    <div>
        <h1>子应用</h1>
        <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/vue2-webpack`
     -->
        <micro-app name="vue2-webpack" url="http://localhost:4001/"
            baseroute="/base-app/vue2-webpack" @created="handleCreated"
            @beforemount="handleBeforemount" @mounted="handleMounted"
            @unmount="handleUnmount" @error="handleError"
            @datachange='handleDataChange'>
        </micro-app>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleCreated() {
                // console.log('子应用页面监测[vue2-webpack]被创建');
            },
            handleBeforemount() {
                // console.log('子应用页面监测[vue2-webpack]即将渲染');
            },
            handleMounted() {
                // console.log('子应用页面监测[vue2-webpack]已渲染');
            },
            handleUnmount() {
                // console.log('子应用页面监测[vue2-webpack]已卸载');
            },
            handleError() {
                // console.log('子应用页面监测[vue2-webpack]渲染出错');
            },
            handleDataChange(e) {
                console.log('来自子应用[vue2-webpack]的数据：', e.detail.data)
            }
        },
    };
</script>