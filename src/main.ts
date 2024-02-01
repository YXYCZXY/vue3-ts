import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import piniaStore from './store';
import 'uno.css';
// vue3 挂载
const app = createApp(App)
app.use(piniaStore);

app.mount('#app')
