<script setup>
defineProps({
  title: String,
  description: String,
  img: String,

 
})
</script>

<template>
  <div class="skill-card">
    <div id = "container">
    <div>   
    <h2 class="skill-title">{{ title }}</h2>
    <p class="skill-description">{{ description || 'Sin descripción' }}</p>
    </div>
    <img :src="img" alt="Imagen de habilidad" class="skill-link"/>
    </div>
    
      
  </div>
</template>



<style scoped>
  .skill-title{
    font-size: 5vh;
    font-weight: 800;
  }
#container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
}
p{
    color: white;
}
.skill-card:last-child {
  margin-bottom: 100px; /* ajusta la distancia que quieras */
}

.skill-card {
    color: white;
  margin-top: 4vw;

  width: 90%;
  background-color:#6B45E2 ;
  border-radius: 33px;
  padding: 20px;
}
img{
    height: 100px;

}
@media (max-width: 600px) {
  #container{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  img{
    height: 70px;
  }
}
</style>
