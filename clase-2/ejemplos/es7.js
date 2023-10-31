//ejemplo en clase de la utilizacion de operador exponencial y manejo de array con includes en Emma script 7

const numeros = [2, 3, 4, 5, 6];
console.log(numeros);

//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numerosNuevos = numeros.map ( (numero) => numero ** 2);
console.log (numerosNuevos);3

//El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
const nombres = ["Matias", "Cynthia", "Maria", "Enzo"]

const nombre = "Matias"

if (nombres.includes(nombre)){
    console.log(`${nombre} está presente`);
}else{
    console.log(`${nombre} no está presente`);
}