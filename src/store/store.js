import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGithubStore = defineStore('github', () => {
  const repos = ref(JSON.parse(localStorage.getItem('repos') || '[]'))
  const loaded = ref(repos.value.length > 0)
  const loading = ref(false)
  const error = ref(null)

  async function fetchRepos(username = 'gtshadow33') {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      if (!response.ok) throw new Error('Error al obtener repositorios')
      const data = await response.json()

      repos.value = data.filter(repo => !repo.private)
      loaded.value = true

      // Guardar en localStorage para mantenerlo al refrescar
      localStorage.setItem('repos', JSON.stringify(repos.value))
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { repos, loaded, loading, error, fetchRepos }
})
