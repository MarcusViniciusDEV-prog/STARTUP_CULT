<template>
  <section class="panel">
    <div class="hero">
      <h2 class="title">Destinos Culturais</h2>
      <p class="subtitle">Explore lugares incríveis e cheios de história 🌿</p>
    </div>

    <div class="search-wrapper">
      <SearchBar @search="filterDestinos" />
    </div>

    <div class="grid">
      <Card v-for="d in filteredDestinos" :key="d.id" :place="d" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchBar from './SearchBar.vue'
import Card from './Card.vue'

// Lista de destinos
const destinos = ref([
  {
    id: 1,
    name: 'Ouro Preto, MG',
    desc: 'Cidade histórica com arquitetura colonial e igrejas barrocas.',
    image: 'https://images.unsplash.com/photo-1569173679299-c8e6a03bba3e'
  },
  {
    id: 2,
    name: 'Paraty, RJ',
    desc: 'Beleza natural e herança cultural no litoral fluminense.',
    image: 'https://images.unsplash.com/photo-1600785320694-73e60ff5e9da'
  },
  {
    id: 3,
    name: 'Lençóis Maranhenses, MA',
    desc: 'Dunas brancas e lagoas cristalinas no nordeste brasileiro.',
    image: 'https://images.unsplash.com/photo-1615822919630-f3c6d8f9b61c'
  }
])

const query = ref('')

function filterDestinos(text) {
  query.value = text
}

const filteredDestinos = computed(() =>
  !query.value
    ? destinos.value
    : destinos.value.filter(d =>
        d.name.toLowerCase().includes(query.value.toLowerCase()) ||
        d.desc.toLowerCase().includes(query.value.toLowerCase())
      )
)
</script>
