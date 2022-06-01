import Trapecio from "./trapecio.js";
function calcular(){
    let dato1 = document.getElementById("inp_dato1").value
    let dato2 = document.getElementById("inp_dato2").value
    let dato3 = document.getElementById("inp_dato3").value
    const trapecio = new Trapecio(dato1,dato2,dato3)
    trapecio.calculo()
}
document.getElementById("btn").addEventListener("click",calcular)