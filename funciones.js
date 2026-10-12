//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO



 function calcularDisponible (ingresos,egresos){
    let disponible = ingresos-egresos;
    
        if (disponible < 0){
            disponible = 0;
            }
        return disponible;
 }

 function recuperarTexto(idComponente){
    let cmp = document.getElementById(idComponente);
    let valor = cmp.value
    return valor;
 }

 function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
 }

 function recuperarEntero(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorTexto);
    return valorEntero;
 }

 function mostrarSpan(idComponente,valor){
    let cmp = document.getElementById(idComponente);
    cmp.textContent=valor;
 }

 function calcularCapacidadPago (montoDisponible){
  let valorDisponible =  montoDisponible * 0.5
    return valorDisponible;
 }

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interesPagar = plazoAnios*monto*(tasa/100);
    return interesPagar;
}

function calcularTotalPagar (monto,interes){
let impuestos = 100;
let valorPagar = monto + interes + impuestos;
return valorPagar;
}

function calcularCuotaMensual (total,plazoAnios){
    let meses = (plazoAnios*12);
    let cuatoaMensual = total/meses;
    return cuatoaMensual;
}
