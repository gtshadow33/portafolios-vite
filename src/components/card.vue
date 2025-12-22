<template>
  <div class="repo-card">
    <h2 class="repo-title">{{ title }}</h2>
    <p class="repo-description">{{ description || 'Sin descripción' }}</p>
    <p class="repo-language">Lenguaje: {{ language || 'Desconocido' }}</p>
    <a :href="url" target="_blank" rel="noopener" class="repo-link">
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
.repo-card {
    width: 400px;
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.repo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.repo-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937; /* gris oscuro */
  margin-bottom: 0.5rem;
}

.repo-description {
  font-size: 1rem;
  color: #4b5563; /* gris medio */
  margin-bottom: 0.75rem;
  min-height: 40px; /* mantiene altura uniforme */
}

.repo-language {
  font-size: 0.875rem;
  color: #6b7280; /* gris más claro */
  margin-bottom: 1rem;
}

.repo-link {
  display: inline-block;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}

.repo-link:hover {
  background: #FF4500;
  transform: translateY(-2px);
}
a{
    text-decoration: none;
    background-color: #FFA07A;
    color: black;
    font-size: 1vw;
}
</style>
