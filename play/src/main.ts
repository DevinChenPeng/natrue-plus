import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import natruePlus from '@natrue-plus/components';
import '@natrue-plus/theme-chalk/index.scss';
const app = createApp(App);
app.use(natruePlus);
app.mount('#app');
