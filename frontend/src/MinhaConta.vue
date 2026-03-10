<template>
  <section class="panel dashboard">
    <div class="hero">
      <h2 class="title">Minha Conta</h2>
      <p class="subtitle">Gerencie suas informações e acompanhe seus dados pessoais.</p>
    </div>

    <!-- informações da conta -->
    <div class="profile-card">
      <div class="avatar">MV</div>
      <div class="info">
        <h3>Marcus Vinicius</h3>
        <p class="email">marcos.moreira29@aluno.ce.gov.br</p>
        <p><strong>Localização:</strong> Massapê - CE</p>
        <p><strong>Membro desde:</strong> Janeiro de 2023</p>

        <div class="actions">
          <button class="btn">Editar Perfil</button>
          <button class="btn ghost">Deslogar</button>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat">
        <h4>Favoritos</h4>
        <p class="number">12</p>
        <span class="label">Locais salvos</span>
      </div>
      <div class="stat">
        <h4>Avaliações</h4>
        <p class="number">8</p>
        <span class="label">Comentários feitos</span>
      </div>
      <div class="stat">
        <h4>Reservas</h4>
        <p class="number">5</p>
        <span class="label">Hospedagens confirmadas</span>
      </div>
      <div class="stat">
        <h4>Visitas</h4>
        <p class="number">23</p>
        <span class="label">Locais explorados</span>
      </div>
    </div>

    <!--Atividades do usuário -->
    <div class="panel history">
      <h3>Últimas atividades</h3>
      <ul>
        <li> Você visualizou “Pousada do Sol”</li>
        <li> Avaliou “Restaurante do Mar” com 5 estrelas</li>
        <li> Adicionou “Gramado, RS” aos favoritos</li>
        <li> Fez check-in em “Jericoacoara, CE”</li>
      </ul>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Perfil */
.profile-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background: var(--white);
  flex-wrap: wrap;
}

.profile-card .avatar {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.profile-card .info h3 {
  margin: 0;
  color: var(--moss-600);
  font-size: 20px;
}

.profile-card .info p {
  margin: 4px 0;
  color: var(--muted);
  font-size: 14px;
}

.profile-card .email {
  color: var(--moss-400);
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

/* Estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 12px;
}

.stat {
  background: var(--white);
  border-radius: var(--radius);
  padding: 16px;
  box-shadow: var(--shadow);
  text-align: center;
}

.stat h4 {
  color: var(--moss-600);
  font-size: 15px;
  margin-bottom: 4px;
}

.stat .number {
  font-size: 26px;
  font-weight: 700;
  color: var(--moss-600);
}

.stat .label {
  font-size: 13px;
  color: var(--muted);
}

/* Histórico */
.history {
  background: var(--white);
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.history h3 {
  color: var(--moss-600);
  font-size: 16px;
  margin-bottom: 12px;
}

.history ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history li {
  background: var(--moss-100);
  padding: 10px 12px;
  border-radius: 10px;
  margin-bottom: 8px;
  color: var(--moss-600);
  font-size: 14px;
}
</style>
