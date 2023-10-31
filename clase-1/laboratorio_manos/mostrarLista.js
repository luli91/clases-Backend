//Ejercicio realizado por el profe
//Definimos una funcion "mostrar lista" la cual recibira un arreglo(array) con elementos como parametros


const mostrarLista = (arr) => {

  //Si la lista esta vacia, devolver un mensaje indicando "Lista vacia"
    if (arr.length == 0) return "Lista vacía";
//Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola
    arr.map((elementos) => {
        console.log(elementos);
    });
//Finalizar el proceso devolviendo la longitud de la lista  (utilizar template string ${})
    return `El array tiene ${arr.length} elementos`;
};

  // Casos de prueba
console.log(mostrarLista([]));
console.log(mostrarLista([1]));
console.log(mostrarLista([23, 23, 32, 32, "Nombre", true]));