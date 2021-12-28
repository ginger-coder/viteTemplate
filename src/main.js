import { createApp } from 'vue';
import Router from 'router';
import App from './App.vue';
import '@/assets/css/reset.css';

const app = createApp(App);

app.use(Router);


app.mount('#app')
