// String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
// Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
// Dynamic import: Permite importar sólo los módulos necesarios, ahorrando espacio y memoria.


const texto ="           Este metodo saca los espacios que deje al principio y al fin                 ";

console.log(texto);
console.log(texto.trim());

const array = [
    [1, 2],
    [1, 2],
    [1, 2],
];

console.log(array);
console.log(array.flat()); //[ 1, 2, 1, 2, 1, 2 ] convierte en 1 solo array y los coloca en 1 solo nivel a todos, por ejemplos si queremos recorrer el array anterior necesitariamos mas de un bucle, en cambio asi se utilizaria 1 solo bucle


