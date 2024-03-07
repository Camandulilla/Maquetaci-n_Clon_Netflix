import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelo";

export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;

  switch (filtro.caracteristica) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);
    case "premios":
      return filtrarPeliculasPorPremios(peliculas);
    case "masVistas":
      return filtrarPeliculasMasVistas(peliculas);
    case "calificacion":
      return ordenarPeliculasPorCalificacion(peliculas);
    default:
      return peliculas;
  }
};

const filtrarPeliculasPorPremios = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.filter((pelicula) => pelicula.premioGalardon);

const filtrarPeliculasMasVistas = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.filter((pelicula) => pelicula.masVisto);

const ordenarPeliculasPorCalificacion = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.sort(
    (peliculaA, peliculaB) =>
      peliculaB.calificacionImdb - peliculaA.calificacionImdb
  );
