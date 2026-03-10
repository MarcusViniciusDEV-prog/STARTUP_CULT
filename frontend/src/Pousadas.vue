<template>
  <section class="pagina-pousadas">
    <!-- Cabeçalho -->
    <div class="topo-da-pagina">
      <h2 class="titulo-principal">Pousadas</h2>
      <p class="texto-introducao">
        Encontre pousadas aconchegantes para descansar e aproveitar a natureza.
      </p>
    </div>

    <!-- Área de busca -->
    <div class="area-de-busca">
      <SearchBar @search="filtrarPousadas" />
    </div>

    <!-- Lista de pousadas -->
    <div class="lista-de-pousadas">
      <Card
        v-for="pousada in pousadasFiltradas"
        :key="pousada.id"
        :place="pousada"
        @click="abrirDetalhes(pousada)"
      />
    </div>

    <!-- Mensagem quando não há resultados -->
    <div v-if="pousadasFiltradas.length === 0" class="mensagem-sem-resultados">
      <p>Nenhuma pousada encontrada para "<strong>{{ busca }}</strong>".</p>
    </div>

    <!-- Janela de detalhes -->
    <div v-if="pousadaSelecionada" class="fundo-janela" @click.self="fecharDetalhes">
      <div class="caixa-de-detalhes">
        <img :src="pousadaSelecionada.image" class="imagem-detalhe" />
        <div class="conteudo-detalhe">
          <h3>{{ pousadaSelecionada.name }}</h3>
          <p class="texto-descricao">{{ pousadaSelecionada.desc }}</p>
          <p class="texto-informacao">Localização: {{ pousadaSelecionada.local }}</p>
          <p class="texto-informacao">Avaliações: {{ pousadaSelecionada.reviews }}</p>
          <button class="botao-fechar" @click="fecharDetalhes">Fechar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchBar from './SearchBar.vue'
import Card from './Card.vue'

// Lista de pousadas (dados simulados)
const pousadas = ref([
  {
    id: 1,
    name: 'Pousada Encanto Verde',
    desc: 'Aconchego e natureza em um refúgio ideal para descansar com estilo.',
    local: 'Serra Azul, MG',
    reviews: '4.8 ★ (245 avaliações)',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Pousada do Sol',
    desc: 'Desfrute do pôr do sol mais bonito da região com vista para o mar.',
    local: 'Praia do Norte, RN',
    reviews: '4.6 ★ (312 avaliações)',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Pousada das Flores',
    desc: 'Charmosa pousada com café da manhã artesanal e jardim interno.',
    local: 'Centro Histórico, BA',
    reviews: '4.9 ★ (128 avaliações)',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Pousada Mirante do Vale',
    desc: 'Vista panorâmica e suítes equipadas para casais e famílias.',
    local: 'Vale Verde, RS',
    reviews: '4.7 ★ (178 avaliações)',
    image:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60',
  },
])

// Campos reativos
const busca = ref('')
const pousadaSelecionada = ref(null)

// Funções
function filtrarPousadas(texto) {
  busca.value = texto
}

function abrirDetalhes(pousada) {
  pousadaSelecionada.value = pousada
}

function fecharDetalhes() {
  pousadaSelecionada.value = null
}

// Lista filtrada automaticamente
const pousadasFiltradas = computed(() =>
  !busca.value
    ? pousadas.value
    : pousadas.value.filter(
        (p) =>
          p.name.toLowerCase().includes(busca.value.toLowerCase()) ||
          p.desc.toLowerCase().includes(busca.value.toLowerCase())
      )
)
</script>

<style scoped>
.pagina-pousadas {
  background: var(--white);
  border-radius: 14px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.topo-da-pagina {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.titulo-principal {
  color: var(--moss-600);
  font-weight: 700;
  font-size: 22px;
}

.texto-introducao {
  color: var(--muted);
  font-size: 15px;
}

.area-de-busca {
  margin: 16px 0;
}

.lista-de-pousadas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.mensagem-sem-resultados {
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  margin-top: 20px;
}

.fundo-janela {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  backdrop-filter: blur(4px);
}

.caixa-de-detalhes {
  background: var(--white);
  border-radius: 16px;
  max-width: 600px;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);
  animation: aparecer 0.25s ease;
}

.imagem-detalhe {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.conteudo-detalhe {
  padding: 20px;
}

.conteudo-detalhe h3 {
  margin: 0 0 8px 0;
  color: var(--moss-600);
  font-size: 20px;
  font-weight: 700;
}

.texto-descricao {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 10px;
}

.texto-informacao {
  font-size: 13px;
  color: var(--moss-600);
  margin-bottom: 6px;
}

.botao-fechar {
  background: var(--moss-400);
  color: white;
  border: none;
  padding: 9px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
}

.botao-fechar:hover {
  background: var(--moss-600);
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
