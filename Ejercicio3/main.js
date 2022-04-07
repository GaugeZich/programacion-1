function calcular(r1){
    const result1= Math.pow(r1,2);
    const result2= Math.PI * result1;
    return result2;
}
function mostrar(){
    const radio = document.getElementById("inp_radio").value;
    const resultado=calcular(radio);
    document.getElementById("h_r").textContent = resultado;
}