<script setup>
import { RouterLink } from "vue-router";
import VueTypewriterEffect from "vue-typewriter-effect";
</script>

<template>
  <div class="home">
    <div id="write">
      <VueTypewriterEffect
        :strings="['Si no funciona, es porque estás aprendiendo algo nuevo.']"
        cursor="|"
        :typeSpeed="50"
        :deleteSpeed="50"
        :loop="true"
        class="typewriter-text"
      />
    </div>
    
  
  <div id ="logo-and-link">
      <img src="../assets/gato.png" alt="logo" width="200"/>
      <RouterLink to="/proyects">Proyectos</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 8vh;
  font-family: 'Poppins', Courier, monospace;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: clamp(1rem, 4vw, 4rem); 
  width: 100%;
  padding-inline: clamp(1rem, 5vw, 5vw);
  overflow-x: hidden; 
  padding-bottom: 300px;
  background-color:#F3F0FF ;
  
}

/* TEXTO */
#write {
  width: 100%;
}

.typewriter-text {
  font-weight: 900;
  font-style: italic;
  font-size: clamp(1.5rem, 4vw, 4rem);
  color: black;
  text-align: justify;
  text-align-last: left;
  hyphens: none;
  word-break: normal;
  overflow-wrap: break-word;
}

/* LOGO + BOTÓN */
#logo-and-link {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: clamp(1rem, 3vw, 3rem);
}

#logo-and-link img {
  max-height: 50vh;
  max-width: 100%; 
  width: auto;
}

#logo-and-link a {
  font-size: clamp(1.2rem, 3vw, 3rem);
  font-weight: 600;
  background-color: #FF6600;
  border-radius: 33px;
  padding: 0.4em 2em;
  color: white;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    padding-top: 5vh;
    padding-inline: 2vw; 
  }

  .typewriter-text {
    text-align: left;
  }

  #logo-and-link img {
    max-height: 40vh; 
    width: auto;
  }
  #write {
    height: 3vh;
  }
}

</style>
