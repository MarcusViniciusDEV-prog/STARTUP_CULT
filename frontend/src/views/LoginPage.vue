<template>
  <div class="login-wrapper">
    <div class="login-container">
      <!-- Left Side - Form -->
      <div class="form-side">
        <div class="form-content">
          <div class="brand">
             <span class="logo-icon">🌿</span>
             <h2>Cultura Viva</h2>
          </div>
          
          <div class="welcome-text">
            <h3>Bem-vindo de volta!</h3>
            <p>Conecte-se para explorar novos destinos.</p>
          </div>

          <form @submit.prevent="handleLogin" class="auth-form">
            <div class="input-group">
              <label>E-mail</label>
              <input type="email" v-model="email" placeholder="seu@email.com" required>
            </div>
            
            <div class="input-group">
              <label>Senha</label>
              <input type="password" v-model="password" placeholder="••••••••" required>
            </div>

            <div class="options">
              <label class="remember">
                <input type="checkbox"> Lembrar de mim
              </label>
              <a href="#" class="forgot">Esqueceu a senha?</a>
            </div>

            <button type="submit" class="btn-submit">Entrar</button>
            <button type="button" class="btn-google">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" alt="">
              Entrar com Google
            </button>
          </form>

          <p class="signup-prompt">
            Não tem uma conta? <a href="#">Cadastre-se grátis</a>
          </p>
        </div>
      </div>

      <!-- Right Side - Image -->
      <div class="image-side">
        <div class="image-overlay">
          <div class="quote">
            <p>"A melhor forma de conhecer um povo é vivendo sua cultura de perto."</p>
            <span>— Expedição Jalapão 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
    // Simulating login
    if (email.value && password.value) {
        router.push('/dashboard');
    }
};
</script>

<style scoped>
.login-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.login-container {
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
}

.form-side {
  flex: 1;
  background-color: var(--mint-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.form-content {
  width: 100%;
  max-width: 400px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary-green);
  margin-bottom: 40px;
}

.brand h2 { font-weight: 800; }
.logo-icon { font-size: 2rem; }

.welcome-text h3 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: var(--dark-green);
}

.welcome-text p {
  color: var(--text-muted);
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-main);
}

.input-group input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  outline: none;
  font-size: 1rem;
}

.input-group input:focus {
  border-color: var(--primary-green);
  box-shadow: 0 0 0 3px rgba(106, 154, 64, 0.1);
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 0.9rem;
}

.forgot {
  color: var(--primary-green);
  font-weight: 600;
}

.btn-submit {
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  padding: 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 15px;
}

.btn-google {
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
}

.signup-prompt {
  text-align: center;
  margin-top: 30px;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.signup-prompt a {
  color: var(--primary-green);
  font-weight: 700;
}

.image-side {
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1596324263720-3306ce68b446?auto=format&fit=crop&q=80&w=1200');
  background-size: cover;
  background-position: center;
  display: none;
}

@media (min-width: 992px) {
  .image-side { display: block; }
}

.image-overlay {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
  display: flex;
  align-items: flex-end;
  padding: 60px;
}

.quote {
  color: white;
  max-width: 400px;
}

.quote p {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 10px;
}

.quote span {
  font-weight: 300;
  opacity: 0.8;
}
</style>
