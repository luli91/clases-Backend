// async: Esta palabra clave se coloca delante de una función para indicar que la función devolverá una promesa. Una promesa es un objeto que representa la finalización o el fracaso de una operación asíncrona.

// await: Esta palabra clave se utiliza dentro de una función async para detener la ejecución del código hasta que una promesa se resuelva o rechace. Es como decir “espera a que el horno se precaliente antes de meter la masa”.
//siempre tienen try y catch

console.log("Tarea 1");

setTimeout(() => {
    console.log("Tarea 2");
}, 1000);

console.log("Tarea 3");
