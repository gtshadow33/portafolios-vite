<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  img: String,
  url: String,
})

const router = useRouter()


const goToSkill = () => {
  const encodedUrl = encodeURIComponent(props.url)
  router.push(`/how_i_do/${encodedUrl}`)
}

</script>

<template>
  <div class="skill-card" @click="goToSkill">
    <div id="container">
      <div>
        <h2 class="skill-title">{{ title }}</h2>
        <p class="skill-description">{{ description || 'Sin descripción' }}</p>
      </div>
      <img :src="img" :alt="`Logo de ${title}`" class="skill-link"/>
    </div>
  </div>
</template>

<style scoped>
.skill-title {
  font-size: 5vh;
  font-weight: 800;
}

#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

p {
  color: white;
}

/* Estilo de la tarjeta */
.skill-card {
  color: white;
  margin-top: 4vw;
  width: 90%;
  background-color: #6B45E2;
  border-radius: 33px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.skill-card:last-child {
  margin-bottom: 100px;
}

img {
  height: 100px;
}

@media (max-width: 600px) {
  #container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  img {
    height: 70px;
  }
}
</style>
