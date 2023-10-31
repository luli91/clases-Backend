//Utilizacion basica de operadores rest  y spread
const objeto1 ={
    nombre: "Cynthia",
    edad: 32,
    colorFav:"Rosa",
};

const objeto2 ={
    nombre: "Matias",
    edad:28,
};

//Spread operator, se colocan (... y el nombre del objeto), además si los dos objetos tienen las mismas propiedades de mezclan
const objeto3 = {...objeto1, ...objeto2}
//console.log(objeto3); //{ nombre: 'Matias', edad: 28, colorFav: 'Rosa' } 
//el objeto 1 y el 2 tienen las mismas propiedades nombre y edad entonces prevalece el objeto 2 que esta a la derecha en el array, pero como el objeto 2 no tiene la propiedad colorFav me imprime el del objeto1 entonces se mezclan.

//Rest operator
const nuevoObjeto ={
    a: "alfa",
    b:"beta",
    c: "gama",
}

const {a, ...rest} = nuevoObjeto;

console.log(a); //alfa

console.log(rest); //{ b: 'beta', c: 'gama' }