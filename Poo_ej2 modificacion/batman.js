export default class Batman {
    constructor(){
    }
    async mostrar_pelis(){
        const peliculas = await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
        const lista_de_peliculas = await peliculas.json()
        let filas = []
        for (const pelis of lista_de_peliculas.Search) {
          let fila = `
          <div class="col-lg-3">
            <div class="card" style="width: 18rem;">
              <img src="${pelis.Poster}" class="card-img-top" alt="Poster de la pelicula">
              <div class="card-body">
                <h5 class="card-title">${pelis.Title}</h5>
                <p class="card-text">Año de lanzamiento: ${pelis.Year}</p>
              </div>
            </div>
          </div>
          `
            console.log(`
            ID: ${pelis.imdbID}
            Nombre: ${pelis.Title}
            Año de lanzamiento: ${pelis.Year}
            Poster: ${pelis.Poster}
            `)
          filas.push(fila)
          document.getElementById("div_r").innerHTML = filas.join('')
        }
    }
}
