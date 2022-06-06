//子应用静态资源路径替换
if (window.__MICRO_APP_ENVIRONMENT__) {
    __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
}
