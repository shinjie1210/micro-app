import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({
    mode
}) => {
    const env = loadEnv(mode, __dirname)
    console.log('当前环境', env);
    return {
        base: '/base-app/',
        plugins: [vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => /^micro-app/.test(tag)
                }
            }
        })]
    }
})