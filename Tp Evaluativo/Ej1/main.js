function descuento() {
    //Se guarda el contenido del select en una constante
    const Ford = document.getElementById("slt_f").value
    //Se realiza la condicion a base del contenido guardado en la constante Ford
    if(Ford==1){
        const Ka = (1750000 * 15) / 100
        const precio= 1750000 - Ka
        //Se realiza el porcentaje y se guarda en una constante
        document.getElementById("h1_r").textContent = "El precio final sera de: " +precio+ "\$";
        //Se guardara el precio con el descuento en el h1 gracias al textContent
    }else if(Ford==2){
        const Fiesta = (1950000 * 5) / 100
        const precio= 1950000 - Fiesta
        //Se realiza el porcentaje y se guarda en una constante
        document.getElementById("h1_r").textContent = "El precio final sera de: " +precio+ "\$";
        //Se guardara el precio con el descuento en el h1 gracias al textContent
    }else{
        const Focus = (2560000 * 10) / 100
        const precio= 2560000 - Focus
        //Se realiza el porcentaje y se guarda en una constante
        document.getElementById("h1_r").textContent = "El precio final sera de: " +precio+ "\$";
        //Se guardara el precio con el descuento en el h1 gracias al textContent
    }
}