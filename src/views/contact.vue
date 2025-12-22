<script setup>

  import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="contact">
      <h1>¿Charlamos?</h1>
      <p>Soy un programador apasionado por crear soluciones eficientes y funcionales, siempre buscando estar entre las mejores opciones en cada proyecto en el que participo. Me especializo en desarrollo web, creación de aplicaciones y automatización de procesos, enfocándome en generar código limpio y optimizado que marque la diferencia. Estoy abierto a nuevos desafíos profesionales y colaboraciones interesantes. Pueden contactarme directamente a través de LinkedIn  o por correo electrónico , estaré encantado de conversar y explorar oportunidades.</p>
    <RouterLink id="buttom" to="/proyects">
    Proyectos
  </RouterLink>
    </div>

</template>

<style>
.contact {
  height: 60vh;
  padding: 4rem 2rem;
  background-color: #F3F0FF;
  min-height: 100vh;
  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
}
#buttom {
  font-size: clamp(1.2rem, 3vw, 3rem);
  font-weight: 600;
  background-color: #FF6600;
  border-radius: 33px;
  padding: 0.4em 2em;
  color: white;
  text-decoration: none;
  margin-left: 70%;

}

h1{
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1f2937;
}
p {
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.6;
  color: #1f2937;
  padding: 10px 1rem;
  padding-bottom: 100px;
}

</style>