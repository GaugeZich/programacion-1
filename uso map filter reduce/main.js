const tareas = [
    {
        nombre: 'Testeando soft',
        duracion: 25
    },
    {
        nombre: 'Implementación de alta cliente',
        duracion: 90
    },
    {
        nombre: 'Actualiza cliente',
        duracion: 40
    },
    {
        nombre: 'Deploy de soft',
        duracion: 120
    },
    {
        nombre: 'Corrección de bug',
        duracion: 180
    }
]
//Uso del metodo map()
let nombres = []
tareas.forEach(element => {
    nombres.push(element.nombre)
});
/*Aplicando Map() con varias lineas
let nombres2 = tareas.map(tarea => {
    return tarea.nombre
})
console.log(nombres2)
*/
//Aplicando map() con 1 linea 
let nombres3 = tareas.map(tarea => tarea.nombre)
console.log(nombres3)

//Uso de filter
let tareas_prolongadas = []
tareas.forEach(element => {
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }
});
console.log(tareas_prolongadas)

//Filtrar haciendo uso del metodo filter()
const tareas_prolongadas2 = tareas.filter(tarea =>{
    return tarea.duracion >=120
})
console.log(tareas_prolongadas2)
/*Aplicando filter en una sola linea
const tareas_prolongadas3 = tareas.filter(tarea => tarea.duracion >= 120)
console.log(tareas_prolongadas3)
*/