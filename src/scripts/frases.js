 const frasesMotivacionales = [
    "Si no funciona, es porque estás aprendiendo algo nuevo.",
    "Cada error es una oportunidad de mejorar.",
    "La paciencia y la práctica superan al talento.",
    "No te rindas, el éxito está más cerca de lo que crees.",
    "Aprender algo nuevo es el primer paso hacia la grandeza.",
    "El esfuerzo de hoy será la recompensa de mañana.",
    "Caerse no es fracaso, no levantarse sí lo es.",
    "Confía en tu proceso, cada paso cuenta.",
    "El conocimiento se construye paso a paso.",
    "Nunca subestimes el poder de la curiosidad.",
    "Cada día es una nueva oportunidad para crecer.",
    "El fracaso solo existe si dejas de intentarlo.",
    "Aprender es un viaje, no un destino.",
    "Sé constante, los resultados llegarán.",
    "Los desafíos son lecciones disfrazadas.",
    "Tu actitud determina tu dirección.",
    "Lo importante no es ser perfecto, sino progresar.",
    "El cambio empieza cuando decides hacerlo.",
    "Sigue adelante, aunque sea despacio.",
    "El éxito es la suma de pequeños esfuerzos diarios.",
    "Nunca es tarde para empezar algo nuevo.",
    "El aprendizaje verdadero requiere práctica y paciencia.",
    "Cada intento te acerca más a tu objetivo.",
    "Las dificultades son el combustible del crecimiento.",
    "Lo que hoy parece difícil, mañana será sencillo."
];
 export function aleatorioFrase() {
    const indice = Math.floor(Math.random() * frasesMotivacionales.length);
    return frasesMotivacionales[indice];
}
