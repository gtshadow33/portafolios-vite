<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/proyects">Proyects</RouterLink>
      <RouterLink to="/how_i_do">How I Do</RouterLink>
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



nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

nav a.router-link-active {
  font-weight: bold;
  color: blue;
}


</style>
