//Calculadora de edad
//Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
// Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
// Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.

const moment = require("moment");

let fechaActual = moment ();

let fechaDeNacimiento = moment ("2016-04-12");

if(fechaDeNacimiento.isValid()){
    console.log("Es valido");

    let dias = fechaActual.diff(fechaDeNacimiento, "days");
    console.log(dias);
}
console.log(fechaDeNacimiento);