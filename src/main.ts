import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import './styles/index.css'
import 'highlight.js/styles/stackoverflow-dark.css'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/lib/common'

createApp(App)
.use(router)
.use(store)
.use(VueHighlightJS)
.mount('#app')
