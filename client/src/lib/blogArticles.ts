export interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'primeros-pasos-ajedrez',
    category: 'Aprendizaje',
    title: 'Tus primeros pasos para aprender ajedrez',
    excerpt:
      'Una ruta sencilla para conocer las piezas, entender el objetivo y empezar a jugar con confianza.',
    readingTime: '4 min de lectura',
    image: '/chess-kids.jpg',
    imageAlt: 'Niños aprendiendo y practicando ajedrez',
    sections: [
      {
        heading: 'Primero, entiende el objetivo',
        paragraphs: [
          'El objetivo de una partida es dar jaque mate al rey rival: atacarlo de forma que no pueda escapar, bloquear el ataque ni capturar la pieza que amenaza. El rey no se captura; la partida termina cuando ya no tiene una defensa legal.',
          'Antes de memorizar aperturas, conviene reconocer cómo se mueve cada pieza y practicar partidas cortas. Comprender las reglas hace que cada decisión posterior tenga sentido.',
        ],
      },
      {
        heading: 'Aprende las piezas jugando',
        paragraphs: [
          'Empieza con ejercicios breves: mueve una pieza y observa qué casillas controla. Luego combina dos piezas para descubrir cómo pueden apoyarse. La dama reúne los movimientos de torre y alfil; el caballo salta en forma de L y puede pasar por encima de otras piezas.',
          'No hace falta aprender todas las excepciones el primer día. Incorpora el enroque, la captura al paso y la promoción cuando ya tengas seguridad con los movimientos habituales.',
        ],
      },
      {
        heading: 'Una rutina pequeña y constante',
        paragraphs: [
          'Una sesión inicial puede combinar una lección corta, unos cuantos problemas sencillos y una partida lenta. Al terminar, elige una posición que te haya hecho pensar y explica qué opciones consideraste.',
          'El progreso no depende de ganar todas las partidas. Identificar una idea nueva y volver a aplicarla es una señal valiosa de aprendizaje.',
        ],
      },
    ],
  },
  {
    slug: 'tactica-antes-de-mover',
    category: 'Táctica',
    title: 'Antes de mover: tres preguntas tácticas',
    excerpt:
      'Un hábito simple para detectar amenazas, oportunidades y piezas que pueden quedar sin defensa.',
    readingTime: '5 min de lectura',
    image: '/chess-competition.jpg',
    imageAlt: 'Jugador concentrado durante una partida de ajedrez',
    sections: [
      {
        heading: '1. ¿Qué amenaza mi rival?',
        paragraphs: [
          'Antes de pensar en tu propio plan, revisa la última jugada del adversario. ¿Ataca una pieza? ¿Abre una línea hacia tu rey? ¿Amenaza una captura o una táctica en la siguiente jugada?',
          'Este chequeo ayuda a evitar errores por descuido y a distinguir una amenaza real de una posibilidad que no funciona.',
        ],
      },
      {
        heading: '2. ¿Tengo una jugada forzada?',
        paragraphs: [
          'Comprueba primero los jaques, después las capturas y finalmente las amenazas. Estas jugadas suelen limitar las respuestas del rival y permiten calcular variantes concretas.',
          'No elijas una jugada solo porque parece activa. Después de cada candidata, imagina la mejor respuesta del contrincante y confirma que la posición final siga siendo favorable.',
        ],
      },
      {
        heading: '3. ¿Qué queda sin protección?',
        paragraphs: [
          'Observa las piezas de ambos bandos que están atacadas, defendidas una sola vez o situadas en una misma columna o diagonal. Una pieza sin defensa puede ser vulnerable, aunque no siempre se pueda capturar de inmediato.',
          'Practica el hábito en una posición real: nombra las amenazas, calcula una variante corta y recién entonces decide. La precisión mejora cuando el cálculo va acompañado de una revisión final.',
        ],
      },
    ],
  },
  {
    slug: 'como-analizar-una-partida',
    category: 'Entrenamiento',
    title: 'Cómo analizar una partida después de jugar',
    excerpt:
      'Convierte una partida en una lección: recuerda tus decisiones, encuentra momentos críticos y comprueba tus ideas.',
    readingTime: '5 min de lectura',
    image: '/chess-classroom.jpg',
    imageAlt: 'Estudiantes practicando ajedrez en grupo',
    sections: [
      {
        heading: 'Empieza con tu propio recuerdo',
        paragraphs: [
          'Antes de encender un motor de análisis, anota qué posiciones te parecieron difíciles y qué estabas intentando conseguir. Recordar tu plan permite comparar la intención con lo que ocurrió sobre el tablero.',
          'No necesitas reconstruir cada pensamiento con exactitud. Basta con identificar dos o tres momentos donde dudaste, cambiaste de plan o calculaste una variante importante.',
        ],
      },
      {
        heading: 'Busca decisiones, no culpables',
        paragraphs: [
          'En cada momento crítico, vuelve a mirar las alternativas que consideraste. Pregúntate qué información viste, qué respuesta esperabas y qué detalle pasó inadvertido.',
          'Un análisis útil explica por qué una decisión fue difícil y qué señal podrías revisar la próxima vez. Etiquetar una jugada simplemente como “mala” no enseña cómo mejorarla.',
        ],
      },
      {
        heading: 'Usa la computadora para comprobar',
        paragraphs: [
          'Después de tu revisión, puedes utilizar el análisis de Lichess o Chess.com para contrastar tus ideas. Revisa las variantes que no entendiste y trata de explicar la diferencia entre tu plan y la recomendación.',
          'Termina escribiendo una sola idea para llevar a la próxima partida: por ejemplo, revisar las amenazas del rival antes de ejecutar un plan propio.',
        ],
      },
    ],
  },
];
