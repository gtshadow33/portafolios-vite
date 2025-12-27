<template>
  <div class="how-i-do-container">
    <SkillsCard
      v-for="(skill, index) in skills"
      :key="index"
      class="skill-card"
      :title="skill.title"
      :description="skill.description"
      :img="skill.img"
      :url="skill.url"
    />

    <RouterLink id="proyecto" to="/proyects">
      Proyectos
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SkillsCard from '../components/skillsCars.vue'
import { skills } from '../scripts/skills.js'

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.skill-card').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
    })
  })
})
</script>

<style scoped>
.how-i-do-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
    overflow-x: hidden; /* evita scroll lateral */
  padding: 1rem;       /* espacio interno en móvil */
  box-sizing: border-box; /* que padding no haga overflow */
}


.skill-card {
  will-change: transform, opacity;
}
</style>
