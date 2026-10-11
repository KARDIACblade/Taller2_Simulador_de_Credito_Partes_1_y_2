//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
 function calcular (){

    //leer valor ingreso
    let valorIngresos = recuperarFloat("txtIngresos")
    //leer valor egresos
    let valorEgresos = recuperarFloat("txtEgresos")
    //Llamar a la función calcularDisponible y guardar el retorno en una variable
    let disponible =  valorIngresos - valorEgresos;
    //Mostrar en pantalla, en el componente spnDisponible
    mostrarSpan("spnDisponible",disponible);
 }