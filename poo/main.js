//Para que el archivo main se pueda importar cosas tiene que ser catalogado como modulo
import Vehiculo from "./vehiculo.js";
import Persona from "./persona.js";

function invocar(){
    let kilometros = 50000
    let marca = 'Ford'
    //crear la instancia de la clase Vehiculo
    const vehiculo = new Vehiculo(kilometros,marca)
    vehiculo.mostrar_km()
    //Creamos la instancia de la clase Persona
    const persona = new Persona()
    persona.apellido = 'Perez'
    persona.nombre = 'Juan'
    persona.mostrar_datos_personales()
}
document.getElementById("btn").addEventListener("click",invocar)