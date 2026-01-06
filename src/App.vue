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
          <img id="image" :src="toggle ? image1 : image2" alt="contactar" />
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

    <!-- CONTENIDO -->
    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #F3F0FF;
}

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

/* LINKS */
a {
  text-decoration: none;
  color: white;
}

/* NAV */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background-color: #4122D8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 4vw;
  font-weight: 900;
  font-style: italic;
  z-index: 1000;
}

/* LOGO */
#home-link {
  margin-left: 2vw;
}

/* LINKS DERECHA */
.nav-right {
  display: flex;
  gap: 4vw;
  align-items: center;
  margin-right: 2vw;
}

/* IMAGEN */
#image {
  width: 8vw;
}

/* HAMBURGUESA */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  margin-right: 4vw;
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

.side-menu a {
  font-size: 6vw;
  padding-left: 30px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  nav {
    height: 100px;
    font-size: 5vw;
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

  #image {
    width: 12vw;
  }

  .side-menu.open {
    right: 0;
  }
}
</style>
