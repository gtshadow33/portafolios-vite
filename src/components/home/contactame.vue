<script setup>
const scrollToContact = () => {
  const el = document.querySelector("#contacto");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>
        Construyendo hoy <br />
        <span>las habilidades del mañana</span>
      </h1>

      <p>
        Desarrollo frontend enfocado en crecimiento real, objetivos claros
        y progreso constante hacia 2026.
      </p>

      <RouterLink class="cta" to = "/contact">
        contactame
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: clamp(2rem, 6vw, 6rem);
  background: linear-gradient(135deg, #F3F0FF 60%, #fff);
  font-family: 'Poppins', sans-serif;
}

.hero-content {
  max-width: 720px;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

h1 span {
  background: linear-gradient(90deg, #FF6600, #ff944d);

  background-clip: text;          /* estándar */
  -webkit-background-clip: text;  /* Chrome / Safari */

  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2.5rem;
  max-width: 520px;
}

.cta {
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: linear-gradient(90deg, #FF6600, #ff944d);
  color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.25);
}
</style>
