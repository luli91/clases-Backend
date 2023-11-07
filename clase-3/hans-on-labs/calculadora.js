// Calculadora positiva con promesas

// ¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
// Definir función suma:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
// En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
// En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
// Definir función resta:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
// En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
// En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
// Definir una función multiplicación:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
// Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
// Definir la misma función división utilizada en esta clase.
// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch


function dividir(numero1, numero2) {
    return new Promise((resolve, reject) => {
    if (numero2 === 0) {
        reject("No se puede dividir por 0");
    } else {
        resolve(numero1 / numero2);
    }
    });
}

function suma(numero1, numero2){
return new Promise((resolve, reject) => {
    if(numero1 === 0 || numero2 ===0 ){
        reject ("operacion innecesaria");
    } else {
        const resultado = numero1 + numero2;
        resolve(resultado);
    }
});
}
function resta(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject("Operación innecesaria");
    } else {
        const resultado = numero1 - numero2;
        if (resultado <= 0) {
            reject("La calculadora solo devuelve numeros positivos");
        } else {
            resolve(resultado);
        }
    }
    });
}

function multiplicar(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) {
            reject("Operación innecesaria");
        } else {
        const resultado = numero1 * numero2;

        if (resultado < 0) {
            reject("La calculadora solo devuelve numeros positivos");
        } else {
            resolve(resultado);
        }
        }
    });
}

    async function calculos(numero1, numero2) {
    try {
        const resultadoSuma = await suma(numero1, numero2);
        console.log("Resultado Suma: " + resultadoSuma);

        const resultadoResta = await resta(numero1, numero2);
        console.log("Resultado Resta: " + resultadoResta);

        const resultadoMultiplicacion = await multiplicar(numero1, numero2);
        console.log("Resultado Multiplicar: " + resultadoMultiplicacion);

        const resultadoDivision = await dividir(numero1, numero2);
        console.log("Resultado division: " + resultadoDivision);
    } catch (error) {
        console.log(error);
    }
}

  // calculos(2, 3);
  // calculos(0, 3);
  // calculos(2, 0);
calculos(6, 3);