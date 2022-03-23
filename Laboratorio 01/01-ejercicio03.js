/**
 * Calcular la comisión sobre las ventas totales de un empleado, 
 * sabiendo que el empleado no recibe comisión si su venta es hasta S/.150,
 * si la venta es superior a S/.150 y menor o igual a S/.400 el empleado 
 * recibe una comisión del 10% de las ventas y si las ventas son mayores a 400, 
 * entonces la comisión es de S/.50 más el 9% de las ventas.
 * 
 * Venta hasta 150 = no Comision
 * Venta superior a 150 <= 400 recibe una comision de 10%
 * Ventas mayores a 400 entonces la comision es de 50 más el 9%
 */
const calcularComision = (cantVenta) => {
    if(cantVenta <= 150)
    {
        let noComision = "No recibiras comision por que la venta no es superior a 150 soles.";
        console.log(noComision);

    }else if(cantVenta <= 400)
    {
        let comision1 = total * 0.10;
        console.log(comision1);

    }else if(cantVenta > 400)
    {
        let comision2 = (total * 0.09) + 50;
        console.log(comision2);
    }else{
        let sinResultado="No hay resultado vuelva a ingresar un número.";
        console.log(sinResultado);
    }
};

let total = +prompt("Ingrese la cantidad de la venta.")

console.log(calcularComision(total));