function calcular_area(){
    const base1=parseInt(prompt('Ingreseme la base menor'));
    const base2=parseInt(prompt('Ingreseme la base mayor'));
    const altura=parseInt(prompt('Ingreseme la altura'));
    const r1=base1+base2;
    const r2=r1*altura;
    const r3=r2/2;
    return r3;
    }
    function mostrar(){
    const respuesta=calcular_area();
    alert(respuesta);
    }