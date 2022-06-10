let consolas = ['Playstation','Xbox','Nintendo game cube','Sega DreamCast','Game Boy Advanced']
const indice = consolas.indexOf("Nintendo game cube")
consolas.splice(indice,2)
consolas.push('Nintendo 64')
consolas.unshift('Nintendo Wii')
console.log(consolas)
const imprimir = () => {
    const longitud = consolas.length;
    const ultimo = consolas[longitud-1]
    const indice1 = consolas.indexOf("Xbox")
    document.getElementById("p1").textContent = 'La longitud es de: '+longitud+ ' El ultimo elemento es: '+ultimo+' Xbox esta en la posicion: '+indice1
}
document.getElementById("btn").addEventListener("click",imprimir)
function generar_tabla(){
    let filas= []
    consolas.forEach((element,index) => {
        let fila  =`
        <tr>
            <td>${index+1}</td>
            <td>${element}</td>
        </tr>
        `
        filas.push(fila)
    });
    document.getElementById("tb").innerHTML = filas.join('')
}
generar_tabla()