const productos = async (categoria) => {
    const datos = await fetch("https://fakestoreapi.com/products/category/"+categoria)
    const producto = await datos.json()
    let filas = []
    producto.forEach(element => {
        let fila = `
           
                <div class="col-lg-3">
                    <div class="card">
                        <img src="${element.image}" class="card-img-top" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text"><p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                              View more info
                            </button>
                          </p>
                          <div style="min-height: 120px;">
                            <div class="collapse collapse-horizontal" id="collapseWidthExample">
                              <div class="card card-body" style="width: 300px;">
                                ${element.description}
                              </div>
                            </div>
                          </div></p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                    <br>
                </div>
           
        `
        filas.push(fila)
    });
    document.getElementById("div_c").innerHTML = filas.join('')
}
/*
<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    View more info
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      ${element.description}
    </div>
  </div>
</div>
*/