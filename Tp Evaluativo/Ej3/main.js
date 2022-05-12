function calcular(d1,d2){
    //Se realizaran ambas potencias gracias a Math.pow y se guardaran en una constante
    const calculo = Math.pow(d1,2) + Math.pow(d2,2)
    //Se realiza la raiz cuadradada gracias a Math.sqrt de la suma de las potencias que esta guardada en calculo
    const r = Math.sqrt(calculo)
    //Retornara el resultado
    return "La hipotenusa es: " +r
}
function mostrar(){
    //Se guardan los input por ID gracias al value
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    //Se guarda el resultado en una constante
    const resultado = calcular(dato1,dato2)
    //Se guardara el resultado en el h4
    document.getElementById("h4_r").textContent = resultado;
}