function calcular(s,d1,d2){
    if(s==1){
        const suma = parseInt(d1)+parseInt(d2)
        return suma
    }else if(s==2){
        const resta = (d1-d2)
        return resta
    }else if(s==3){
        const multiplicacion = (d1*d2)
        return multiplicacion
    }else{
        const division = (d1/d2)
        return division
    }
}
function mostrar(){
    const operacion = document.getElementById("slt_o").value
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const resultado =(calcular(operacion,dato1,dato2))
    document.getElementById("h2_r").textContent = resultado;
}