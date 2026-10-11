import { Link } from 'react-router-dom';

// Home page copy. Entries may be JSX when the text carries inline markup.
export const HOME = {
  es: {
    description: 'Notara convierte tu voz en notas claras, resúmenes y material de estudio, desde un solo botón.',
    nav: {
      home: 'Notara, inicio',
      sections: 'Secciones',
      links: [['modos', 'Modos'], ['estudiar', 'Estudiar'], ['privacidad', 'Privacidad'], ['precios', 'Precios'], ['preguntas', 'Preguntas']],
      download: 'Descargar gratis',
    },
    hero: {
      chipNew: 'Nuevo',
      chip: 'Para iPhone y Android',
      title: <>Graba. <span>Notara</span> hace el resto.</>,
      lead: 'Toca un botón y Notara convierte tus clases, reuniones e ideas en notas claras, resúmenes y material para estudiar. La transcripción ocurre en tu teléfono, incluso sin internet.',
      appStore: 'Descargar en App Store',
      googlePlay: 'Google Play',
      pick: 'Elige un modo y toca el botón de grabar en el teléfono',
      modesAria: 'Modo de grabación',
    },
    phone: {
      aria: 'Pantalla de inicio de Notara',
      today: 'Para hoy',
      start: 'Empezar a grabar',
      stop: 'Detener grabación',
      hint: 'Toca para grabar',
      onPhone: '📱 En tu teléfono',
      star: 'Marcar momento importante',
    },
    modes: {
      clase: {
        name: 'Clase', greet: '¿Lista la clase, Alan?',
        today: ['Repasa Biología: 12 tarjetas', 'Resume "Historia de México"', 'Sigue con Cálculo del lunes'],
        live: ['Bueno, hoy vemos respiración celular.', 'Empieza con la glucólisis, en el citoplasma.', 'Esto va en el examen: la mitocondria produce casi todo el ATP.', 'Luego el ciclo de Krebs, dentro de la mitocondria.']
      },
      reunion: {
        name: 'Reunión', greet: '¿Empezamos la reunión?',
        today: ['Resume "Reunión con Ana"', '2 tareas para el viernes', 'Retoma el plan del trimestre'],
        live: ['Gracias por venir, vamos con el presupuesto.', 'Marketing pide un 10% más para el lanzamiento.', 'Queda así: Ana envía el borrador el viernes.', 'Y tú revisas las cifras antes del jueves.']
      },
      personal: {
        name: 'Personal', greet: '¿Qué grabamos hoy, Alan?',
        today: ['Sigue con las ideas del lunes', 'Resume "Viaje a Oaxaca"', 'Graba tu reflexión del día'],
        live: ['Nota para mí: el viaje a Oaxaca.', 'Mejor ir en temporada de lluvias, hay menos gente.', 'Quiero tomar una clase de cocina en Teotitlán.', 'Preguntarle a Sofía por el hotel.']
      }
    },
    modeSection: {
      eyebrow: 'Tres modos, un botón',
      title: 'Cada cosa que escuchas tiene su lugar.',
      lead: 'El color te dice en qué modo estás sin leer nada. Y si grabas una reunión en modo Clase, Notara te avisa.',
      cards: {
        clase: {
          text: 'Tu clase se vuelve un resumen, preguntas y flashcards listas para el examen.',
          tabs: ['Resumen', 'Preguntas', 'Flashcards', 'Transcripción'],
          meta: 'Biología · 3 oct', title: 'Respiración celular',
          items: ['⭐ 12:40 La mitocondria produce casi todo el ATP.', 'La glucólisis ocurre en el citoplasma.']
        },
        reunion: {
          text: 'Habla con tu equipo. Notara anota las decisiones, las tareas y quién se encarga.',
          tabs: ['Resumen', 'Decisiones y tareas', 'Transcripción'],
          meta: 'Reunión con Ana · 8 oct', title: 'Presupuesto del trimestre',
          items: ['Ana envía el borrador · viernes', 'Tú revisas las cifras · jueves']
        },
        personal: {
          text: 'Piensa en voz alta. Tus ideas sueltas quedan ordenadas y fáciles de retomar.',
          tabs: ['Resumen', 'Ideas', 'Transcripción'],
          meta: 'Ideas del lunes · 6 oct', title: 'Viaje a Oaxaca',
          items: ['Ir en temporada de lluvias, menos gente.', '⭐ 02:10 Clase de cocina en Teotitlán.']
        }
      }
    },
    cycle: {
      title: 'Habla hoy, estudia mañana.',
      steps: [
        ['Graba', 'Un toque y listo. Marca con ⭐ lo importante mientras escuchas.'],
        ['Entiende', 'Resumen y puntos clave en segundos, con los momentos ⭐ primero.'],
        ['Estudia', 'Preguntas, flashcards y quizzes hechos con lo que tú escuchaste.'],
        ['Repasa', 'Cada día, "Para hoy" te recuerda qué toca repasar.'],
      ]
    },
    study: {
      eyebrow: 'Estudiar',
      title: 'De la clase al quiz en segundos.',
      lead: 'Notara lee tu clase y te pregunta lo que importa. Cada respuesta te lleva al minuto exacto del audio.',
      ticks: [
        <><b>Flashcards sin hacer flashcards.</b> Se crean solas con cada nota.</>,
        <><b>Quiz con tus propias notas.</b> Si fallas, escuchas la explicación del profe.</>,
        <><b>Rachas y confeti.</b> Un pequeño premio por volver cada día.</>,
      ],
      meta: 'Biología · Repaso', count: '7 de 12',
      cardAria: 'Flashcard, toca para voltear',
      question: 'Pregunta', q: '¿Qué organelo produce la mayor parte del ATP de la célula?', reveal: 'Toca para ver la respuesta',
      answer: 'Respuesta', a: 'La mitocondria, mediante la respiración celular.', listen: '▶ Escuchar en 12:40',
      again: 'Otra vez', knew: 'Me la sé', streak: '🔥 Racha de 5 días',
    },
    chat: {
      me: '¿Qué quedó pendiente para el viernes?',
      ai: 'Ana envía el borrador del presupuesto el viernes. Antes, el jueves, tú revisas las cifras de marketing.',
      sources: ['Reunión con Ana · 8 oct · 14:05', 'Equipo · 9 oct · 03:22'],
      ask: 'Pregúntale a tus notas',
      eyebrow: 'Chat con tus notas',
      title: 'Tus notas ya tienen respuestas.',
      lead: 'Pregunta con tu voz o escribiendo. Notara responde con lo que se dijo y cita la fuente; un toque te lleva a ese momento.',
      ticks: [
        <><b>Se organiza solo.</b> Carpetas y etiquetas sugeridas para cada nota.</>,
        <><b>Búsqueda en todo lo que grabaste.</b> Encuentra el minuto exacto, no solo la nota.</>,
      ],
    },
    privacy: {
      eyebrow: 'Privacidad',
      title: 'Tu voz no sale de tu teléfono.',
      cards: [
        ['📱 En tu teléfono', 'Transcripción sin internet', 'Grabar y transcribir ocurre en tu dispositivo. Es gratis, sin límite y funciona en modo avión.'],
        ['☁️ En la nube, si quieres', 'Siempre sabes dónde', 'Los resúmenes y el chat usan la nube solo con tu cuenta, y la app siempre te muestra dónde se procesa cada cosa.'],
        ['🔒 Modo privado · Pro', 'Todo se queda contigo', 'Activa el modo privado y nada sale de tu teléfono, ni el audio ni el texto.'],
      ],
      more: <>Los detalles están en nuestro <Link to="/privacidad" style={{ color: 'var(--on)', fontWeight: 600 }}>aviso de privacidad</Link>.</>,
    },
    voice: {
      aria: 'Cómo se siente Notara',
      quote: <>Ligera como una nota. <em>Lista como un tutor.</em></>,
      traits: [
        ['Calmada', 'Una pantalla limpia y un solo botón. Nada te apura.'],
        ['Lista', 'Escucha, resume y te pregunta para que aprendas.'],
        ['Cálida', 'Colores suaves que respiran con tu voz.'],
        ['Discreta', 'Tu voz se queda en tu teléfono.'],
      ],
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Gratis para siempre. Pro cuando lo necesites.',
      lead: 'Grabar y transcribir nunca se cobra. Pro quita los límites de la IA.',
      billAria: 'Periodo de pago', year: 'Anual', save: 'Ahorra 37%', month: 'Mensual',
      free: {
        name: 'Gratis', per: 'para siempre',
        fine: 'Todo lo esencial para grabar y estudiar. Los límites de IA se recargan cada semana.',
        ticks: [
          <><b>Transcripción ilimitada</b> en tu teléfono</>,
          <><b>3 resúmenes o quizzes</b> con IA por semana</>,
          <><b>5 preguntas al chat</b> por semana</>,
          <>Organización y búsqueda en todas tus notas</>,
        ],
        cta: 'Empezar gratis',
      },
      pro: {
        name: 'Notara Pro',
        prices: {
          year: ['$59.99', 'al año', 'Equivale a $5.00 al mes. Prueba 3 días gratis, cancela cuando quieras.', 'Probar 3 días gratis'],
          month: ['$7.99', 'al mes', 'Cancela cuando quieras. La prueba gratis de 3 días es solo en el plan anual.', 'Pasarme a Pro']
        },
        ticks: [
          <><b>IA sin límites:</b> resúmenes, quizzes y chat</>,
          <><b>Modo privado,</b> todo en tu teléfono</>,
          <><b>Sincronización</b> entre tus dispositivos</>,
          <><b>Exportación</b> de notas (pronto)</>,
        ],
      },
      student: <><b>Estudiantes: 40% de descuento</b> con tu correo escolar. Precios en USD; en Latinoamérica verás precios locales. Consulta los <Link to="/terminos" style={{ color: 'var(--on)' }}>términos de la suscripción</Link>.</>,
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Lo que más nos preguntan.',
      items: [
        ['¿Funciona sin internet?', 'Sí. Grabar y transcribir ocurre en tu teléfono, así que funciona en un salón sin señal o en modo avión. Cuando vuelvas a tener conexión, Notara hace los resúmenes que tengas pendientes.'],
        ['¿Necesito crear una cuenta?', 'No para grabar ni transcribir. La cuenta solo se pide la primera vez que usas la IA en la nube o si quieres sincronizar tus notas.'],
        ['¿Cuándo se recargan los límites gratis?', 'Cada semana. Tienes 3 resúmenes o quizzes con IA y 5 preguntas al chat por semana, y la app te muestra cuántos te quedan.'],
        ['¿Si llego al límite, se corta mi grabación?', 'Nunca. La grabación y la transcripción siguen siendo gratis; el límite solo aplica a la IA.'],
        ['¿En qué idiomas funciona?', 'En español e inglés. Puedes grabar en un idioma y recibir el resumen en el otro.'],
        ['¿Cómo obtengo el descuento de estudiante?', 'Verifica tu correo escolar desde la app y el 40% se aplica al plan mensual o anual.'],
      ],
    },
    final: {
      title: 'Que no se te escape nada.',
      small: 'Gratis para empezar · iPhone y Android',
    },
    footer: { pricing: 'Precios' },
  },

  en: {
    description: 'Notara turns your voice into clear notes, summaries and study material, with a single button.',
    nav: {
      home: 'Notara, home',
      sections: 'Sections',
      links: [['modos', 'Modes'], ['estudiar', 'Study'], ['privacidad', 'Privacy'], ['precios', 'Pricing'], ['preguntas', 'FAQ']],
      download: 'Download free',
    },
    hero: {
      chipNew: 'New',
      chip: 'For iPhone and Android',
      title: <>Record. <span>Notara</span> does the rest.</>,
      lead: 'Tap a button and Notara turns your classes, meetings and ideas into clear notes, summaries and study material. Transcription happens on your phone, even offline.',
      appStore: 'Download on the App Store',
      googlePlay: 'Google Play',
      pick: 'Pick a mode and tap the record button on the phone',
      modesAria: 'Recording mode',
    },
    phone: {
      aria: 'Notara home screen',
      today: 'For today',
      start: 'Start recording',
      stop: 'Stop recording',
      hint: 'Tap to record',
      onPhone: '📱 On your phone',
      star: 'Mark an important moment',
    },
    modes: {
      clase: {
        name: 'Class', greet: 'Ready for class, Alan?',
        today: ['Review Biology: 12 cards', 'Summarize "History of Mexico"', 'Continue Monday\'s Calculus'],
        live: ['Okay, today we\'re covering cellular respiration.', 'It starts with glycolysis, in the cytoplasm.', 'This will be on the exam: mitochondria make almost all the ATP.', 'Then the Krebs cycle, inside the mitochondria.']
      },
      reunion: {
        name: 'Meeting', greet: 'Shall we start the meeting?',
        today: ['Summarize "Meeting with Ana"', '2 tasks for Friday', 'Pick up the quarterly plan'],
        live: ['Thanks for coming, let\'s go over the budget.', 'Marketing is asking for 10% more for the launch.', 'So it\'s settled: Ana sends the draft on Friday.', 'And you review the numbers before Thursday.']
      },
      personal: {
        name: 'Personal', greet: 'What are we recording today, Alan?',
        today: ['Continue Monday\'s ideas', 'Summarize "Trip to Oaxaca"', 'Record today\'s reflection'],
        live: ['Note to self: the Oaxaca trip.', 'Better to go in the rainy season, fewer people.', 'I want to take a cooking class in Teotitlán.', 'Ask Sofía about the hotel.']
      }
    },
    modeSection: {
      eyebrow: 'Three modes, one button',
      title: 'Everything you hear has its place.',
      lead: 'The color tells you which mode you\'re in without reading a thing. And if you record a meeting in Class mode, Notara lets you know.',
      cards: {
        clase: {
          text: 'Your class becomes a summary, questions and flashcards ready for the exam.',
          tabs: ['Summary', 'Questions', 'Flashcards', 'Transcript'],
          meta: 'Biology · Oct 3', title: 'Cellular respiration',
          items: ['⭐ 12:40 Mitochondria make almost all the ATP.', 'Glycolysis happens in the cytoplasm.']
        },
        reunion: {
          text: 'Talk with your team. Notara writes down the decisions, the tasks and who owns each one.',
          tabs: ['Summary', 'Decisions & tasks', 'Transcript'],
          meta: 'Meeting with Ana · Oct 8', title: 'Quarterly budget',
          items: ['Ana sends the draft · Friday', 'You review the numbers · Thursday']
        },
        personal: {
          text: 'Think out loud. Your loose ideas end up organized and easy to pick up again.',
          tabs: ['Summary', 'Ideas', 'Transcript'],
          meta: 'Monday ideas · Oct 6', title: 'Trip to Oaxaca',
          items: ['Go in the rainy season, fewer people.', '⭐ 02:10 Cooking class in Teotitlán.']
        }
      }
    },
    cycle: {
      title: 'Talk today, study tomorrow.',
      steps: [
        ['Record', 'One tap and you\'re set. Mark what matters with ⭐ while you listen.'],
        ['Understand', 'A summary and key points in seconds, with your ⭐ moments first.'],
        ['Study', 'Questions, flashcards and quizzes made from what you heard.'],
        ['Review', 'Every day, "For today" reminds you what to review.'],
      ]
    },
    study: {
      eyebrow: 'Study',
      title: 'From class to quiz in seconds.',
      lead: 'Notara reads your class and asks you what matters. Every answer takes you to the exact minute in the audio.',
      ticks: [
        <><b>Flashcards without making flashcards.</b> They build themselves from every note.</>,
        <><b>Quizzes from your own notes.</b> Miss one and you hear the teacher's explanation.</>,
        <><b>Streaks and confetti.</b> A small reward for coming back every day.</>,
      ],
      meta: 'Biology · Review', count: '7 of 12',
      cardAria: 'Flashcard, tap to flip',
      question: 'Question', q: 'Which organelle produces most of the cell\'s ATP?', reveal: 'Tap to see the answer',
      answer: 'Answer', a: 'The mitochondria, through cellular respiration.', listen: '▶ Listen at 12:40',
      again: 'Again', knew: 'Got it', streak: '🔥 5-day streak',
    },
    chat: {
      me: 'What\'s still pending for Friday?',
      ai: 'Ana sends the budget draft on Friday. Before that, on Thursday, you review the marketing numbers.',
      sources: ['Meeting with Ana · Oct 8 · 14:05', 'Team · Oct 9 · 03:22'],
      ask: 'Ask your notes',
      eyebrow: 'Chat with your notes',
      title: 'Your notes already have the answers.',
      lead: 'Ask by voice or by typing. Notara answers with what was said and cites the source; one tap takes you to that moment.',
      ticks: [
        <><b>It organizes itself.</b> Suggested folders and tags for every note.</>,
        <><b>Search everything you recorded.</b> Find the exact minute, not just the note.</>,
      ],
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Your voice never leaves your phone.',
      cards: [
        ['📱 On your phone', 'Offline transcription', 'Recording and transcribing happen on your device. It\'s free, unlimited and works in airplane mode.'],
        ['☁️ In the cloud, if you want', 'You always know where', 'Summaries and chat use the cloud only with your account, and the app always shows you where each thing is processed.'],
        ['🔒 Private mode · Pro', 'Everything stays with you', 'Turn on private mode and nothing leaves your phone, neither the audio nor the text.'],
      ],
      more: <>The details are in our <Link to="/privacy" style={{ color: 'var(--on)', fontWeight: 600 }}>privacy notice</Link>.</>,
    },
    voice: {
      aria: 'How Notara feels',
      quote: <>Light as a note. <em>Smart as a tutor.</em></>,
      traits: [
        ['Calm', 'A clean screen and a single button. Nothing rushes you.'],
        ['Smart', 'It listens, summarizes and quizzes you so you learn.'],
        ['Warm', 'Soft colors that breathe with your voice.'],
        ['Discreet', 'Your voice stays on your phone.'],
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Free forever. Pro when you need it.',
      lead: 'Recording and transcribing are never charged. Pro removes the AI limits.',
      billAria: 'Billing period', year: 'Yearly', save: 'Save 37%', month: 'Monthly',
      free: {
        name: 'Free', per: 'forever',
        fine: 'Everything you need to record and study. AI limits refill every week.',
        ticks: [
          <><b>Unlimited transcription</b> on your phone</>,
          <><b>3 AI summaries or quizzes</b> per week</>,
          <><b>5 chat questions</b> per week</>,
          <>Organization and search across all your notes</>,
        ],
        cta: 'Start for free',
      },
      pro: {
        name: 'Notara Pro',
        prices: {
          year: ['$59.99', 'per year', 'That\'s $5.00 a month. Try 3 days free, cancel anytime.', 'Try 3 days free'],
          month: ['$7.99', 'per month', 'Cancel anytime. The 3-day free trial is only on the yearly plan.', 'Upgrade to Pro']
        },
        ticks: [
          <><b>Unlimited AI:</b> summaries, quizzes and chat</>,
          <><b>Private mode,</b> everything on your phone</>,
          <><b>Sync</b> across your devices</>,
          <><b>Export</b> your notes (coming soon)</>,
        ],
      },
      student: <><b>Students: 40% off</b> with your school email. Prices in USD; in Latin America you'll see local prices. See the <Link to="/terms" style={{ color: 'var(--on)' }}>subscription terms</Link>.</>,
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'What people ask us most.',
      items: [
        ['Does it work offline?', 'Yes. Recording and transcribing happen on your phone, so it works in a classroom with no signal or in airplane mode. Once you\'re back online, Notara creates any summaries you have pending.'],
        ['Do I need to create an account?', 'Not to record or transcribe. You only need an account the first time you use cloud AI or if you want to sync your notes.'],
        ['When do the free limits refill?', 'Every week. You get 3 AI summaries or quizzes and 5 chat questions per week, and the app shows how many you have left.'],
        ['If I hit the limit, does my recording stop?', 'Never. Recording and transcription stay free; the limit only applies to AI.'],
        ['What languages does it support?', 'Spanish and English. You can record in one language and get the summary in the other.'],
        ['How do I get the student discount?', 'Verify your school email in the app and the 40% applies to the monthly or yearly plan.'],
      ],
    },
    final: {
      title: 'Never miss a thing.',
      small: 'Free to start · iPhone and Android',
    },
    footer: { pricing: 'Pricing' },
  },
};
