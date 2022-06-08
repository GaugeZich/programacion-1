import Batman from "./batman.js";
async function mostrar(){
    const batman = new Batman()
    batman.mostrar_pelis()
}
document.getElementById("btn").addEventListener("click",mostrar)