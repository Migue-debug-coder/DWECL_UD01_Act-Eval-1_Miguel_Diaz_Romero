function calcular_iva_21(importe) {
    const importe_con_iva = importe * 1.21;
    return importe_con_iva;
}

function cacular_descuento_importe(importe) {
    // 5. Menos de 50€ --> Sin descuento
    if (importe < 50) {
        importe *= 1;
        // 6. Entre 50€ y 99,99€ --> 5 % 
    } else if (importe >= 50 && importe < 99.99) {
        importe *= 0.95;
        // 7. Entre 100€ y 199.99€ --> 10 %
    } else if (importe >= 100 && importe < 199.99) {
        importe *= 0.9;
        // 8. 200€ o más --> 15 %
    } else if (importe >= 200) {
        importe *= 0.85;
    }

    return importe;
}

function gestor_compras() {
    // Inicialización de variables: 

    // Contador para el número de operaciones
    let numero_operaciones = 0;

    // Inicializo la opción a 
    let opcion = 0;

    // Inicializo el gasto total a 0
    let gasto_total = 0;

    // Inicializo el gasto medio a 0
    let gasto_medio = 0;

    //Inicializo el gasto_mayor a un número muy pequeño (menos infinito) 
    // para que la primera vez la condición que cambie el valor del gasto mayor por el importe del producto 
    let gasto_mayor = -Infinity;

    //Inicializo el gasto_menor a un número muy grande (más infinito) 
    // para que la primera vez la condición que cambie el valor del gasto menor por el importe del producto
    let gasto_menor = Infinity;

    do {

        do {
            // 1. Pedir al usuario el precio de un producto
            const precio_producto = window.prompt("Introduzca el precio del producto: ");
            // 2. Pedir la cantidad de unidades
            const cantidad_unidades = window.prompt("Introduzca la cantidad de unidades del producto que ha comprado: ");
        } while (isNaN(precio_producto) && isNaN(cantidad_unidades));

        // 3. Calcular el importe de la compra

        let importe = precio_producto * cantidad_unidades;

        // 4. Aplicar un descuento según el importe:

        let importe_con_descuento = cacular_descuento_importe(importe);

        // 9. Calcular el IVA del 21 % sobre el precio después del descuento
        let importe_con_iva_aplicado = calcular_iva_21(importe_con_descuento);

        console.log(`El importe total de la compra con el descuento y el IVA aplicado es de: ${importe_con_iva_aplicado}`);

        opcion = window.confirm("¿Desea realizar otra operación?: ");

        numero_operaciones++;

        gasto_total += importe_con_iva_aplicado;

        if (importe_con_iva_aplicado > gasto_mayor) {
            gasto_mayor = importe_con_iva_aplicado;
        }
        if (importe_con_iva_aplicado < gasto_menor) {
            gasto_menor = importe_con_iva_aplicado;
        }

    } while (opcion);

    gasto_medio = gasto_total / numero_operaciones;

    console.log(`Resumen de todas sus operaciones: \n`,
        `- Número de operaciones realizadas: ${numero_operaciones} \n`,
        `- Gasto Total de todas las operaciones: ${gasto_total} \n`,
        `- Gasto medio de todas las operaciones: ${gasto_medio} \n`,
        `- Gasto menor de todas las operaciones: ${gasto_mayor} \n`,
        `- Gasto menor de todas las operaciones: ${gasto_menor}`
    );

}

gestor_compras();


