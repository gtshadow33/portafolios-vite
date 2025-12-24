<script setup>

  import { RouterLink } from 'vue-router';
  import formGoogle from '../components/form-google.vue';
</script>
<template>
    <div class="contact">
      <h1>¿Charlamos?</h1>
      <p>Soy un programador apasionado por crear soluciones eficientes y funcionales, siempre buscando estar entre las mejores opciones en cada proyecto en el que participo. Me especializo en desarrollo web, creación de aplicaciones y automatización de procesos, enfocándome en generar código limpio y optimizado que marque la diferencia. Estoy abierto a nuevos desafíos profesionales y colaboraciones interesantes. Pueden contactarme directamente a través de LinkedIn  o por correo electrónico , estaré encantado de conversar y explorar oportunidades.</p>
    <RouterLink id="proyecto" to="/proyects">
    Proyectos
  </RouterLink>
    </div>

    <formGoogle></formGoogle>

</template>

<style>
.contact {
  height: 60vh;
  padding: 4rem 2rem;
  background-color: #F3F0FF;
  min-height: 100vh;
  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
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
@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem; /* Reducimos el padding en móviles */
  }

  #buttom {
    padding: 1rem 2rem; /* Ajustamos el tamaño del botón */
    font-size: 1rem;    /* Fuente más pequeña */
  }

  h1 {
    font-size: 2rem; /* Ajustamos título */
  }

  p {
    font-size: 1rem;  /* Texto más legible en pantallas pequeñas */
    padding-bottom: 50px; /* Reducimos el padding inferior */
  }
}


</style>