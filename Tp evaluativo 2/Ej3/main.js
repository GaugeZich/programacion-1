const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
        lenguaje: 'TypeScript',
        patron: 'MVVM',
        spa: 'si'
    }
   }


const mostrar_en_consola = () => {
    const {lenguaje, patron, spa} = framework.características
    const {titulo,nombre} = framework

    console.log(`
        Titulo: ${titulo}
        Nombre: ${nombre}

        Caracteristicas:
        Lenguaje: ${lenguaje}
        Patron: ${patron}
        Spa: ${spa}
`)
}
const boton = document.getElementById("btn").addEventListener("click",mostrar_en_consola)