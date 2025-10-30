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

      <div style="margin-top:14px; display:grid; grid-template-columns:repeat(4,1fr); gap:12px;">
        <div class="topic" v-for="topic in topics" :key="topic.key" style="cursor:pointer;">
          <div class="icon" :style="{background: topic.bg}">{{ topic.icon }}</div>
          <div style="display:flex; flex-direction:column;">
            <div style="font-weight:700; color:var(--moss-600)">{{ topic.title }}</div>
            <div style="font-size:13px; color:var(--muted)">{{ topic.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'
import Card from './Card.vue'
import { toRef } from 'vue'

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
  { key:'pousadas', title:'Pousadas', subtitle:'Acomodações com personalidade', icon:'🏨', bg:'linear-gradient(135deg,#f0f7ec,#e6f1dc)' },
  { key:'rest', title:'Restaurantes', subtitle:'Sabores locais e regionais', icon:'🍽️', bg:'linear-gradient(135deg,#fff7ec,#fff2dc)' },
  { key:'baln', title:'Balneários', subtitle:'Águas e relaxamento', icon:'🏖️', bg:'linear-gradient(135deg,#f0fff8,#e6fff0)' },
  { key:'pontos', title:'Pontos turísticos', subtitle:'Lugares históricos e naturais', icon:'📍', bg:'linear-gradient(135deg,#f7fff6,#eefaf0)' }
]
</script>