function mostrar_mensaje() {
    alert("Probando mi funcion")
}
function mostrar_en_consola() {
    const nombre_apellido = 'Guillermo Valenzuela el mas picante recontra pereyra'

    /*Forma 1 - sin template string*/

    console.log('nombresito del pibe: ' + nombre_apellido + ' uwu (Forma 1)')

    // Forma 2
    console.log(`nombresito del pebete ${nombre_apellido} uwu (Forma 2)`)
}
function validar() {
    const calificacion = parseInt(prompt('decime la notita a ver como te fue'));
    /*if(calificacion>=7){
        alert('Ta aprobao mi rey')
    }else{
        alert('Nos recontra mil vimo en diecembre pa')
    }*/
    (calificacion >= 7) ? alert('Ta aprobao mi rey') : alert('Nos recontra mil vimo en diciembre pa')
}
function calcular(){
const number=prompt('Ingreseme un numerito mi rey: ');
const resultado = number * 10
return resultado
}
function visualizar(){
    const respuesta= calcular()
    alert(respuesta)
}