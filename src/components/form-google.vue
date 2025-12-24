<template>
  <div class="google-form-wrapper">
    <button class="form-button" @click="toggleForm">
      {{ showForm ? 'Cerrar formulario' : 'Contactar' }}
    </button>

    <transition name="fade-slide">
      <div v-if="showForm" class="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd8uQcfzFSoT3LHnaAQchtrJOp0t2uuUtbL5-ToLBocTaVStg/viewform?embedded=true"
          loading="lazy"
          allowfullscreen
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  max-width: 900px;
  padding: 0 1rem;
}

/* Botón */
.form-button {
  background-color: #ff8c3a;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
}

.form-button:hover {
  background-color: #535bf2;
  transform: translateY(-2px);
}

.form-button:active {
  transform: translateY(0);
}

/* Contenedor del formulario */
.form-container {
  margin-top: 2rem;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

iframe {
  width: 100%;
  height: 950px;
  border: none;
}

/* Animación */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 600px) {
  iframe {
    height: 1100px;
  }
}
</style>
