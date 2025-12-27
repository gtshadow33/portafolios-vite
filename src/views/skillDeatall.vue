<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()
const url = route.params.api;

const data = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('No se encontró información')
    data.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">
    <div class="card">

      <!-- Loading -->
      <div v-if="loading" class="loading">
        Cargando...
      </div>

      <!-- Error -->
      <div v-if="error" class="error">
        {{ error }}
      </div>

      <!-- Data -->
      <div v-if="data" class="content">
        <h1>{{ data.title }}</h1>

        <div v-if="data.thumbnail" class="image-wrapper">
          <img :src="data.thumbnail.source" alt="imagen" />
        </div>

        <p>{{ data.extract }}</p>

        <a :href="data.content_urls.desktop.page" target="_blank" class="btn">
          Ver en Wikipedia
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Card */
.card {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  padding: 30px;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.02);
}

/* Loading y Error */
.loading, .error {
  text-align: center;
  font-size: 1.2rem;
  padding: 40px 0;
}

.error {
  color: #e74c3c;
  font-weight: bold;
}

/* Contenido */
.content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.image-wrapper img:hover {
  transform: scale(1.05);
}

.content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  text-align: justify;
  margin-bottom: 25px;
}

/* Botón */
.btn {
  display: inline-block;
  text-decoration: none;
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  transition:  box-shadow 0.3s, transform 0.3s;
}

.btn:hover {
  background-color: #2980b9;
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
  transform: translateY(-3px);
}

/* Responsivo */
@media (max-width: 768px) {
  .card {
    padding: 20px;
  }

  .content h1 {
    font-size: 2rem;
  }

  .content p {
    font-size: 0.95rem;
  }
}
</style>
