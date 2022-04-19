const calcular = (d1,d2,d3) => {
    const suma = parseInt(d1) + parseInt(d2) + parseInt(d3)
    const respuesta = (suma == 180) ? ('Es triangulo') : ('No es triangulo')
    return respuesta
}
const mostrar = () => {
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const dato3 = document.getElementById("dato3").value
    const resultado =(calcular(dato1,dato2,dato3))
    document.getElementById("h1_r").textContent = resultado;
}
const boton = document.getElementById("btn_r")
boton.addEventListener("click",mostrar)
