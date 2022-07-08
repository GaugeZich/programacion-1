import Juegos from "./juegos.js";
function guardar(){
    let descripcion = document.getElementById("inp_desc").value
    let precio = document.getElementById("inp_precio").value
    let imagen = document.getElementById("inp_img").value
    let tipo = document.getElementById("slt_tipo").value
    let juegos = new Juegos(descripcion,precio,imagen,tipo)
    juegos.guardar_juego()
}
function listar(){
    let juegos = new Juegos()
    juegos.obtener_juegos()
}
listar()
document.getElementById("btn_guardar").addEventListener("click",guardar)
function eliminar(){
    let indice = localStorage.getItem("indice")
    let juegos = new Juegos()
    juegos.borrar_juego(indice)
}
document.getElementById("btn_borrar").addEventListener("click",eliminar)