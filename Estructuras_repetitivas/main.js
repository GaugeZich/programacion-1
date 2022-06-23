let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = []
numeros.forEach(element => {
    let div = element % 2
    if(div==0){
        pares.push(element)
    }
});
console.log('Los numeros con forEach son: '+pares)

let numeritos = []
for (const nums of numeros) {
    if(nums>2 && nums<9){
        numeritos.push(nums)
    }
}
console.log('Los numeros del for of son: '+numeritos)