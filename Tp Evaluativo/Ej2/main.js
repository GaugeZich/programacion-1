const calcular = (d1) => {
    //Se haran las condicionales con d1
    if(d1<=32 && d1>=14){
        return "Temperatura baja"
        //Guardara "Temperatura baja" en la funcion flecha calcular
    }else if(d1>32 && d1<=68){
        return "Temperatura adecuada"
        //Guardara "Temperatura adecuada" en la funcion flecha calcular
    }else if(d1>68 && d1<=96){
        return "Temperatura alta"
        //Guardara "Temperatura alta" en la funcion flecha calcular
    }else{
        return "Temperatura desconocida"
        //Guardara "Temperatura desconocida" en la funcion flecha calcular
    }
}
const mostrar = () => {
    const dato1 = document.getElementById("dato1").value
    //Se guardara el contendio del input por su ID gracias al value
    const respuesta = calcular(dato1)
    //Se guarda lo que se retorno en la funcion flecha calcular
    document.getElementById("h1_r").textContent = respuesta
    //Se guardara la temperatura y se guardara en el h1 gracias al textContent
}
// Busca el boton y lo guarda en la constante
const boton = document.getElementById("btn_t")
//Se le agrega un evento a escuchar en el boton, en este caso sera un "click"
boton.addEventListener("click",mostrar)