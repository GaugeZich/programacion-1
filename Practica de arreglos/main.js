let lenguajes = ['Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby'];

const mostrar = () => {
const longitud = lenguajes.length
const ultimo = lenguajes[longitud-1]
const tercer = lenguajes[2]
document.getElementById("h1_m").textContent = 'Longitud: '+longitud+ ' Ultimo: ' +ultimo+ ' Tercero: ' +tercer; 
}
const boton = document.getElementById("btn_m")
boton.addEventListener("click",mostrar)

function recorrer(){
    lenguajes.forEach((element,index) => {
    console.log(index+ ':'+element)
    });
}

lenguajes.push('Go')
lenguajes.shift()
lenguajes.unshift('Kotlin')
const indice = lenguajes.indexOf("Java")
lenguajes.splice(indice,2)
console.log(lenguajes)