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
    }
    obtener_producto(){
        
    }
}