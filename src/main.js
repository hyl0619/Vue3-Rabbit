import '@/styles/common.scss'

import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'

const app = createApp(App)
app.use(lazyPlugin)
app.use(componentPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
