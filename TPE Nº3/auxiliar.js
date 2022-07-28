function almacenar_indice(indice){
    localStorage.setItem("indice", indice)
}
function editar(index){
    let lista_juegos = JSON.parse(localStorage.getItem("juegos"))
    document.getElementById("inp_desc").value = lista_juegos[index].descripcion
    document.getElementById("inp_precio").value = lista_juegos[index].precio
    document.getElementById("slt_tipo").value = lista_juegos[index].tipo
    document.getElementById("inp_img").value = lista_juegos[index].imagen
    localStorage.setItem("indice",index)
    document.getElementById("btn_guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"
}