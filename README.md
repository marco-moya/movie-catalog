# 🎬 Movies Track

[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://moviestrack.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## 📋 Descripción del Proyecto

**Movies Track** es una aplicación web de catálogo y buscador de películas que permite a los usuarios explorar películas en tendencia, filtrar por género y conocer los detalles más importantes de cada película. La aplicación consume datos en tiempo real de [The Movie Database (TMDB) API](https://developer.themoviedb.org/).

### ✨ Características principales

- 🎠 **Carrusel interactivo** de películas en tendencia con navegación fluida
- 🔍 **Buscador de películas** por título
- 🏷️ **Filtrado por géneros** cinematográficos
- 📄 **Página de detalles** con información completa de cada película
- 🎯 **Películas relacionadas** según el contenido visualizado
- 📱 **Diseño responsive** adaptable a cualquier dispositivo
- ⏳ **Loading skeletons** para mejor experiencia de usuario durante la carga

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estructura semántica del sitio |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilos y diseño visual |
| ![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white) | Preprocesador CSS con variables, mixins y modularización |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica de la aplicación (ES6+ Modules) |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | Cliente HTTP para consumo de API |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat&logo=fontawesome&logoColor=white) | Iconografía |

### 📦 API Externa

- **The Movie Database (TMDB)** - Proporciona información actualizada sobre películas, géneros, tendencias y más.

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a internet (para consumir la API de TMDB)
- (Opcional) Servidor local como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para desarrollo

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/marco-moya/movie-catalog.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd movie-catalog
   ```

3. **Abre el proyecto**
   
   Opción A - Con Live Server (recomendado):
   - Abre el proyecto en VS Code
   - Haz clic derecho en `index.html`
   - Selecciona "Open with Live Server"
   
   Opción B - Directamente:
   - Abre `index.html` en tu navegador

### Compilación de SASS (desarrollo)

Si deseas modificar los estilos:

```bash
# Instala SASS globalmente
npm install -g sass

# Compila los archivos SCSS
sass --watch scss/style.scss:css/style.css
```

---

## 📖 Ejemplos de Uso

### Página Principal
Accede a la página principal para ver las películas en tendencia y navegar por géneros.

```
https://moviestrack.netlify.app/
```

### Búsqueda de Películas
Utiliza la barra de búsqueda para encontrar películas por título.

```
https://moviestrack.netlify.app/search.html?search=inception
```

### Filtrar por Género
Explora películas de un género específico.

```
https://moviestrack.netlify.app/genre.html?genre=35-Comedia
https://moviestrack.netlify.app/genre.html?genre=28-Acción
https://moviestrack.netlify.app/genre.html?genre=27-Terror
```

### Ver Detalles de una Película
Consulta información detallada de una película específica.

```
https://moviestrack.netlify.app/movie.html?movieId=550
```

---

## 📁 Estructura del Proyecto

```
movie-catalog/
├── index.html          # Página principal
├── movie.html          # Página de detalles de película
├── genre.html          # Página de películas por género
├── search.html         # Página de resultados de búsqueda
├── assets/             # Recursos estáticos
├── css/
│   └── style.css       # Estilos compilados
├── js/
│   ├── api-rest.js     # Funciones de consumo de API
│   └── main.js         # Lógica principal y navegación
└── scss/
    ├── style.scss      # Archivo principal SCSS
    ├── abstracts/      # Variables y mixins
    ├── base/           # Estilos base y reset
    ├── components/     # Componentes reutilizables
    └── layout/         # Estructura del layout
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Áreas de mejora sugeridas

- [ ] Implementar modo oscuro/claro
- [ ] Agregar paginación infinita
- [ ] Incluir filtros avanzados
- [ ] Añadir sistema de favoritos (localStorage)
- [ ] Implementar PWA para uso offline

---

## 🔗 Enlaces

| Recurso | URL |
|---------|-----|
| 📂 Repositorio | [GitHub](https://github.com/marco-moya/movie-catalog) |
| 🌐 Demo (GitHub Pages) | [Ver Demo](https://marco-moya.github.io/movie-catalog) |
| 🚀 Demo (Netlify) | [Ver Demo](https://moviestrack.netlify.app/) |
| 📚 API Documentation | [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) |

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 👤 Autor

**Marco Moya**

- GitHub: [@marco-moya](https://github.com/marco-moya)

---

<p align="center">
  Hecho con ❤️ y JavaScript
</p>