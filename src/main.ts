import { createApp } from 'vue';
import App from './App.vue';

// for state management
import { createPinia } from 'pinia';

// for styles
import './styles/style.pcss';

createApp(App).use(createPinia()).mount('#app');
