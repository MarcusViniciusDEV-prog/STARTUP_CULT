<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <div class="logo"><img src="./assets/logo.png" alt="" class="logo_cult"></div>
        <div>
          <h1>Cultura Viva</h1>
          <p>Turismo</p>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/" class="nav-link">🏠 Início</router-link>
        ""<router-link to="/destinos" class="nav-link">🌎 Destinos</router-link>
        <router-link to="/pousadas" class="nav-link">🏡 Pousadas</router-link>
        <router-link to="/restaurantes" class="nav-link">🍽️ Restaurantes</router-link>
        <router-link to="/contato" class="nav-link">📞 Contato</router-link>
      </nav>

      <div class="profile">
        <div class="avatar">MV</div>
        <div>
          <p><strong>Marcus Vinicius</strong></p>
          <small>Admin</small>
        </div>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <main class="main">
      <router-view />
        <div class="topbar">
          <div class="brand">
            <div class="logo">CV</div>
            <div>
              <h1 style="font-size:16px; margin:0">Cultura Viva</h1>
              <div style="font-size:12px; color:var(--muted)">Dashboard</div>
            </div>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <button class="btn ghost">Minhas viagens</button>
            <div style="width:44px; height:44px; border-radius:10px; background: linear-gradient(135deg,#dfead8,var(--moss-400)); display:flex; align-items:center; justify-content:center;">MV</div>
          </div>
        </div>

        <div class="panel hero">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
            <div>
              <div class="title">Bem-vindo, Mariana</div>
              <div class="subtitle">Encontre destinos que combinam com você</div>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <button class="btn ghost">Reservas</button>
              <button class="btn">Nova busca</button>
            </div>
          </div>

          <div class="search-wrapper">
            <SearchBar v-model="query" @search="handleSearch" />
          </div>
        </div>

        <Dashboard
          :query="query"
          :places="places"
          @open-place="openPlace"
        />

        <div class="footer-note">© {{ new Date().getFullYear() }} Cultura Viva · Design minimalista e confiável</div>
      
  
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import Dashboard from './Dashboard.vue'
import SearchBar from './SearchBar.vue'

const query = ref('')
const places = ref([
  { id:1, name:'Jericoacoara', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop', desc:'Dunas, lagoas e pôr-do-sol inesquecível.' },
  { id:2, name:'Ouro Preto', image:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop', desc:'Centro histórico e charme barroco.' },
  { id:3, name:'Chapada Diamantina', image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop', desc:'Cachoeiras e trilhas imperdíveis.' },
  { id:4, name:'Lençóis Maranhenses', image:'https://images.unsplash.com/photo-1508264165352-258a6f3a9f8b?q=80&w=1400&auto=format&fit=crop', desc:'Lagoas entre dunas brancas.' },
  { id:5, name:'Paraty', image:'https://images.unsplash.com/photo-1505765056921-6d4c44d6dd7d?q=80&w=1400&auto=format&fit=crop', desc:'Ilhas e centro histórico preservado.' },
  { id:6, name:'Bonito', image:'https://images.unsplash.com/photo-1518684079-4d5b73f6b8fa?q=80&w=1400&auto=format&fit=crop', desc:'Rios cristalinos e flutuação.' }
])

function handleSearch(q){
  query.value = q
}

function openPlace(place){
  alert(`Abrindo: ${place.name}`)
}


</script>
