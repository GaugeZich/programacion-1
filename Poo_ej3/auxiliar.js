function almacenar_indice(indice){
    localStorage.setItem("indice", indice)
}
function editar(index){
    let lista_productos = JSON.parse(localStorage.getItem("productos"))
    document.getElementById("inp_desc").value = lista_productos[index].descripcion
    document.getElementById("inp_precio").value = lista_productos[index].precio
    document.getElementById("slt_cat").value = lista_productos[index].categoria
    localStorage.setItem("indice",index)
    document.getElementById("btn").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"
}