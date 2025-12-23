<script setup>
// Sin lógica por ahora
</script>



<template>
  <section class="about">
  <div class="content">
    <h1>Construyendo soluciones<br />con código y constancia</h1>

    <p>
      Soy un programador junior apasionado por la tecnología y con un stack amplio que abarca desarrollo web, backend con C# y bases de datos, entre otras herramientas. 
      Me considero una persona disciplinada, perseverante y enfocada en mejorar cada día,
      tanto a nivel técnico como personal.
    </p>

    <p>
      Mi interés por la programación nació al descubrir que podía crear soluciones desde cero,
      combinando lógica, creatividad y tecnología. El proceso no fue sencillo, pero entendí
      que equivocarse también es avanzar.
    </p>

    <p>
      Gracias a la práctica diaria, cursos y proyectos personales, he fortalecido mis
      conocimientos en desarrollo web y backend, incluyendo C# y bases de datos. 
      Siempre estoy dispuesto a profundizar en nuevas tecnologías y mejorar mi forma de trabajar.
    </p>

    <p>
      Hoy me considero un programador junior sólido, con muchas ganas de crecer, aprender
      nuevas herramientas y aplicar lo aprendido en proyectos reales que aporten valor.
    </p>

    <p class="closing">
      La constancia, la disciplina y el aprendizaje continuo son los pilares que guían
      mi camino como desarrollador.
    </p>

    <a href="#proyectos" class="projects-btn">
      Ver proyectos
    </a>
  </div>
</section>

</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  background: radial-gradient(
      circle at top,
      rgba(107, 69, 226, 0.15),
      transparent 60%
    ),
    #F3F0FF;
  color: black;
}

.content {
  max-width: 880px;
  text-align: center;
  padding: 0 1rem;
}

/* Título principal */
h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 2.5rem;
  background: linear-gradient(90deg, #000000, #6b45e2); /* degradado elegante negro → morado */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Párrafos */
p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333333; /* texto oscuro sobre fondo claro */
  margin-bottom: 1.4rem;
  padding: 0 0.5rem;
}

/* Cierre */
.closing {
  margin-top: 2rem;
  font-weight: 600;
  color: #6b45e2; /* color morado destacado para cierre */
}

/* Botón */
.projects-btn {
  display: inline-block;
  margin-top: 3rem;
  padding: 0.9rem 2.6rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff6600, #ff8c3a);
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 0.03em;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.projects-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(255, 102, 0, 0.35);
}

/* Pequeño detalle: añadir sombra suave a la sección para más profundidad */
.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top left, rgba(255, 102, 0, 0.05), transparent 70%);
  pointer-events: none;
}
</style>


