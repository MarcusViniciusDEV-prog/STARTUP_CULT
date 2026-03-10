<template>
  <div class="login-container">
    <div class="login-card">
      <div class="brand">
        <img src="/logo_cult.png" alt="Logo" class="logo_cult" />
        <h2>Portal de Viagens</h2>
        <p>Entre para acessar sua conta</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            placeholder="exemplo@email.com"
          />
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            placeholder="••••••••"
          />
        </div>

        <button class="btn" type="submit">Entrar</button>

        <p class="muted">
          Ainda não tem conta?
          <router-link to="/cadastro">Cadastre-se</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
  if (email.value === 'marcos.moreira29@aluno.ce.gov.br' && password.value === '123456') {
    alert('Login realizado com sucesso!')
    router.push('/dashboard')
  } else {
    alert('E-mail ou senha incorretos.')
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(180deg, var(--moss-100) 0%, var(--white) 100%);
  padding: 16px;
}

.login-card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.logo_cult {
  width: 80px;
  height: 80px;
}

.brand h2 {
  color: var(--moss-600);
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.brand p {
  color: var(--muted);
  font-size: 14px;
}

.form-group {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  color: var(--moss-600);
  font-weight: 600;
  font-size: 14px;
}

input {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  font-size: 14px;
  outline: none;
  transition: all 0.2s;
}

input:focus {
  border-color: var(--moss-400);
  box-shadow: 0 0 0 2px rgba(157, 191, 138, 0.2);
}

.btn {
  background: var(--moss-400);
}

</style>
