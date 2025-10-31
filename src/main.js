import { createApp } from 'vue'
import App from './App.vue'
import './style.css'


import router from './router'

// SEO dinâmico: atualiza <title> e <meta name="description"> a cada navegação
router.afterEach((to) => {
	if (to.meta && to.meta.title) {
		document.title = to.meta.title
	}
	if (to.meta && to.meta.description) {
		let metaDesc = document.querySelector('meta[name="description"]')
		if (!metaDesc) {
			metaDesc = document.createElement('meta')
			metaDesc.setAttribute('name', 'description')
			document.head.appendChild(metaDesc)
		}
		metaDesc.setAttribute('content', to.meta.description)
	}
})

const app = createApp(App)
app.use(router)
app.mount('#app')
