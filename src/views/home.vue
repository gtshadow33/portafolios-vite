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
    
  </div>
  <div>
      <RouterLink to="/contact">Volver al inicio</RouterLink>
    </div>
</template>

<style scoped>
.home {
  margin-top: 11vh;
  font-family: 'Poppins', Courier, monospace;
  display: flex;
  justify-content: center;

}
a{
  font-size: 2vw;
  color: #4122D8;
}

.typewriter-text {
  font-weight: 900;
  font-style: italic;
  font-size: clamp(1.5rem, 4vw, 4rem);
  color: black;
  text-align: justify;        /* justificado */
  text-align-last: left;      /* la última línea no se estira */
  hyphens: none;              /* evita dividir palabras */
  word-break: normal;         /* no rompe palabras */
  overflow-wrap: break-word;  /* solo rompe si la palabra es demasiado larga */
}

#write {
  width: 40%;
}


</style>
