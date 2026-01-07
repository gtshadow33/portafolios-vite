<template>
  <div class="arrow" :class="direction">
    <span v-for="n in 3" :key="n">&gt;</span>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: { type: String, default: "right" } // "left" o "right"
});
</script>

<style scoped>
.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #9b59b6; /* morado */
  cursor: pointer;
  user-select: none;
}

.arrow span {
  margin-left: -0.3rem; /* superposición ligera */
  animation: blink 1s infinite;
}

/* Desfase para que parpadeen de forma escalonada */
.arrow span:nth-child(1) { animation-delay: 0s; }
.arrow span:nth-child(2) { animation-delay: 0.2s; }
.arrow span:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0.3; }
}

/* Girar si es dirección izquierda */
.arrow.left {
  transform: rotate(180deg);
}
</style>
