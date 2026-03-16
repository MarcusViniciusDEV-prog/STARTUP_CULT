import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Destinos from '@/views/Destinos.vue'
import Pousadas from '@/views/Pousadas.vue'
import Restaurantes from '@/views/Restaurantes.vue'
import Contato from '@/views/Contato.vue'
import MinhaConta from '@/views/MinhaConta.vue'
import LoginPage from '@/views/LoginPage.vue'
import LandingPage from '@/views/LandingPage.vue'

const routes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/destinos', name: 'destinos', component: Destinos },
  { path: '/pousadas', name: 'pousadas', component: Pousadas },
  { path: '/restaurantes', name: 'restaurantes', component: Restaurantes },
  { path: '/contato', name: 'contato', component: Contato },
  { path: '/minhaconta', name: 'minhaconta', component: MinhaConta },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
