<script setup>
import { computed } from "vue";
import { objetivos2026 } from "../../scripts/objetcives.js";

const globalProgress = computed(() => {
  const total = objetivos2026.reduce((acc, o) => acc + o.progress, 0);
  return Math.round(total / objetivos2026.length);
});
</script>

<template>
  <section class="objetivos">
    <h2>Objetivos 2026</h2>

    <!-- Progreso general -->
    <div class="global-progress">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: globalProgress + '%' }"
        />
      </div>
      <span>{{ globalProgress }}%</span>
    </div>

    <!-- Progreso por tecnología -->
    <div class="tech-list">
      <div
        v-for="obj in objetivos2026"
        :key="obj.tech"
        class="tech-item"
      >
        <div class="tech-header">
          <span>{{ obj.tech }}</span>
          <span>{{ obj.progress }}%</span>
        </div>

        <div class="progress-bar small">
          <div
            class="progress-fill"
            :style="{ width: obj.progress + '%' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.objetivos {
  padding: 6rem clamp(1rem, 5vw, 5vw);
  background-color: #F3F0FF;
  font-family: 'Poppins', sans-serif;
}

/* Título */
h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 2.5rem;
}

/* Global */
.global-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.progress-bar {
  flex: 1;
  height: 16px;
  background: #ddd;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar.small {
  height: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6600, #ff944d);
  transition: width 0.5s ease;
}

.tech-list {
  display: grid;
  gap: 1.5rem;
}

.tech-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
