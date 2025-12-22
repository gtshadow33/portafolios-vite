<script setup>
import { onMounted, ref, nextTick, watch } from 'vue'
import RepoCard from '../components/card.vue'
import gsap from 'gsap'

const repos = ref([])
const loading = ref(false)
const error = ref(null)
const grid = ref(null)

async function fetchRepos(username = 'gtshadow33') {
  loading.value = true
  error.value = null

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`
    )

    if (!response.ok) {
      throw new Error('Error al obtener repositorios')
    }

    repos.value = (await response.json()).filter(r => !r.private)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchRepos()
})

// 🔹 animar cuando los repos ya estén renderizados
watch(repos, async (newRepos) => {
  if (!newRepos.length) return
  await nextTick()
  animateCards()
})

function animateCards() {
  if (!grid.value) return
  const cards = grid.value.children

  gsap.fromTo(
    cards,
    { y: 50, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.1
    }
  )
}
</script>

<template>
  <div id="proyects-page">   
    <div class="container">
      <h1 class="title">Mis Proyectos</h1>

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




<style scoped>

#proyects-page {
  padding: 4rem 2rem;
  background-color: #F3F0FF;
  min-height: 100vh;
}
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
