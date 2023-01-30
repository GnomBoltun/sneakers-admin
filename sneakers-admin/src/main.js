/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';



// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { CKEditor } from '@ckeditor/ckeditor5-vue';

const app = createApp(App).use(CKEditor).use(Vue3EasyDataTable);


registerPlugins(app)

app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
