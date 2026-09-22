# 💛 Flores Amarillas

Sitio web romántico e interactivo hecho con **Next.js (App Router)**, **Tailwind CSS** y **Framer Motion**, pensado para regalarse a través de un código QR.

## Personalización

Antes de desplegar, edita **`lib/site-config.ts`**:

- `herName` / `myName` — nombres.
- `startDate` — fecha de inicio de la relación (para el contador).
- `hero` — título y subtítulo del encabezado.
- `letter.paragraphs` — el texto de la carta.
- `song` — letra y ruta del audio.
- `gallery.items` — momentos especiales (emoji + descripción). Puedes reemplazar los emojis por imágenes reales editando `components/Gallery.tsx`.
- `footer.message` — mensaje final.

### Audio de la canción (opcional)

Por derechos de autor no se incluye el audio real de "Flores Amarillas". Si querés reproducción real:

1. Consigue el archivo (`.mp3`).
2. Colócalo en `public/audio/flores-amarillas.mp3`.
3. Si el archivo no existe, el sitio muestra automáticamente un reproductor **simulado** con visualizador animado (no rompe nada).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

### Opción A — Vercel CLI (más rápido)

```bash
npm install -g vercel
vercel login          # inicia sesión con tu cuenta
vercel --prod          # despliega directamente desde esta carpeta
```

La CLI te va a preguntar el nombre del proyecto y confirmar la configuración (Next.js se detecta automáticamente). Al finalizar te entrega la URL de producción, por ejemplo:

```
https://flores-amarillas.vercel.app
```

Esa URL es la que usás para generar el código QR.

### Opción B — Integración con Git (recomendada para actualizaciones futuras)

1. Sube este repositorio a GitHub (ya está listo en la rama actual).
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada.
4. Haz clic en **Deploy**.
5. Cada vez que hagas `git push`, Vercel vuelve a desplegar automáticamente.

## Generar el código QR

Una vez que tengas la URL de Vercel (ej. `https://flores-amarillas.vercel.app`):

1. Usa cualquier generador de QR (por ejemplo [qr-code-generator.com](https://www.qr-code-generator.com) o el propio panel de Vercel/otras apps).
2. Pega la URL y descarga el código.
3. Imprímelo o compártelo — al escanearlo se abrirá el sitio directo en el celular.

## Stack técnico

- **Next.js 16** (App Router)
- **Tailwind CSS** (paleta cálida: amarillo, dorado, crema, pastel)
- **Framer Motion** (animaciones: pétalos flotantes, ramo que florece, transiciones)
- Totalmente responsive, optimizado para verse en móvil.
