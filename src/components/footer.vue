<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Redes -->
      <div class="social">
        <a
          href="https://github.com/gtshadow33"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-carrasquilla-13017a38a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <!-- Créditos y copyright -->
      <div class="credits">
        <span>© {{ new Date().getFullYear() }} · gtshadow33 —</span>
        <a href="mailto:gtshadow33@gmail.com">gtshadow33@gmail.com</a>
        <span class="icons">
          Iconos: <a href="https://www.flaticon.es" target="_blank">Flaticon</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #4122D8;
  color: white;
  font-family: sans-serif;
  padding: 3rem 1rem;       /* antes 0.5rem, ahora +60% aprox */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Redes */
.social {
  display: flex;
  gap: 0.5rem;
}

.social a {
  color: white;
  font-weight: 500;
  font-size: 0.85rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.social a:hover {
  opacity: 0.8;
}

/* Créditos */
.credits {
  display: flex;       /* fila */
  flex-wrap: wrap;     /* ajusta si es muy largo */
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.credits a {
  color: #FFB703;
  text-decoration: none;
}

.icons {
  font-size: 0.7rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
  }

  .social {
    justify-content: center;
  }

  .credits {
    justify-content: center;
    text-align: center;
  }
}
</style>

