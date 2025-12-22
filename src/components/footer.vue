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

      <!-- Créditos -->
      <div class="credits">
        <p>
          © {{ new Date().getFullYear() }} · gtshadow33 — 
          <a href="mailto:gtshadow33@gmail.com">gtshadow33@gmail.com</a>
        </p>
        <p class="icons">
          Los iconos son de:
          <a
            href="https://www.flaticon.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flaticon
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #4122D8;
  color: white;
  padding: 2.5rem 5vw;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
}

/* Redes */
.social {
  display: flex;
  gap: 2rem;
}

.social a {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.social a:hover {
  opacity: 0.8;
}

/* Créditos */
.credits {
  text-align: right;
  font-size: 0.95rem;
}

.credits a {
  color: #FFB703;
  text-decoration: none;
}

.icons {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social {
    justify-content: center;
  }

  .credits {
    text-align: center;
  }
}
</style>
