//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 function calcular (){

    //leer valor ingreso
    let valorIngresos = recuperarFloat("txtIngresos")
    //leer valor egresos
    let valorEgresos = recuperarFloat("txtEgresos")
    //Llamar a la función calcularDisponible y guardar el retorno en una variable
    let disponible =  calcularDisponible(valorIngresos,valorEgresos);
    let disponibleDeci = disponible.toFixed(2);

    //Mostrar en pantalla, en el componente spnDisponible
    mostrarSpan("spnDisponible",disponibleDeci);

    //capacidad de pago
    let montoDisponible = calcularCapacidadPago(disponible);
    let montoDeci = montoDisponible.toFixed(2);
    mostrarSpan("spnCapacidadPago",montoDeci);

    // interes simmple
    let monto = recuperarEntero("txtMonto");
    let tasa = recuperarEntero("txtTasaInteres");
    let plazoAnios = recuperarEntero("txtPlazo");
    let interesSimple=calcularInteresSimple(monto,tasa,plazoAnios);
    let interesSimpleDeci =interesSimple.toFixed(2);
    mostrarSpan("spnInteresPagar",interesSimpleDeci);
    
    // valor total a pagar
    let valorTotal = calcularTotalPagar(monto,interesSimple);
    //let valorTotalDeci = valorTotal.toFixed(2)
    mostrarSpan("spnTotalPrestamo",valorTotal);


 }