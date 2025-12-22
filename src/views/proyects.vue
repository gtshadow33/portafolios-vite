<template>
  <div id="proyects-page">   
    <div class="container">
      <h1 class="title">Repositorios</h1>

      <div v-if="loading" class="info">Cargando...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="loaded && repos.length === 0" class="info">No hay repositorios públicos</div>

      <div ref="grid" class="repos-grid">
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
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, ref, watch } from 'vue'
import { useGithubStore } from '../store/store.js'
import RepoCard from '../components/card.vue'
import gsap from 'gsap'

const githubStore = useGithubStore()
const { fetchRepos, repos, loaded, loading, error } = githubStore

const grid = ref(null)

let intervalId = null

onMounted(async () => {
  await fetchRepos()
  animateCards() // animar al montar

  
})


// Animación con GSAP
function animateCards() {
  nextTick(() => {
    if (!grid.value) return
    const cards = grid.value.children
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.8, rotation: -5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.1
      }
    )
  })
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937;
}

.info {
  text-align: center;
  color: #4b5563;
  margin-bottom: 1rem;
}

.error {
  text-align: center;
  color: #dc2626;
  font-weight: bold;
  margin-bottom: 1rem;
}

.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-items: center;
}
</style>
