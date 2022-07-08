export default class Producto {
    constructor(desc,precio,cat){
        this.descripcion = desc
        this.precio = precio
        this.categoria = cat
    }
    guardar_producto(){
        let nuevo_producto = {
            descripcion: this.descripcion,
            precio: this.precio,
            categoria: this.categoria
        }
        if("productos" in localStorage){
            //Converitmos el JSON obtenido desde el storage, en una expresion nativa de Javascript
            let lista = JSON.parse(localStorage.getItem("productos"))
            lista.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista))
        }else{
            let lista = [] 
            lista.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista))
        }
        /*let lista = []
        lista.push(nuevo_producto)
        //Guardar en el storage:
        localStorage.setItem("productos",JSON.stringify(lista))
        */
       /*invocamos nuevamente el motodo obtener_producto() para lograr reconstruir la tabla, y asi
       reflejar los datos actualizados que proviene del localStorage, especificamente del item "productos"
       */
       this.obtener_producto()
       this.vaciar_formulario()
    }
    obtener_producto(){
        /*Recolectamos todos los productos alojados en el item "productos"
        que esta en notacion JSON. Debemos convertirlo en una expresion
        nativa de JavaScript (es decir, hacemos un JSON.parse())
        */
        let lista_productos = JSON.parse(localStorage.getItem("productos"))
        let filas = []
        lista_productos.forEach((element, index) => {
            let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio}\$</td>
                <td>${element.categoria}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"></i>
                    </button>
                    <button onclick="editar(${index})" class="btn btn-dark btn sm">
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
    borrar_producto(indice){
        let lista_productos = JSON.parse(localStorage.getItem("productos"))
        lista_productos.splice(indice,1)
        localStorage.setItem("productos", JSON.stringify(lista_productos))
        this.obtener_producto()
    }
    actualizar_producto(){
        let index = localStorage.getItem("indice")
        let listado = JSON.parse(localStorage.getItem("productos"))
        listado[index].descripcion = document.getElementById("inp_desc").value
        listado[index].precio = document.getElementById("inp_precio").value
        listado[index].categoria = document.getElementById("slt_cat").value
        localStorage.setItem("productos",JSON.stringify(listado))
        this.obtener_producto()
        document.getElementById("btn").style.display = "block"
        document.getElementById("btn_actualizar").style.display = "none"
        this.vaciar_formulario()
    }
    vaciar_formulario(){
        document.getElementById("form_producto").reset()
    }
}