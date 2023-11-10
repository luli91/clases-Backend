//Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
// Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

const objeto = {};

for (let i = 0; i < 10000; i++) {
  const numAleatorio = Math.floor(Math.random() * 20) + 1;
    if (objeto[numAleatorio]) {
    objeto[numAleatorio]++;
    } else {
    objeto[numAleatorio] = 1;
    }
}

console.log(objeto);