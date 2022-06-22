let criptos = ["Bitcoin", "Ethereum", "Tether", "BNB" , "Cardano" , "Dai" , "Helium", "Shiba Inu" , "Tron" , "Cronos", "Solana"]
criptos.unshift("Stellar")
//Agregamos Stellar al inicio del arreglo
const indice = criptos.indexOf("Shiba Inu")
criptos.splice(indice,2)
//Obtenemos el indice de Shiba Inu y los eliminamos con splice. El 2 sirve para eliminar el elemento y el que le sigue
criptos.push("Gate")
//Agregamos Gate al final del arreglo
criptos.forEach((element,index) => {
    console.log(index+ ':'+element)
});
//Recorremos el arreglo con un forEach para mostrarlo en consola con su indice
function mostrar_criptos(){
    const longitud = criptos.length;
    //Obtenemos la longitud del arreglo
    const ultimo = criptos[longitud-1]
    //Obtenemos cual es el ultimo elemento gracias a la longitud del arreglo restandole 1
    const indice1 = criptos.indexOf("Helium")
    //Obtenemos el indice de Helium
    let parrafo = `
    La longitud del arreglo es de: ${longitud}
    <br>
    El ultimo elemento es: ${ultimo}
    <br>
    La criptomoneda Helium esta en la posicion: ${criptos[indice1]}
    `
    document.getElementById("p1").innerHTML = parrafo
    //Guardamos el texto y lo insertamos en el p1
}
const mostrar_en_lista = () => {
    let filas = []
    criptos.forEach((element) => {
        let fila = `<li class="list-group-item list-group-item-success">${element}</li>`
        filas.push(fila)
    });
    document.getElementById("ul").innerHTML = filas.join('')
}
const boton = document.getElementById("btn").addEventListener("click",mostrar_en_lista)