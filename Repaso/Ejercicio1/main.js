function calcular(d1){
    const resultado1= d1 * 1.8
    const resultado2= resultado1 + 32
    return resultado2
}
function mostrar(){
    const dato1 = document.getElementById("dato1").value
    const resultado=calcular(dato1)
    document.getElementById("h1_r").textContent = resultado;
}