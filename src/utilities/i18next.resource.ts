import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const i18Resource: Resource = {
  en: {
    translation: {
      title: {
        purpose: "purpose",
        games: "games",
        metrics: "metrics",
        roadmap: "roadmap",
      },
      footer: {
        mission: "Unveiling the mystery of the inherit value of pay-2-win",
        discord: "Join the Discord",
        legal: {
          support: "Support",
          privacy: "Privacy Policy",
          terms: "Terms of Use",
        },
      },
      home: {
        main: {
          left: "As P2W ( Pay 2 Win ) becomes more prevalent in the gaming sphere, it is my belief that we need an objective metric to identify the scale correctly, so a singular person can determine for themselves if that game is the right game for themselves.",
          right:
            "For P4T ( Pay 4 Time ), I think the same overlapping metrics can be used to determine the rationale of worth to the player and to see if the grind is worth it.",
          bottom:
            "Establishing these two concepts, I believe we can create a framework that can create some objective truths that can quantify expectations before spending hundreds of hours into a game, then realizing that it's a dipropionate hill.",
          button: "Explore Metrics",
        },
        revealingText:
          "Embracing objectivity has to be the singular most important aspect of any truths esablished and after the initial obversations have been concluded. The scoring of the different games will also have to be measured by different skill levels and through hard work creating results that can be replicable has to be something we strive for.",
        purpose: {
          title: {
            part1: "This is about creating",
            part2: "Visibility",
          },
          subTitle:
            "Story, Difficulty, Entertaining, and Visuals are all things we can enjoy discovering while playing any game, but P2W/P4T are factors we would like to know before spending hours on end, then discovering it wasn't worth the grind if there wasn't a chance to begin with.",
          reason1: {
            title: "TIME AVAILABILITY",
            content:
              "Personal prefrences aside, a large consideration for the perspective of value to pay is to differeniate between casuals gamers, gamers, speedrunnerscontent creators. For example for casual gamers, there could be a larger penalty if a grind method is implemented for advancement.",
          },
          reason2: {
            title: "OBJECTIVITY",
            content:
              "Main goal of metrics on this quest of value, is to find objective truths that we can find to create a foundation that we can measure our own unique tolerance to.",
          },
          reason3: {
            title: "SITE PREFERENCE",
            content:
              "This site would like to stay away from scores for final evaulation but center around comparative values.",
          },
          reason4: {
            title: "ROADMAP",
            content:
              "Check out our Road Map page to see what we are working on next and if you have any suggestions on our next evaluation.",
          },
          content: {
            line1: "Pay 2 Win on a",
            line2: "Balance scale",
            line3: "With Purpose",
          },
        },
        exit: "Whether your tolerance is zero or you are a whale, join us in the discovery of metrics that to inform gamers everywhere to a better understanding of the variance of values affected by paid content.",
      },
      metrics: {
        tldr: "TLDR; On this site Pay-2-Win"
      }
    },
  },
  es: {
    translation: {
      title: {
        purpose: "propósito",
        games: "juegos",
        metrics: "métricas",
        roadmap: "estratégico",
      },
      footer: {
        mission: "Descubriendo el misterio del valor inherente del Pay-2-Win",
        discord: "Únete al Discord",
        legal: {
          support: "Soporte",
          privacy: "Política de Privacidad",
          terms: "Términos de Uso",
        },
      },
      home: {
        main: {
          left: "A medida que el modelo de P2W (Pay 2 Win) se vuelve más común en el ámbito de los videojuegos, creo que necesitamos una métrica objetiva para identificar correctamente su escala, de manera que cualquier persona pueda determinar por sí misma si ese juego es el adecuado para ella.",
          right:
            "Para P4T (Pay 4 Time), creo que las mismas métricas superpuestas pueden ser utilizadas para determinar la razón de valía para el jugador y para ver si el esfuerzo vale la pena.",
          bottom:
            "A medida que el modelo de P2W (Pay 2 Win) se vuelve más común en el ámbito de los videojuegos, creo que necesitamos una métrica objetiva para identificar correctamente su escala, de manera que cualquier persona pueda determinar por sí misma si ese juego es el adecuado para ella.",
          button: "Explorar Métricas",
        },
        revealingText:
          "Asumir la objetividad debe ser el aspecto singular más importante de cualquier verdad establecida después de que se hayan concluido las observaciones iniciales. La puntuación de los diferentes juegos también tendrá que ser medida según diferentes niveles de habilidad y a través del trabajo duro para crear resultados replicables, algo hacia lo que debemos esforzarnos.",
        purpose: {
          title: {
            part1: "Se trata de crear",
            part2: "Visibilidad",
          },
          subTitle:
            "La historia, la dificultad, la diversión y los visuales son cosas que podemos disfrutar descubriendo mientras jugamos cualquier juego, pero P2W/P4T son factores que nos gustaría conocer antes de pasar horas y horas, para luego descubrir que no valía la pena el esfuerzo si no había posibilidad desde el principio.",
          reason1: {
            title: "DISPONIBILIDAD DE TIEMPO",
            content:
              "Aparte de las preferencias personales, una gran consideración para la perspectiva de valor a pagar es diferenciar entre jugadores casuales, jugadores regulares, speedrunners/creadores de contenido. Por ejemplo, para los jugadores casuales, podría haber una penalización mayor si se implementa un método de grind para avanzar.",
          },
          reason2: {
            title: "OBJETIVIDAD",
            content:
              "El objetivo principal de las métricas en esta búsqueda de valor es encontrar verdades objetivas que podamos encontrar para crear una base con la que podamos medir nuestra propia tolerancia única.",
          },
          reason3: {
            title: "PREFERENCIA DEL SITIO",
            content:
              "Este sitio prefiere mantenerse alejado de las puntuaciones para la evaluación final, pero centrarse en valores comparativos.",
          },
          reason4: {
            title: "MAPA DE RUTA",
            content:
              "Visita nuestra página de Mapa de Ruta para ver en qué estamos trabajando a continuación y si tienes alguna sugerencia para nuestra próxima evaluación.",
          },
          content: {
            line1: "Pay 2 Win en una",
            line2: "Balanza",
            line3: "Con Propósito",
          },
        },
        exit: "Ya sea que tu tolerancia sea cero o seas un gran jugador, únete a nosotros en el descubrimiento de métricas que informen a los jugadores de todo el mundo para una mejor comprensión de la variación de valores afectados por el contenido de pago.",
      },
    },
  },
};

i18next.use(initReactI18next).init(
  {
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: i18Resource,
  },
  () => null
);

export default i18next;
