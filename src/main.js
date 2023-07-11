import { createApp } from 'vue'
import App from './App.vue'
import VueObserveVisibilityPlugin from 'vue-observe-visibility'


const app = createApp(App).mount('#app')
app.use(VueObserveVisibilityPlugin)
