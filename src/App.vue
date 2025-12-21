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
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
nav a.router-link-active {
  font-weight: bold;
  color: blue;
}
</style>
