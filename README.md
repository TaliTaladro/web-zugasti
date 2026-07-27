# José Zugasti — Web

Sitio público del escultor José Zugasti Arizmendiarrieta (Eibar, 1952 – Donostia-San Sebastián, 2024).
Build estático (HTML + CSS + JS, sin dependencias ni framework). Publicado en GitHub Pages sobre el dominio `josezugasti.com`.

## Estructura

```
josezugasti/
├── index.html            Portada + navegación por apartados
├── biografia.html        1 · Biografía
├── obra.html              2 · Obra destacada (5 galerías: dibujos, evolución a la 3D, litografías, escultura, obra pública)
├── premios.html           3 · Premios y reconocimientos
├── exposiciones.html      4 · Exposiciones (individuales y colectivas, listado completo)
├── prensa.html             5 · Prensa
├── taller.html             6 · Taller
├── assets/
│   ├── site.css           Tokens de diseño + todos los componentes
│   ├── site.js            Nav móvil · animación al hacer scroll · lightbox de galerías
│   └── img/                Fotografías del archivo familiar, exportadas a formato web
├── CNAME                  Dominio para GitHub Pages
├── .nojekyll              Evita el procesado Jekyll de Pages
└── README.md
```

## Apartados del nivel público

1. **Biografía** — texto + fotos (José falleció en Donostia-San Sebastián, no en Eibar).
2. **Obra destacada** — 92 obras por categoría: Dibujos · Evolución a la 3D · Litografías · Escultura · Obra pública.
3. **Premios y reconocimientos** — premios, con foto en 1981 y 2024, y colecciones públicas.
4. **Exposiciones** — 39 individuales y más de un centenar de colectivas (1978-2024), con fotos de sala.
5. **Prensa** — recortes del archivo familiar y enlaces públicos.
6. **Taller** — foto + visita bajo cita previa.

## Pendientes

- Confirmar con la familia dos fechas de Premios que no cuadran con el archivo documental (ver `CLAUDE.md`).
- Localizar dos recortes de prensa de 1985 cuyos accesos directos del archivo original están rotos.
- Datar y titular las obras que figuran como «Sin título».

## Nivel privado

El área privada (inventario, valoraciones, documentos legales, autenticaciones) **no** va en este repositorio ni en GitHub Pages. Se resolverá aparte (Cloudflare Access / Supabase). No incluir documentos sensibles aquí.
