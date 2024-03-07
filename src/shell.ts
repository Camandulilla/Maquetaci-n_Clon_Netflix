import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, { titulo: "Todas las peliculas" });

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas de Aventuras",
    filtro: {
      genero: "Aventuras",
      caracteristica: "genero",
    },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas Familiares",
    filtro: {
      genero: "Familiar",
      caracteristica: "genero",
    },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas de Animación",
    filtro: {
      genero: "Animacion",
      caracteristica: "genero",
    },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas más vistas",
    filtro: { caracteristica: "masVistas" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas con mejor calificación",
    filtro: { caracteristica: "calificacion" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas con premios",
    filtro: { caracteristica: "premios" },
  });
});
