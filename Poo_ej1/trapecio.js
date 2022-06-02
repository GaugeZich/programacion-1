export default class Trapecio{
    constructor(d1,d2,d3){
        this.base_menor = d1
        this.base_mayor = d2
        this.altura = d3
    }
    calculo(){
        const suma = parseInt(this.base_mayor) + parseInt(this.base_menor)
        const div = suma/2
        const mult = div*this.altura
        return mult
    }
}