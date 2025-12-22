<template>
  <div class="container">
    <h1 class="title">Repositorios</h1>

    <div v-if="loading" class="info">Cargando...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="loaded && repos.length === 0" class="info">No hay repositorios públicos</div>

    <div v-if="loaded" class="repos-grid">
      <RepoCard
        v-for="repo in repos"
        :key="repo.id"
        :title="repo.name"
        :description="repo.description"
        :language="repo.language"
        :url="repo.html_url"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGithubStore } from '../store/store.js'
import RepoCard from '../components/card.vue'

const githubStore = useGithubStore()
const { fetchRepos, repos, loaded, loading, error } = githubStore

onMounted(() => {
  fetchRepos()
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937; /* Gris oscuro */
}

.info {
  text-align: center;
  color: #4b5563; /* Gris medio */
  margin-bottom: 1rem;
}

.error {
  text-align: center;
  color: #dc2626; /* Rojo */
  font-weight: bold;
  margin-bottom: 1rem;
}

.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
