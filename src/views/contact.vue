<script setup>
import { RouterLink } from 'vue-router'
import FormGoogle from '../components/form-google.vue'
</script>

<template>
  <section class="contact">
    <div class="contact-content">
      <h1>¿Charlamos?</h1>

      <p class="intro">
        Soy un desarrollador apasionado por crear soluciones digitales eficientes,
        modernas y bien estructuradas. Trabajo enfocándome en código limpio,
        escalable y optimizado, buscando siempre aportar valor real en cada proyecto.
      </p>

      <p class="details">
        Me especializo en desarrollo web, creación de aplicaciones y automatización
        de procesos. Si tienes una idea, un proyecto en mente o estás buscando
        colaboración profesional, puedes escribirme a través del formulario que
        encontrarás más abajo. Me pondré en contacto contigo lo antes posible.
      </p>

      <RouterLink class="project-link" to="/proyects">
        Ver proyectos
      </RouterLink>
    </div>
  </section>

  <section class="form-section">
    <FormGoogle />
  </section>
</template>

<style scoped>
/* Sección contacto */
.contact {
  background: linear-gradient(180deg, #f3f0ff 0%, #ffffff 100%);
  padding: 6rem 1.5rem;
}

.contact-content {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
}

/* Título */
h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #1f2937;
}

/* Texto principal */
.intro {
  font-size: 1.35rem;
  line-height: 1.8;
  color: #1f2937;
  margin-bottom: 1.8rem;
}

/* Texto secundario */
.details {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 3.5rem;
}

/* CTA proyectos */
.project-link {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  background: #535bf2;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  letter-spacing: 0.02em;
  box-shadow: 0 10px 25px rgba(83, 91, 242, 0.35);
  transition: all 0.25s ease;
}

.project-link:hover {
  background-color: #ff8c3a;
  box-shadow: 0 12px 30px rgba(255, 140, 58, 0.4);
  transform: translateY(-2px);
}

/* Sección formulario */
.form-section {
  padding: 4rem 1.5rem 6rem;
  background-color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .intro {
    font-size: 1.1rem;
  }

  .details {
    font-size: 1rem;
  }

  .contact {
    padding: 4rem 1rem;
  }

  .form-section {
    padding: 3rem 1rem 4rem;
  }
}
</style>
