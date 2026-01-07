<template>
  <section class="specialitations">
    <h2>Mis Especialidades</h2>
      <arrow direction="right" />

    <swiper
      :slides-per-view="1.5"
      :space-between="20"
      :breakpoints="breakpoints"
      loop
      grab-cursor="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in specialities" :key="index">
        <div class="card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import arrow from "./arrow.vue"

const breakpoints = {
  640: { slidesPerView: 1.2 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const specialities = [
  { title: "Frontend", description: "Interfaces modernas con Vue y React." },
  { title: "UI/UX Design", description: "Experiencias intuitivas y atractivas." },
  { title: "Automatización", description: "Scripts y herramientas para optimizar procesos." },
  { title: "C# / .NET", description: "Programación bare-metal y manejo de memoria." },
  { title: "JavaScript avanzado", description: "Comprensión de intérpretes, compilación y optimización." },
  { title: "Participación en comunidades", description: "Activo en comunidades técnicas y compartiendo conocimiento." },
  { title: "Lenguajes y compilación", description: "Funcionamiento interno de compiladores y lenguajes." },
  { title: "Algoritmos y estructuras", description: "Optimización de código y estructuras eficientes." },
  { title: "Memoria y rendimiento", description: "Control de memoria y gestión eficiente en aplicaciones." },
  { title: "Sistemas y bare-metal", description: "Conocimientos en bajo nivel, hardware y ensamblador." },
];
</script>

<style scoped>
.specialitations {
  padding: clamp(2rem, 5vw, 6rem) 0;
  background-color: #F3F0FF;
  text-align: center;
}

.specialitations h2 {
  margin-bottom: 2rem;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
}

/* Cards más estrechas y visualmente “medio card” */
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  min-width: 180px; /* cards más estrechas */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.card h3 {
  margin-bottom: 0.5rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
}

.card p {
  font-size: clamp(0.85rem, 1.3vw, 1rem);
  line-height: 1.4;
}
</style>
