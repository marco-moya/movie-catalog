const d = document;
import { getTrendingMovies } from "./api-rest.js";
import { getMovieGenres } from "./api-rest.js";
import { getMoviesByGenre } from "./api-rest.js";
import { getSearchMovie } from "./api-rest.js";
import { getMovieById } from "./api-rest.js";
import { getRelatedMovies } from "./api-rest.js";

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("HashChange", navigator, false);
function navigator() {
  if (location.pathname.startsWith("/movie.html")) {
    loadingSkeleton(".genres__list", "skeleton-genres", 4);
    loadingSkeleton(".carousel__movie-list", "skeleton-genres", 20);
    moviePage();
  } else if (location.pathname.startsWith("/genre.html")) {
    loadingSkeleton(".genre__movie-list", "skeleton-genres", 20);
    genrePage();
  } else if (location.pathname.startsWith("/search.html")) {
    loadingSkeleton(".search__movie-list", "skeleton-search", 20);
    searchPage();
  } else {
    loadingSkeleton(".carousel__movie-list", "skeleton-carousel", 20);
    loadingSkeleton(".genres__list", "skeleton-genres", 19);
    homePage();
  }
}

function loadingSkeleton(node, template, limit) {
  const $template = d.getElementById(template).content;
  const $fragment = d.createDocumentFragment();
  for (let i = 0; i < limit; i++) {
    $template.querySelector("li").classList.add("skeleton");
    const $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  }
  d.querySelector(node).appendChild($fragment);
}

function homePage() {
  getTrendingMovies();
  getMovieGenres();
}

function moviePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");
  getMovieById(movieId);
  getRelatedMovies(movieId);
}

function genrePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const [idGenre, titleGenre] = urlParams.get("genre")?.split("-");
  getMoviesByGenre(idGenre, titleGenre);
}

function searchPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("search");
  getSearchMovie(query);
}

document.addEventListener("click", e => {
  if(e.target.matches(".home i") || e.target.matches(".home")) {
    window.location.href = "index.html";
  }

  if(e.target.matches(".search i") || e.target.matches(".search")) { // Activa buscador
    const positionY = window.scrollY;
    window.scrollTo(0, positionY);
    d.querySelector(".modal").style.transform = `translateY(${positionY}px)`;
    d.body.style.overflow = 'hidden';
  }

  if(e.target.matches(".btn-goOut i")) { // Desactiva buscador
    d.querySelector(".modal").style.transform = "translateY(-100vh)";
    d.body.style.overflow = '';
  }

  if(e.target.matches("#btn-search i")) { // Buscar query
    const query = d.getElementById("query").value;
    if(query.length === 0) {
      e.preventDefault();
    } else {
      location.href = `search.html?search=${query}`;
    }
  }

  if(e.target.matches(".btn-goBack i")) { // Retroceder en el historial
    history.back();
  }

  if (e.target.matches(".btn-arrowUp i")) { // Regresa al top de la ventana
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

window.addEventListener("scroll", e => {
  if (window.scrollY > 1000) {
    document.querySelector(".btn-arrowUp").classList.remove("btn-arrowUp--hide");
  } else {
    document.querySelector(".btn-arrowUp").classList.add("btn-arrowUp--hide");
  }
})

d.addEventListener("keyup", e => {
  if(e.key === "Enter") { // Buscar query
    const query = d.getElementById("query").value;
    if(query.length === 0) {
      e.preventDefault();
    } else {
      location.href = `search.html?search=${query}`;
    }
  }
})

window.addEventListener('beforeunload', () => {
  d.body.style.overflow = '';
});
