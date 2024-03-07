import { flechas } from "./constantes";
import {
  Pelicula,
  TipoFlecha,
  nombreClases,
  listaPeliculasConfiguracion,
} from "./modelo";
import { filtrarPeliculas } from "./motor";

const añadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;

  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);
  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });
  contenedor.appendChild(divFlecha);
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  añadirFlecha(peliculaContenedor, "izquierda");
  añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPeliculas = (
  peliculas: Pelicula[],
  peliculaContenedor: HTMLDivElement
): void =>
  peliculas.forEach((pelicula) => {
    pintarPelicula(pelicula, peliculaContenedor);
  });

const pintarPelicula = (
  pelicula: Pelicula,
  peliculaContenedor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(
    nombreClases.pelicula,
    peliculaContenedor
  );
  divPelicula.innerHTML = `
  <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
  <h3>${pelicula.titulo}</h3>
  `;
};

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (
  nombreClase: string,
  contenedor: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  div.id = nombreClase;
  contenedor.appendChild(div);
  return div;
};

const agregarTitulo = (
  tituloSeccion: string,
  contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

export const pintarListaPeliculas = (
  listaPeliculas: Pelicula[],
  configuracion: listaPeliculasConfiguracion
): void => {
  // obtener div principal
  const appDiv = document.getElementById("principal");
  // comprobar que existe
  if (appDiv && appDiv instanceof HTMLDivElement) {
    // crear un div para las películas
    const crearDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);

    // crear titulo
    agregarTitulo(configuracion.titulo, crearDivPeliculas);

    // crear div lista de películas
    const divListaPeliculas = crearContenedor(
      nombreClases.listaPeliculas,
      crearDivPeliculas
    );

    // crear div contenedor de peliculas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor,
      divListaPeliculas
    );

    // añadir flechas
    pintarFlechas(divPeliculasContenedor);

    const peliculasFiltradas = filtrarPeliculas(
      listaPeliculas,
      configuracion.filtro
    );

    // pintar la pelicula
    pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};
