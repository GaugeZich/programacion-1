//Crear un array
let series = ['Breaking bad','Okupa','Narco','Casados con hijos','Peaky Blinders'];
//Creamos un arreglo de string
//Como conocer la longitud de un array?
const longitud = series.length;
console.log('Longitud: ' +longitud);
//Como acceder a un elemento del arreglo haciendo uso del indice
const primero = series[0]
console.log('Primer elemento: ' +primero)
//Como accedo al ultimo elemento
const ultimo = series[longitud-1]
console.log('Ultimo elemento: ' +ultimo)
//Recorrer un arreglo haciendo uso de un foreach
series.forEach((element,index) => {
    console.log(index+ ':'+element)
});
//Recorrer un arreglo haciendo uso de un foreach de otra forma
/*
series.forEach(element => {
    console.log('Series: '+element)
*/
//Como agregar un elemento al final de un array
series.push('Dragon Ball')
console.log(series)
//Como eliminar el ultimo elemento de un arreglo
series.pop()
console.log(series)
//Como agregar un elemento al inicio de un arreglo
series.unshift('Grey\'s Anatomy')
console.log(series)
//Como eliminar el primer elemento
series.shift()
console.log(series)
//Como obtener la posicion de un elemento
const indice = series.indexOf("Casados con hijos")
console.log('Casados con hijos esta en la posicion: ' +indice)
//Como eliminar un unico elemento teniendo su posicion
series.splice(indice,1)
console.log(series)
//2do caso - Como eliminar mas de un elemento
const pos = 1;
const numeroelementos = 2;
series.splice(pos,numeroelementos)
console.log(series)
/*
Como eliminar elementos de arreglos y guardarlos en una constante
const elementoseliminados = series.splice(pos,numeroelementos)
console.log(elementoseliminados)
*/
//Copiar un array
let copia = series.slice()
copia.push('Dragon ball')
console.log(copia)
console.log(series)