<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'
import image1 from '../assets/image.png';
import image2 from '../assets/trabajo-en-equipo.png';
const toggle = ref(true);

const route = useRoute();
watch(route, () => {
    if(route.path !== '/contact'){
        toggle.value = true;
    } else {
        toggle.value = false;
    }
});



</script>

<template>
  <nav>
    <RouterLink id="home-link" to="/">GTSHADOW33</RouterLink>

    <div class="nav-right">
      <RouterLink id="about-link" to="/about">Quien soy</RouterLink>
      <RouterLink id="how_i_do-link" to="/how_i_do">Que se</RouterLink>
      <RouterLink to="/contact" >
        <img id="image" :src="toggle ? image1 : image2" alt="contactar">
      </RouterLink>
    </div>
  </nav>
  
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, .main-container {
  height: 100%;
}

a {
  text-decoration: none;
  color: white;
  font-family: 'Poppins', sans-serif;
}

nav {
  font-size: 64px;       /* grande */
  font-weight: 900;      /* Black */
  font-style: italic;    /* Italic */
  height: 178px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 23px;             /* gap general */
  color: white;
  background-color: #4122D8;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav-right {
  display: flex;
  gap: 80px;             /* más separación entre estos tres */
  margin-left: auto;     /* empuja a la derecha */
  margin-right: 5vw;
  align-items: center;
}

nav a.router-link-active {
  color: black;
}

#image {
  width: 156px;
}

#home-link {
  margin-left: 5vw; /* opcional, si quieres separar del borde */
}

</style>
