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
  padding: 0.6rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 6px 0;
}

.repo-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.repo-title {
  font-size: 2.3rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
  word-break: break-word;
  white-space: normal;
}

.repo-description {
  font-size: 1rem;
  color: #4b5563;
  margin: 0 0 4px 0;
  line-height: 1.4rem; /* mayor separación para legibilidad */
  overflow: visible;   /* dejar que el contenido se expanda */
  text-overflow: unset; 
  display: block;      /* no usar line-clamp */
}

.repo-language {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0 0 6px 0;
}

.repo-link {
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  background-color: #FFA07A;
  color: black;
  transition: background 0.3s, transform 0.2s;
}

.repo-link:hover {
  background: #FF4500;
  transform: translateY(-2px);
  color: white;
}

a {
  text-decoration: none;
}

/* Media query para móviles */
@media (max-width: 768px) {
  .repo-card {
    width: 290px;
    padding: 0.5rem 1rem;
  }

  .repo-title {
    font-size: 1.5rem;
  }

  .repo-description {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }

  .repo-link {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>



