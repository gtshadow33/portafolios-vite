<script setup>
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import image1 from './assets/image.png';
import image2 from './assets/trabajo-en-equipo.png';
import Footer from './components/footer.vue';

const toggle = ref(true);
const route = useRoute(); // ruta reactiva actual

// Watch para actualizar toggle según la ruta
watch(
  () => route.path,
  (newPath) => {
    toggle.value = newPath === '/contact' ? false : true;
  }
  // se ejecuta al montar
);
</script>

<template>
  <div class="app-layout">
  <nav>
    <RouterLink id="home-link" to="/">GTSHADOW33</RouterLink>

    <div class="nav-right">
      <RouterLink id="about-link" to="/about">Quien soy</RouterLink>
      <RouterLink id="how_i_do-link" to="/how_i_do">Que se</RouterLink>
      <RouterLink to="/contact">
        <img id="image" :src="toggle ? image1 : image2" alt="contactar">
      </RouterLink>
    </div>
  </nav>
  
  <main>
    <RouterView />
  </main>
  <Footer> </Footer>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, .main-container {
  height: 100%;
  margin-bottom: 0%;
}

a {
  text-decoration: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  min-width: 50px;
}

/* NAV PRINCIPAL */
nav {
  font-size: 4vw; 
  font-weight: 900;
  font-style: italic;
  height: 140px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2vw; 
  color: white;
  background-color: #4122D8;
  box-shadow: 0 0.125rem 0.3125rem rgba(0,0,0,0.1);
  z-index: 1000;
}

/* CONTENEDOR LINKS DERECHA */
.nav-right {
  display: flex;
  gap: 4vw;
  margin-left: auto; 
  margin-right: 1vw;
  align-items: center;
}

/* LINK ACTIVO */
nav a.router-link-active {
  color: black;
}

/* IMAGEN */
#image {
  width: 8vw; 
  margin-top: 1vw;
}

/* MÁRGEN DEL HOME */
#home-link {
  margin-left: 2vw; 
}

@media (max-width: 768px) {
  nav {
    font-size: 4vw;
    height: 100px;
    padding: 0 2vw;
  }

  #image {
    width: 12vw;
    margin-top: 2vw;
  }
  
}
</style>
