//primer ejemplo
//las funciones cuadrado linea 5 y (numero) => { return numero +1; } linea 15 son los callbacks que se pasan al método map(). Estas funciones se aplican a cada elemento del array numeros.

// const numeros = [1, 2, 3, 4, 5, 6];

// function cuadrado(numero) {
//     return numero **2;
// }

// //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// const numerosNuevos = numeros.map(cuadrado);

// const numeros2 = [1, 2, 3, 4, 5, 6];

// //para vovler a hacer otra operacion 
// const numerosNuevos2 = numeros.map((numero)=> {
//     return numero +1;
// });

// console.log(numerosNuevos);
// console.log(numerosNuevos2);

//2do ejemplo
// la función (valor) => { return valor **2; } es el callback que se pasa a la función mapcostum. Esta función se aplica a cada elemento del array arrayNuevo.
function mapcostum(array, callback){
    let nuevoArray = [];
    // Esta es una función llamada mapcostum que toma un array y una función de callback como argumentos. Crea un nuevo array (nuevoArray), luego recorre el array original y aplica la función de callback a cada elemento. Los resultados se agregan al nuevoArray
    for(let i = 0; i < this.length; i++){
        let nuevoValor = callback(this[i]);
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

const numeros = [2, 3, 4, 5, 6];

//aca esta funcion le paso por parametro un valor y una funcion, esa funcion va a realizar una operacion luego en la const nuevo Array va a tener los valors de array pero al cuadrado
const nuevoArr = mapCustom(arrayNuevo,
    (valor) =>{
        return valor **2;
    })

//CONCLUSION EL EN 1ER EJEMPLO usamos una función que ya existe en JavaScript llamada map(). Esta función toma cada elemento de un array, le aplica una operación (en este caso, elevar al cuadrado o sumar uno), y devuelve un nuevo array con los resultados. En el segundo ejemplo, creo mi propia versión de la función map(). Hago lo mismo que la función map() original: tomo cada elemento de un array, le aplico una operación y devuelvo un nuevo array con los resultados. Pero en lugar de usar la función map() que ya existe en JavaScript, estoy escribiendo el código yo.