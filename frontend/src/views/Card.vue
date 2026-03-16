<template>
  <div class="card">
    <img class="image" :src="place.image" :alt="place.name" />
    <div class="content">
      <div class="title">{{ place.name }}</div>
      <div class="desc">{{ place.desc }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({ place: Object })
</script>
