export default class Juegos {
    constructor(desc,precio,img,tipo){
        this.descripcion = desc
        this.precio = precio
        this.imagen = img
        this.tipo = tipo
    }
    guardar_juego(){
        let nuevo_juego = {
            descripcion: this.descripcion,
            precio: this.precio,
            imagen: this.imagen,
            tipo: this.tipo
        }
        if("juegos" in localStorage){
            let lista = JSON.parse(localStorage.getItem("juegos"))
            lista.push(nuevo_juego)
            localStorage.setItem("juegos",JSON.stringify(lista))
        }else{
            let lista = [] 
            lista.push(nuevo_juego)
            localStorage.setItem("juegos",JSON.stringify(lista))
        }
        this.obtener_juegos()
    }
    obtener_juegos(){
        let lista_juegos = JSON.parse(localStorage.getItem("juegos"))
        let filas = []
        lista_juegos.forEach((element, index) => {
            let fila = `
            <tr class="table-light">
                <td>${index+1}</td>
                <td><img src="${element.imagen}" alt="Imagen de: ${element.descripcion}" width="25" height="25"></td>
                <td>${element.descripcion}</td>
                <td>${element.tipo}</td>
                <td>\$${element.precio}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"></i>
                    </button>
                    <button onclick="editar(${index})" class="btn btn-light btn-sm">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
        this.vaciar_formulario()
    }
    borrar_juego(indice){
        let lista_juegos = JSON.parse(localStorage.getItem("juegos"))
        lista_juegos.splice(indice,1)
        localStorage.setItem("juegos", JSON.stringify(lista_juegos))
        this.obtener_juegos()
    }
    editar(){
        let index = localStorage.getItem("indice")
        let listado = JSON.parse(localStorage.getItem("juegos"))
        listado[index].descripcion = document.getElementById("inp_desc").value
        listado[index].precio = document.getElementById("inp_precio").value
        listado[index].tipo = document.getElementById("slt_tipo").value
        listado[index].imagen = document.getElementById("inp_img").value
        localStorage.setItem("juegos",JSON.stringify(listado))
        this.obtener_juegos()
        document.getElementById("btn_guardar").style.display = "block"
        document.getElementById("btn_actualizar").style.display = "none"
        document.getElementById("ir_catalogo").style.display = "block"
        this.vaciar_formulario()
    }
    vaciar_formulario(){
        document.getElementById("form_juegos").reset()
    }
    hacer_catalogo(){
        let lista_juegos = JSON.parse(localStorage.getItem("juegos"))
        let filas = []
        lista_juegos.forEach(element => {
            let fila = `
            <div class="col-lg-4">
            <div class="card border-secondary mb-3" >
            <div class="card-header"><h3>${element.descripcion}</h3></div>
            <div class="card-body" style="padding:8px">
              <h4 class="card-title" ><img style="height:200px" class="card-img-top" src="${element.imagen}" alt="" ></h4>
              <p class="card-text">
                Tipo de juego: ${element.tipo}
                <br>
                Precio: AR\$${element.precio}
              </p>
            </div>
            <button onclick="agregar_pedido('${element.descripcion}','${element.precio}')" type="button" class="btn btn-light">Lo quere compra ñero?</button>
        </div>
        </div>
            `
            filas.push(fila)
        });
        document.getElementById("div_1").innerHTML = filas.join('')
        
    }
    


}
