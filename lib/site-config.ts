// Personaliza aquí todos los textos del sitio antes de desplegarlo 💛
export const siteConfig = {
  // Nombre de quien recibe el regalo
  herName: "Mice",
  // Nombre de quien lo envía
  myName: "Ciri",

  // Fecha en que empezó la relación (usada por el contador). Formato: "YYYY-MM-DDTHH:mm:ss"
  startDate: "2026-06-03T00:00:00",

  hero: {
    title: "Para mi lugar favorito en el mundo",
    emoji: "💛",
    subtitle:
      "Cada flor amarilla que veo me recuerda a ti. Este pequeño rincón es para decirte, una vez más, cuánto te quiero.",
  },

  letter: {
    heading: "Una carta para ti",
    // Puedes escribir varios párrafos separados por elementos del arreglo
    paragraphs: [
      "Desde que llegaste a mi vida, todo se volvió un poco más amarillo, un poco más cálido, un poco más tuyo.",
      "Quiero que cada vez que veas una flor amarilla, te acuerdes de esto: que hay alguien que elige quererte, todos los días, sin condiciones.",
      "Gracias por tu risa, por tu paciencia, por cada momento compartido. Eres mi persona favorita en este mundo entero.",
    ],
    signature: "Con todo el corazón",
  },

  song: {
    title: "Flores Amarillas",
    artist: "Floricienta",
    lyrics: [
      "Él sabía que ella sabía",
      "que él la amaba en silencio...",
      "y un día, sin decir nada,",
      "le regaló flores amarillas.",
    ],
    // Coloca tu archivo de audio en /public/audio/flores-amarillas.mp3
    // Si el archivo no existe, se mostrará un reproductor simulado con visualizador animado.
    audioSrc: "/audio/flores-amarillas.mp3",
  },

  gallery: {
    heading: "Nuestros momentos",
    subheading: "Pequeños instantes que se volvieron eternos",
    // type: "photo" usa src (imagen) · type: "video" usa src (mp4, autoplay silencioso en loop)
    // type: "emoji" es el modo de respaldo si no tienes foto/video todavía
    items: [
      { type: "photo", src: "/images/momento-1.jpg", caption: "Kitty feli mode 🎀" },
      { type: "video", src: "/videos/momento-1.mp4", caption: "Nuestro momento favorito" },
      { type: "video", src: "/videos/momento-2.mp4", caption: "Así nos reímos siempre" },
      { type: "video", src: "/videos/momento-3.mp4", caption: "Un instante que no quiero olvidar" },
      { type: "video", src: "/videos/momento-4.mp4", caption: "Contigo hasta en lo simple" },
    ] as Array<
      | { type: "photo"; src: string; caption: string }
      | { type: "video"; src: string; caption: string }
      | { type: "emoji"; emoji: string; caption: string }
    >,
  },

  footer: {
    message: "Te amo hoy, mañana y siempre.",
  },
};

export type SiteConfig = typeof siteConfig;
