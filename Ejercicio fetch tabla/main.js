    const criptomonedas = async () => { 
    const criptos = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    const cripto = await criptos.json()
    let filas = []
    cripto.forEach(element => {
        let fila = 
        `<tr>
            <td><img src="${element.image}" alt="${element.symbol} width="25" height="25"></td>
            <td>${element.name}</td>
            <td>${element.current_price}</td>
            <td>${element.symbol}</td>
            <td>${element.total_volume}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
criptomonedas()