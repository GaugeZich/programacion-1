const calcular = (n1,n2,n3) => {
    const bloque1 = Math.pow(n2,2)-(4*n1*n3)
    const bloque2 = Math.sqrt(bloque1)
    const bloqueA1 = (-n2) + bloque2
    const bloqueA2 = bloqueA1 / (2*n1)
    const bloqueB1 = (-n2) - bloque2
    const bloqueB2 = bloqueB1 / (2*n1)
    return 'Raiz 1= ' +bloqueA2+ ' Raiz 2= ' +bloqueB2
}
const mostrar = () => {

    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const dato3 = document.getElementById("dato3").value
    calcular(dato1,dato2,dato3)
    const respuesta = calcular(dato1,dato2,dato3)
    document.getElementById("h_resultado").textContent = respuesta;
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)