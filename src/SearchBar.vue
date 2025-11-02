<template>
  <div class="search-row">
    <input
      class="search-input"
      type="text"
      v-model="text"
      placeholder="Pesquise destinos, pousadas ou restaurantes..."
      @input="emitSearch"
    />
    <button class="btn" @click="emitSearch">Buscar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const emit = defineEmits(['search'])
function emitSearch() {
  emit('search', text.value)
}
</script>
