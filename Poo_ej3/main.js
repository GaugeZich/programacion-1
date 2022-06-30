import Producto from "./producto.js";
function guardar(){
    let descripcion = document.getElementById("inp_desc").value
    let precio = document.getElementById("inp_precio").value
    let categoria = document.getElementById("slt_cat").value
    let producto = new Producto(descripcion,precio,categoria)
    /*Invocamos(ejecutamos) al metodo guardar_producto(),
    pertenecientes a la clase Producto
    */
    producto.guardar_producto()
}
document.getElementById("btn").addEventListener("click",guardar)
function listar(){
    let producto = new Producto()
    producto.obtener_producto()
}
listar()