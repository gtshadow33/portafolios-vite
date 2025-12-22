<template>
  <div class="repo-card border p-4 rounded shadow mb-4">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p class="text-gray-700">{{ description || 'Sin descripción' }}</p>
    <p class="text-sm text-gray-500">Lenguaje: {{ language || 'Desconocido' }}</p>
    <a :href="url" target="_blank" rel="noopener" class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Ir al proyecto
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  language: String,
  url: String
})
</script>

<style scoped>
/* estilos opcionales */
</style>
