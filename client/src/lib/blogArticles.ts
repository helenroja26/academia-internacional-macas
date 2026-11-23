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
    links?: {
      label: string;
      url: string;
    }[];
  }[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'mundial-sub20-caracas-christopher-garzon-alexa-oblitas',
    category: 'Noticias',
    title: 'Christopher Garzón entre los diez mejores del Mundial Sub-20',
    excerpt:
      'Tras cinco rondas en Caracas, Christopher suma dos victorias y tres empates y hoy se mide frente a la India con piezas blancas.',
    readingTime: '2 min de lectura',
    image: '/garzon mundialronda5.jpg',
    imageAlt: 'Christopher Garzón disputando la quinta ronda del Mundial Sub-20 en Caracas',
    sections: [
      {
        heading: 'Excelente desempeño tras cinco rondas',
        paragraphs: [
          'Christopher Leonel Garzón Zapatanga ha completado cinco rondas de las 11 pactadas en el Campeonato Mundial Juvenil Sub-20 que se disputa en Caracas, Venezuela.',
          'Su desempeño incluye dos victorias frente a representantes de Venezuela y Nicaragua, además de tres empates frente a ajedrecistas de Cuba y Colombia, resultados que lo ubican entre los diez primeros del evento.',
        ],
      },
      {
        heading: 'Enfrentamiento de la sexta ronda',
        paragraphs: [
          'Hoy, a las 3:00 p. m. hora local de Caracas, Christopher se medirá frente a un representante de la India conduciendo las piezas blancas.',
          'Desde la Academia Internacional Macas seguimos de cerca su participación y destacamos el esfuerzo que representa llevar el ajedrez ecuatoriano a uno de los escenarios juveniles más exigentes del mundo.',
        ],
        links: [
          {
            label: 'Información oficial del Mundial Sub-20',
            url: 'https://ratings.fide.com/tournament_details.phtml?event=506257',
          },
          {
            label: 'Partidas y programación en Chess.com',
            url: 'https://www.chess.com/events/info/2026-fide-world-junior-u20-championships',
          },
          {
            label: 'Pareos y emparejamientos',
            url: 'https://www.chess.com/events/2026-fide-world-junior-u20-championships/games',
          },
          {
            label: 'Resultados y clasificación',
            url: 'https://www.chess.com/events/2026-fide-world-junior-u20-championships/results',
          },
        ],
      },
    ],
  },
  {
    slug: 'cuarta-parada-circuito-provincial-sucua',
    category: 'Noticias',
    title: '108 jugadores participaron en Sucúa en la cuarta parada',
    excerpt:
      'El Circuito Provincial de ajedrez llegó a Sucúa con 108 participantes. Macas recibirá la final el 19 de diciembre de 2026.',
    readingTime: '2 min de lectura',
    image: '/sucua.jpeg',
    imageAlt: 'Participantes del circuito provincial de ajedrez en Sucúa',
    sections: [
      {
        heading: 'Una jornada con 108 ajedrecistas',
        paragraphs: [
          'El viernes 20 de noviembre de 2026 se realizó en Sucúa la cuarta parada del Circuito Provincial de ajedrez, con la participación de 108 jugadores.',
          'El encuentro reunió a jugadores de distintos niveles y localidades, fortaleciendo la práctica competitiva y el desarrollo del ajedrez en la provincia.',
        ],
      },
      {
        heading: 'La final será en Macas',
        paragraphs: [
          'La siguiente y última parada del circuito se realizará en Macas el 19 de diciembre de 2026, donde se jugará la final del circuito provincial.',
          'La convocatoria representa una nueva oportunidad para que los ajedrecistas locales y provinciales cierren la temporada compitiendo ante un público cercano y viviendo una experiencia deportiva significativa.',
        ],
      },
    ],
  },
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
