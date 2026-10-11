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

 function mostrarSpan(idComponente,valor){
    let cmp = document.getElementById(idComponente);
    cmp.textContent=valor;
 }