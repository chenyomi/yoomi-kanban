import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import router from './router/index'
import theme from './assets/js/chart-theme.json'
import borderFn from 'yoomi-border';
import { createPinia } from 'pinia'

const app = createApp(App);
borderFn(app)
echarts.registerTheme('dark', theme)
app.use(Antd)
app.use(router)
app.use(createPinia())
app.mount('#app')

