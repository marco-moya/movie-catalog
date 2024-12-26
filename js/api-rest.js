const d = document;
const apiAxios = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2VlNmFhMzYxZjgyYzhlOTExMTMxMzQ4NzdjNGU3YiIsIm5iZiI6MTczNDI5MDgyMS41MTMsInN1YiI6IjY3NWYyZDg1ZDZmNWU4NDU4YjhiNDU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbKFcKoY30LS6X0Gxq77gBLcqHMrmRNYTmHGwIoNFsc'
  },
  params: {
    "apiKey": "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2VlNmFhMzYxZjgyYzhlOTExMTMxMzQ4NzdjNGU3YiIsIm5iZiI6MTczNDI5MDgyMS41MTMsInN1YiI6IjY3NWYyZDg1ZDZmNWU4NDU4YjhiNDU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbKFcKoY30LS6X0Gxq77gBLcqHMrmRNYTmHGwIoNFsc"
  }
});

function createMovies(template, data, node) {
  const $template = d.getElementById(template).content;
  const $fragment = d.createDocumentFragment();
  data.forEach(movie => {
    $template.querySelector("img").setAttribute("src", `https://image.tmdb.org/t/p/w300/${movie.poster_path}`); // Asignar los atributos al template original
    $template.querySelector("img").setAttribute("alt", movie.title);
    const clone = $template.cloneNode(true); // Clonar el template
    clone.querySelector("li").addEventListener("click", (e) => { // Agregar el evento al clon
      const param = movie.id;
      location.href = `movie.html?movieId=${param}`;
    })
    $fragment.appendChild(clone); // Añadir el clon al fragmento
    d.querySelector(node).appendChild($fragment); // Finalmente agregar el fragmento al DOM
  });
}

function createMovieGenres(genres) {
  const $fragment = d.createDocumentFragment();
  genres.forEach(genre => {
    const $li = d.createElement("li");
    $li.textContent = genre.name;
    $li.addEventListener("click", e => { //Agrega un evento a cada genero
      const params = [genre.id, genre.name]; //Guarada el id y nombre del genero en una variable
      location.href = `genre.html?genre=${params.join("-")}`; //Agrega la variable en la url
    })
    $fragment.appendChild($li);
  });
  d.querySelector(".genres__list").appendChild($fragment);
}

function carousel(movies) {
  const $prevButton = d.querySelector(".btn-prev");
  const $nextButton = d.querySelector(".btn-next");
  const $carousel = d.querySelector(".carousel__movie-list");
  const $indicatorsContainer = d.querySelector(".carousel__indicators");
  let index = 0;
  const maxVisibleIndicators = 7;

  movies.forEach((_, i) => {
    const $button = d.createElement("button");
    $button.classList.add("indicator");
    if (i === index) $button.classList.add("active"); // Resaltar el primer punto
    $indicatorsContainer.appendChild($button);

    $button.addEventListener('click', () => {
      index = i;
      updateCarousel();
      updateIndicators();
    });
  });

  function updateCarousel() { // Actualizar la posición del carrusel
    const width = $carousel.clientWidth/movies.length;
    let translateX = `translateX(${-index * width}px)`
    $carousel.style.transform = translateX;
  }

  function updateIndicators() { // Actualizar la visualización de los puntos
    const $indicators = document.querySelectorAll('.carousel__indicators button');
    $indicators.forEach((indicator, i) => {
      // Resaltar el punto activo
      indicator.classList.toggle("active", i === index);
      // Mostrar u ocultar indicadores según el rango visible
    const start = Math.max(0, index - Math.floor(maxVisibleIndicators / 2));
    const end = Math.min(movies.length, start + maxVisibleIndicators);
    indicator.classList.toggle('hidden', i < start || i >= end);
    });
  }

  $prevButton.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : movies.length - 1;
    updateCarousel();
    updateIndicators();
  });
  
  $nextButton.addEventListener("click", () => {
    index = (index < movies.length - 1) ? index + 1 : 0;
    updateCarousel();
    updateIndicators();
  });
  
  window.addEventListener("resize", updateCarousel); // Ajustar la posición del carrusel al redimensionar la ventana
  updateIndicators();
}

export async function getTrendingMovies() {
  try {
    const {data} = await apiAxios("trending/movie/day?language=es");
    const movies = data.results;
    createMovies("template-carousel", movies, ".carousel__movie-list");
    carousel(movies);
  }catch(error) {
    console.log(error, "Trending");
  }
}

export async function getMovieGenres() {
  try {
    const {data} = await apiAxios("genre/movie/list?language=es");
    const genres = data.genres;
    createMovieGenres(genres);
  }catch(error) {
    console.log(error, "Generos");
  }
}

export async function getMoviesByGenre(id, title) {
  try {
    const {data} = await apiAxios("/discover/movie?language=es", {
      params: {
        with_genres: id
      }
    });
    const movies = data.results;
    createMovies("template-moviesByGenre", movies, ".genre__movie-list");
    d.querySelector(".genre__title").textContent = title;
  } catch(error) {
    console.log(error, "Genero");
  }
}

export async function getSearchMovie(query) {
  try {
    const {data} = await apiAxios("search/movie", {
      params: {
        query
      }
    });
    const movies = data.results;
    createMovies("template-search", movies, ".search__movie-list");
    d.querySelector(".search__title").textContent = `Busqueda para: ${query}`;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id) {
  try {
    const {data: movie} = await apiAxios(`movie/${id}?language=es`, {
      params: {
        id
      }
    });
    d.querySelector(".movie__backdrop").setAttribute("src", `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`);
    d.querySelector(".movie__backdrop").setAttribute("alt", `${movie.title}`);
    d.querySelector(".movie__poster").setAttribute("src", `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
    d.querySelector(".movie__poster").setAttribute("alt", `${movie.title}`);
    d.querySelector(".movie__title").textContent = movie.title;
    d.querySelector(".movie__overview").textContent = movie.overview;
    d.querySelector(".movie__vote-average p").textContent = movie.vote_average.toFixed(1) + " %";
    d.querySelector(".movie__runtime p").textContent = movie.runtime + " min.";
    d.querySelector(".movie__release-date p").textContent = movie.release_date;
    createMovieGenres(movie.genres);
  } catch (error) {
    console.log(error);
  }
}

export async function getRelatedMovies(id) {
  try {
    const {data} = await apiAxios(`movie/${id}/similar?language=es`);
    const movies = data.results;
    createMovies("template-carousel", movies, ".carousel__movie-list");
    carousel(movies)
  } catch (error) {
    console.log(error);
  }
}
