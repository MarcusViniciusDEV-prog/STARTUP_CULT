<template>
  <section style="display:flex; flex-direction:column; gap:18px;">
    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
        <div>
          <h3 style="margin:0; color:var(--moss-600); font-size:18px; font-weight:700;">Recomendações</h3>
          <div style="font-size:13px; color:var(--muted); margin-top:6px;">Baseado nas suas últimas buscas e preferências</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn ghost">Filtrar</button>
          <button class="btn">Ver todas</button>
        </div>
      </div>

      <div style="margin-top:14px;">
        <div class="grid">
          <Card v-for="p in filteredPlaces" :key="p.id" :item="p" @open="open(p)" />
        </div>
      </div>
    </div>

    <div class="panel">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
        <div>
          <h3 style="margin:0; color:var(--moss-600); font-size:18px; font-weight:700;">Tópicos</h3>
          <div style="font-size:13px; color:var(--muted); margin-top:6px;">Explore por categorias</div>
        </div>
      </div>

      <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:12px;">
        <div class="topic" v-for="topic in topics" :key="topic.key" style="cursor:pointer;">
          <div class="icon" :style="{background: topic.bg}">{{ topic.icon }}</div>
          <div style="display:flex; flex-direction:column;">
            <div style="font-weight:700; color:var(--moss-600)">{{ topic.title }}</div>
            <div style="font-size:13px; color:var(--muted)">{{ topic.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <h3 style="margin:0; color:var(--moss-600); font-size:18px; font-weight:700;">Destaques do mês</h3>
      <div style="font-size:13px; color:var(--muted); margin-top:6px;">Lugares que estão em alta entre os viajantes</div>

      <div style="margin-top:16px; display:grid; grid-template-columns:repeat(auto-fill, minmax(260px,1fr)); gap:14px;">
        <div v-for="d in destaques" :key="d.id" class="highlight-card">
          <img :src="d.image" style="width:100%; height:160px; object-fit:cover; border-radius:10px;">
          <div style="margin-top:8px; font-weight:700; color:var(--moss-600)">{{ d.name }}</div>
          <div style="font-size:13px; color:var(--muted)">{{ d.desc }}</div>
        </div>
      </div>
    </div>

    <div class="panel">
      <h3 style="margin:0; color:var(--moss-600); font-size:18px; font-weight:700;">Avaliações recentes</h3>
      <div style="font-size:13px; color:var(--muted); margin-top:6px;">O que outros viajantes estão dizendo</div>

      <div style="margin-top:14px; display:flex; flex-direction:column; gap:10px;">
        <div v-for="r in reviews" :key="r.id" style="background:var(--gray-50); padding:12px; border-radius:8px;">
          <div style="font-weight:600; color:var(--moss-600)">{{ r.user }}</div>
          <div style="font-size:13px; color:var(--muted); margin-top:4px;">“{{ r.comment }}”</div>
          <div style="font-size:12px; color:var(--moss-400); margin-top:4px;">⭐ {{ r.rating }} — {{ r.place }}</div>
        </div>
      </div>
    </div>

    <div class="panel" style="text-align:center;">
      <h3 style="margin:0; color:var(--moss-600); font-size:18px; font-weight:700;">Descubra no mapa</h3>
      <p style="font-size:14px; color:var(--muted); margin-top:6px;">
        Explore visualmente as pousadas e atrações próximas.
      </p>
      <button class="btn" style="margin-top:10px;">Abrir mapa interativo</button>
    </div>

  </section>
</template>

<script setup>
import { computed, toRef } from 'vue'
import Card from './Card.vue'

const props = defineProps({
  query: { type: String, default: '' },
  places: { type: Array, default: () => [] }
})
const emit = defineEmits(['open-place'])

const q = toRef(props, 'query')

const filteredPlaces = computed(() => {
  if (!q.value) return props.places
  const t = q.value.trim().toLowerCase()
  return props.places.filter(p => p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t))
})

function open(p){
  emit('open-place', p)
}

const topics = [
  { key:'pousadas', title:'Pousadas', subtitle:'Acomodações com personalidade', icon:'', bg:'linear-gradient(135deg,#f0f7ec,#e6f1dc)' },
  { key:'rest', title:'Restaurantes', subtitle:'Sabores locais e regionais', icon:'', bg:'linear-gradient(135deg,#fff7ec,#fff2dc)' },
  { key:'baln', title:'Balneários', subtitle:'Águas e relaxamento', icon:'', bg:'linear-gradient(135deg,#f0fff8,#e6fff0)' },
  { key:'pontos', title:'Pontos turísticos', subtitle:'Lugares históricos e naturais', icon:'', bg:'linear-gradient(135deg,#f7fff6,#eefaf0)' },
  { key:'trilhas', title:'Trilhas e Natureza', subtitle:'Aventuras ao ar livre', icon:'', bg:'linear-gradient(135deg,#e8f7ec,#dcf1e0)' },
  { key:'artesanato', title:'Artesanato local', subtitle:'Cultura e produtos da região', icon:'', bg:'linear-gradient(135deg,#fff8ef,#fff3e4)' }
]

const destaques = [
  { id:1, name:'Pousada do Lago Azul', desc:'Refúgio tranquilo com vista panorâmica.', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60' },
  { id:2, name:'Restaurante Sabor da Serra', desc:'Culinária regional premiada.', image:'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=60' },
  { id:3, name:'Balneário Água Viva', desc:'Piscinas naturais e cachoeiras próximas.', image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60' }
]

const reviews = [
  { id:1, user:'Camila R.', comment:'A vista da pousada era incrível e o café da manhã impecável!', rating:'5/5', place:'Pousada do Lago Azul' },
  { id:2, user:'João M.', comment:'Ambiente super acolhedor e atendimento nota 10.', rating:'4.8/5', place:'Pousada das Flores' },
  { id:3, user:'Ana P.', comment:'As trilhas próximas são perfeitas pra quem gosta de natureza.', rating:'4.9/5', place:'Serra Verde Trail' }
]
</script>
