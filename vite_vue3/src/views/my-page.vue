<!-- my-page.vue -->
<template>
    <div>
        <h1>子应用</h1>
        <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
        <micro-app name="my-page" url="http://localhost:4001/"
            baseroute="/base-app/my-page" @created="handleCreated"
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
                // console.log('子应用页面监测[my-page]被创建');
            },
            handleBeforemount() {
                // console.log('子应用页面监测[my-page]即将渲染');
            },
            handleMounted() {
                // console.log('子应用页面监测[my-page]已渲染');
            },
            handleUnmount() {
                // console.log('子应用页面监测[my-page]已卸载');
            },
            handleError() {
                // console.log('子应用页面监测[my-page]渲染出错');
            },
            handleDataChange(e) {
                console.log('来自子应用[my-page]的数据：', e.detail.data)
            }
        },
    };
</script>