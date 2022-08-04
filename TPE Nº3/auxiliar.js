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
    document.getElementById("ir_catalogo").style.display = "none"
    document.getElementById("br").style.display = "none"
}

function agregar_pedido(d,p){
    let nuevo_pedido = {
        descripcion:d,
        cantidad:1,
        precio:p
    }

    if("pedidos" in localStorage){
        let lista = JSON.parse(localStorage.getItem("pedidos"))
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }else{
        let lista = [] 
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }

    cargar_pedido()

}

function cargar_pedido(){
    let lista_juegos = JSON.parse(localStorage.getItem("pedidos"))
    let filas = []
    
    lista_juegos.forEach((element,index) => {
        let fila = `
            <tr class="table-light">
                <td>${element.descripcion}</td>
                <td>
                    <p id="cantidad_${index}">${element.cantidad}</p>
                    <button class="btn btn-light btn-sm"><i class="fa fa-plus-square-o"></i></button>
                    <button class="btn btn-light btn-sm"><i class="fa fa-minus-square-o"></i></button>
                </td>
                <td>\$${element.precio}</td>
            </tr>

        `
        filas.push(fila)
    });
    document.getElementById("tbody_1").innerHTML = filas.join('')
}
cargar_pedido()