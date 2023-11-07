// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
// Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// Crear un objeto vacío para almacenar los números y sus frecuencias
let numeros = {};

// Generar 10000 números aleatorios en el rango de 1 a 20
for (let i = 0; i < 10000; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 20) + 1;

  // Si el número ya existe en el objeto, incrementar su frecuencia
  if (numeros[numeroAleatorio]) {
    numeros[numeroAleatorio]++;
  } 
  // Si el número no existe en el objeto, añadirlo con una frecuencia de 1
  else {
    numeros[numeroAleatorio] = 1;
  }
}

// Imprimir los resultados
console.log(numeros);