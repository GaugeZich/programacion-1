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
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }
    borrar_producto(indice){
        let lista_productos = JSON.parse(localStorage.getItem("productos"))
        lista_productos.splice(indice,1)
        localStorage.setItem("productos", JSON.stringify(lista_productos))
        this.obtener_producto()
    }
}