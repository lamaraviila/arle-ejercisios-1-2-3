// 7. Clase Película y CatalogoPeliculas
class Pelicula {
  constructor(public titulo: string, public duracion: number, public director: string) {}
}

class CatalogoPeliculas {
  private peliculas: Pelicula[] = [];

  agregarPelicula(pelicula: Pelicula) {
    this.peliculas.push(pelicula);
  }

  buscarPorTitulo(titulo: string) {
    return this.peliculas.filter((pelicula) => pelicula.titulo.includes(titulo));
  }

  filtrarPorDirector(director: string) {
    return this.peliculas.filter((pelicula) => pelicula.director === director);
  }
}

const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula('La La Land', 128, 'Damien Chazelle');
const pelicula2 = new Pelicula('Inception', 148, 'Christopher Nolan');
const pelicula3 = new Pelicula('The Social Network', 120, 'David Fincher');

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);

const peliculasConLa = catalogo.buscarPorTitulo('La');
const peliculasDeNolan = catalogo.filtrarPorDirector('Christopher Nolan');

console.log('Películas con "La" en el título:', peliculasConLa);
console.log('Películas dirigidas por Christopher Nolan:', peliculasDeNolan);