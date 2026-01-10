<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import image1 from './assets/image.png'
import image2 from './assets/trabajo-en-equipo.png'
import Footer from './components/footer.vue'

const toggle = ref(true)
const menuOpen = ref(false)
const route = useRoute()

// Cambia imagen según ruta
watch(
  () => route.path,
  (newPath) => {
    toggle.value = newPath !== '/contact'
    menuOpen.value = false // cierra menú al navegar
  }
)
</script>

<template>
  <div class="app-layout">
    <!-- NAV -->
    <nav>
      <RouterLink id="home-link" to="/">GTSHADOW33</RouterLink>

      <!-- LINKS DESKTOP -->
      <div class="nav-right">
        <RouterLink to="/about">Quien soy</RouterLink>
        <RouterLink to="/how_i_do">Que sé</RouterLink>
        <RouterLink to="/contact">
          <img id="nav-image" :src="toggle ? image1 : image2" alt="contactar" />
        </RouterLink>
      </div>

      <!-- BOTÓN HAMBURGUESA -->
      <button class="hamburger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- MENÚ LATERAL -->
    <div class="side-menu" :class="{ open: menuOpen }">
      <RouterLink to="/" @click="menuOpen = false">Inicio</RouterLink>
      <RouterLink to="/about" @click="menuOpen = false">Quien soy</RouterLink>
      <RouterLink to="/how_i_do" @click="menuOpen = false">Que sé</RouterLink>
      <RouterLink to="/contact" @click="menuOpen = false">Contacto</RouterLink>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
/* RESET BÁSICO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #F3F0FF;
}

/* LAYOUT PRINCIPAL */
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* MAIN */
main {
  flex: 1;
  padding-top: 140px;
  background-color: #F3F0FF;
}

/* ENLACES */
a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

/* NAV */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #4122D8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  font-size: 3.5vw;
  font-weight: 900;
  font-style: italic;
  z-index: 1000;
}

/* LOGO */
#home-link {
  font-size: 1.5em;
}

/* LINKS DERECHA */
.nav-right {
  display: flex;
  align-items: center;
  gap: 4vw;
}

/* Enlace activo del nav */
nav a.router-link-active {
  color: black;
  font-weight: bold;
}

/* IMAGEN */
#nav-image {
  width: 5vw;
  margin-top: 30px;
  transition: transform 0.3s;
}

#nav-image:hover {
  transform: scale(1.1);
}

/* BOTÓN HAMBURGUESA */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 30px;
  height: 4px;
  background: white;
  border-radius: 2px;
}

/* MENÚ LATERAL */
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100vh;
  background-color: #4122D8;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: right 0.3s ease;
  z-index: 999;
}

.side-menu.open {
  right: 0;
}

.side-menu a {
  font-size: 6vw;
  padding-left: 30px;
  color: white;
  transition: color 0.3s;
}

/* Enlace activo del menú lateral */
.side-menu a.router-link-active {
  color: #FFD700;
  font-weight: bold;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  nav {
    font-size: 5vw;
    padding: 0 4vw;
  }

  main {
    padding-top: 100px;
  }

  .nav-right {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  #nav-image {
    width: 12vw;
  }
}
</style>
