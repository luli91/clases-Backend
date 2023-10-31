// //Object.entries separa el valor y la llave de un objeto.Por ejemplo, puedes tener un objeto con la etiqueta “libro” y el contenido “Harry Potter”, y otro objeto con la etiqueta “color” y el contenido “azul”.Ahora, si quieres obtener una lista de todos los objetos en la caja junto con sus etiquetas y contenidos, puedes usar Object.entries(). Este método te dará una lista donde cada elemento es un par de [etiqueta, contenido].Nos daría algo como esto: [ [‘libro’, ‘Harry Potter’], [‘color’, ‘azul’] ].

//object values y object keys.  Imagina que tienes una caja llena de objetos. Cada objeto tiene una etiqueta y un contenido. Si quieres obtener una lista con solo el contenido de cada objeto, puedes usar Object.values(). Este método te dará una lista con los contenidos de todos los objetos en la caja.

//Object.keys(): Ahora, si en lugar del contenido, quieres obtener una lista con solo las etiquetas de cada objeto, puedes usar Object.keys(). Este método te dará una lista con las etiquetas de todos los objetos en la caja.

const objeto = {
    nombre: "Alberto",
    edad: 25,
    colorFav: "azul",

}

//ej para recorrer propiedades individualmente, sirve para validar alguna propiedad o dato. ejemplo en una eccomerce: Si permites que los usuarios filtren productos por ciertas características (como color, tamaño, etc.), puedes usar Object.keys() para crear dinámicamente los filtros basándote en las propiedades de los objetos de los productos.
const propiedades = Object.keys(objeto);

propiedades.forEach((prop)=>{
    console.log(prop);
});


console.log(Object.keys(objeto)); //[ 'nombre', 'edad', 'colorFav' ]
console.log(Object.values(objeto)); //[ 'Alberto', 25, 'azul' ]
console.log(Object.entries(objeto)); //[ [ 'nombre', 'Alberto' ], [ 'edad', 25 ], [ 'colorFav', 'azul' ] ]

// El método Array.reduce() en JavaScript se utiliza para reducir todos los elementos de un array a un solo valor1.Este método ejecuta una función (llamada función reductora) en cada elemento del array, y el resultado de cada llamada se acumula para producir un único valor final1.Por ejemplo, si estás sumando números con reduce(), podrías comenzar con un “valor inicial” de 0. Este sería tu “acumulador”. Luego, para cada número en tu lista, sumas ese número al “acumulador”, y ese resultado se convierte en tu nuevo “acumulador”. Al final, el “acumulador” contiene la suma total de todos los números.

const numeros =[1,2,3,4]
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // Imprime: 10