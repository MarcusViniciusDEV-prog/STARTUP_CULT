import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/Dashboard.vue'
import Destinos from '@/Destinos.vue'
import Pousadas from '@/Pousadas.vue'
import Restaurantes from '@/Restaurantes.vue'
import Contato from '@/Contato.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/destinos', name: 'Destinos', component: Destinos },
  { path: '/pousadas', name: 'Pousadas', component: Pousadas },
  { path: '/restaurantes', name: 'Restaurantes', component: Restaurantes },
  { path: '/contato', name: 'Contato', component: Contato },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
