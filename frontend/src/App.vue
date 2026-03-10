<template>
  <div class="app-layout">
    <!-- Sidebar de navegação -->
    <aside class="sidebar">
      <div class="brand">
        <img class="logo_cult" src="@/assets/logo.png" alt="Cultura Viva" />
        <div>
          <h1>Cultura Viva</h1>
          <p>Turismo e Cultura</p>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/">Início</router-link>
        <router-link to="/destinos">Destinos</router-link>
        <router-link to="/pousadas">Pousadas</router-link>
        <router-link to="/restaurantes">Restaurantes</router-link>
        <router-link to="/contato">Contato</router-link>
      </nav>

      <div class="profile">
        <div class="avatar">MV</div>
        <div>
          <p><strong>Marcus Vinícius</strong></p>
          <router-link to="/minhaconta"><small>Minha Conta</small> </router-link>
        </div>
      </div>
    </aside>

    <!-- Área principal -->
    <main class="main">
      <router-view />
      <p class="footer-note">© 2025 Cultura Viva — Todos os direitos reservados.</p>
    </main>
  </div>
</template>

<script setup>
</script>
