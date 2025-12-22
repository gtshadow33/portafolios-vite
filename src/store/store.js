import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGithubStore = defineStore('github', () => {
  const repos = ref([])
  const loaded = ref(false)
  const loading = ref(false)
  const error = ref(null)

  async function fetchRepos(username = 'gtshadow33') {
    if (loaded.value || loading.value) return; 

    loading.value = true
    error.value = null

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      if (!response.ok) throw new Error('Error al obtener repositorios')
      const data = await response.json()

      repos.value = data.filter(repo => !repo.private)
      loaded.value = true
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { repos, loaded, loading, error, fetchRepos }
})
