<template>
  <div class="landing-page">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container nav-content">
        <div class="logo">
          <span class="logo-icon">🌿</span>
          <span class="logo-text">Cultura Viva</span>
        </div>
        <ul class="nav-links">
          <li><a href="#">Destinos</a></li>
          <li><a href="#">Experiências</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><router-link to="/login" class="login-link">Entrar</router-link></li>
          <li><router-link to="/login" class="btn-cta">Começar Agora</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>Descubra o Brasil <br>que você ainda não conhece</h1>
        <p>Turismo de base comunitária, sustentável e autêntico.</p>
        
        <div class="search-bar">
          <div class="search-input">
            <label>Onde você quer ir?</label>
            <input type="text" placeholder="Ex: Jalapão, Amazônia...">
          </div>
          <div class="search-input">
            <label>Quando?</label>
            <input type="text" placeholder="Selecione a data">
          </div>
          <button class="btn-search">Buscar</button>
        </div>
      </div>
    </header>

    <!-- Featured Section -->
    <section class="featured container">
      <div class="section-header">
        <h2>Experiências em Destaque</h2>
        <a href="#" class="view-all">Ver tudo →</a>
      </div>
      <div class="destinations-grid">
        <div v-for="i in 3" :key="i" class="dest-card">
          <img :src="`https://picsum.photos/seed/${i+10}/400/300`" alt="Destino">
          <div class="dest-info">
            <h3>Comunidade Ribeirinha</h3>
            <p>Amazonas, Brasil</p>
            <div class="dest-footer">
              <span class="price">R$ 450/dia</span>
              <span class="rating">⭐ 4.9</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>Cultura Viva</h3>
          <p>Conectando viajantes a experiências autênticas e sustentáveis em comunidades locais.</p>
        </div>
        <div class="footer-col">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Experiências</a></li>
            <li><a href="#">Mapa do Site</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Cancelamento</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>Receba novidades e promoções.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Seu e-mail">
            <button>Enviar</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>&copy; 2023 Cultura Viva Turismo. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 100;
  color: white;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.btn-cta {
  background-color: var(--white);
  color: var(--primary-green);
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
}

.hero {
  position: relative;
  height: 90vh;
  background-image: url('https://images.unsplash.com/photo-1518151820465-2a316223da35?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.search-bar {
  background: white;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  gap: 20px;
  max-width: 800px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.search-input {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.search-input label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 5px;
}

.search-input input {
  border: none;
  outline: none;
  font-size: 1rem;
}

.btn-search {
  background-color: var(--primary-green);
  color: white;
  padding: 0 30px;
  border-radius: 8px;
  font-weight: 600;
}

.featured {
  padding: 80px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.dest-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.dest-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.dest-info {
  padding: 20px;
}

.dest-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.price {
  font-weight: 700;
  color: var(--primary-green);
}

.footer {
  background-color: #1a1a1a;
  color: #f0f0f0;
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 60px;
}

.footer-col h3, .footer-col h4 {
  color: white;
  margin-bottom: 25px;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.newsletter-form button {
  background: var(--primary-green);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.footer-bottom {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 0.9rem;
  color: #888;
}
</style>
