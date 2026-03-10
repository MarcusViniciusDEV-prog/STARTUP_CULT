import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/Dashboard.vue'
import Destinos from '@/Destinos.vue'
import Pousadas from '@/Pousadas.vue'
import Restaurantes from '@/Restaurantes.vue'
import Contato from '@/Contato.vue'
import MinhaConta from '@/MinhaConta.vue'

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/destinos', name: 'destinos', component: Destinos },
  { path: '/pousadas', name: 'pousadas', component: Pousadas },
  { path: '/restaurantes', name: 'restaurantes', component: Restaurantes },
  { path: '/contato', name: 'contato', component: Contato },
  { path: '/minhaconta', name: 'minhaconta', component: MinhaConta }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
