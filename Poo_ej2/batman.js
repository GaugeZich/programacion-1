export default class Batman {
    constructor(){
    }
    async mostrar_pelis(){
        const peliculas = await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
        const lista_de_peliculas = await peliculas.json()
        for (const pelis of lista_de_peliculas.Search) {
            console.log(`
            ID: ${pelis.imdbID}
            Nombre: ${pelis.Title}
            Año de lanzamiento: ${pelis.Year}
            Poster: ${pelis.Poster}
            `)
        }
    }
}