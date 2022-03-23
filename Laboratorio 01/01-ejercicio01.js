/**
 * Desarrolle una función que permita determinar 
 * cuál de tres parámetros que se le proporcione 
 * a la función es mayor.
 */

const determinarMayor = (arreglo) => {
    console.log(arreglo);
    let numMayor = Math.max.apply(null, arreglo);
    // Resultado del numero mayor
    return numMayor;
};

let continuar = true;
let parametros = [];
do {
    let ingreso = prompt("Ingrese un número o escriba x para dejar de ingresar números");
    if (ingreso === "x") {
        continuar = false;
    } else {
        parametros.push(+ingreso);
    }
} while (continuar === true);
console.log(determinarMayor(parametros))