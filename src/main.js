import { createApp } from 'vue';
import './assets/main.css';
import components from '@/components/UI';
import router from '@/router/router';
import store from '@/store';
import App from '@/App.vue';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(router)
  .use(store)
  .mount('#app');
