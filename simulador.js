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
 }