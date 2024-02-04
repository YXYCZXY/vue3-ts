import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import piniaStore from './store';
import router from './router';
import 'uno.css';
import Idux from '@/config/idux';
// vue3 挂载
const app = createApp(App)
app.use(piniaStore);
app.use(router);
app.use(Idux);
app.mount('#app')
