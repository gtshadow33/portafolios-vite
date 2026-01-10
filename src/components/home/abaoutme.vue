<script setup>
import { ref, onMounted } from "vue";
import ui from "../../assets/ui.jpg";

const items = [
  {
    title: "Diseñando interfaces",
    text: "Construyendo layouts claros y modernos.",
    image: ui
  },
  {
    title: "Escribiendo código",
    text: "Componentes reutilizables y bien estructurados.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Probando ideas",
    text: "Iterando rápido, mejorando cada detalle.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];

const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % items.length;
  }, 4000);
});
</script>

<template>
  <section class="activity">
    <div class="image">
      <img
        :src="items[active].image"
        :key="items[active].image"
        alt="actividad"
      />
    </div>

    <div class="content">
      <h2>{{ items[active].title }}</h2>
      <p>{{ items[active].text }}</p>

      <div class="progress">
        <span
          v-for="(item, i) in items"
          :key="i"
          :class="{ active: i === active }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.activity {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 6vw, 6rem);
  padding: clamp(3rem, 8vw, 8rem);
  align-items: center;
  background: #F3F0FF;
}

/* IMAGE */
.image {
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.2);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fade 0.6s ease;
}

@keyframes fade {
  from { opacity: 0.4; transform: scale(1.03); }
  to { opacity: 1; transform: scale(1); }
}

/* TEXT */
.content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.1rem;
  opacity: 0.75;
  max-width: 420px;
}

/* PROGRESS */
.progress {
  display: flex;
  gap: 0.6rem;
  margin-top: 2rem;
}

.progress span {
  width: 36px;
  height: 4px;
  background: #ccc;
  border-radius: 10px;
  transition: background 0.3s ease;
}

.progress span.active {
  background: #FF6600;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .activity {
    grid-template-columns: 1fr;
  }

  .content {
    text-align: left;
  }
}
</style>
