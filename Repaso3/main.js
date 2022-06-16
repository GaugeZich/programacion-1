const provincias = async () => { 
    const provincia = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
    const prov = await provincia.json()
    let filas = []
    prov.forEach(element => {
        let fila = 
        `<tr>
            <td>${element.id}</td>
            <td>${element.provincia}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
provincias()