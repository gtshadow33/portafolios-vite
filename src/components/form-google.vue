<template>
  <div class="google-form-wrapper">
    <button class="btn" @click="toggleForm">
      {{ showForm ? 'Cerrar formulario' : 'Contactar' }}
    </button>

    <transition name="fade">
      <div v-if="showForm" class="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd8uQcfzFSoT3LHnaAQchtrJOp0t2uuUtbL5-ToLBocTaVStg/viewform?embedded=true"
          width="100%"
          height="947"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showForm = ref(false)

const toggleForm = () => {
  showForm.value = !showForm.value
}
</script>

<style scoped>
.google-form-wrapper {
  text-align: center;
  margin: 2rem 0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  background-color: #646cff;
  color: white;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #535bf2;
}

.form-container {
  margin-top: 1.5rem;
  width: 100%;
}

/* Animación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
