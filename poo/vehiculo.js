//La clase siempre empieza por mayuscula
export default class Vehiculo {
    //Aca irian los atributos
    constructor(km,marca){
        this.marca= marca
        this.km = km
    }
    mostrar_km(){
        alert(this.km)
    }
}