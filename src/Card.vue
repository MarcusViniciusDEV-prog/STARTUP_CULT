<template>
  <article class="card panel" @click="open" style="cursor:pointer; display:flex; flex-direction:column;">
    <img :src="item.image" :alt="item.name" class="image" />
    <div class="content">
      <div class="title">{{ item.name }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="meta">
        <div style="font-size:13px; color:var(--muted)">Duração média: 2-4 dias</div>
        <button class="btn" @click.stop="open">Abrir</button>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required:true }
})
const emit = defineEmits(['open'])
function open(){
  emit('open', props.item)
}
</script>