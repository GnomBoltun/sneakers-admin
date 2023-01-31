/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'



// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App).use(CKEditor)


registerPlugins(app)
app.mount('#app')
