// Dados los objetos:
// -Realizar una lista nueva (array) que contenga todos los tipos de productos (no cnatidades),
// consejo: utilizar Object.keys y Array includes. Mostrar el array por consola. 
// -Posteriormente obtener el total de productos vendidos por todos los objetos(utilizar Object.values)

const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

const productos = [];

objetos.forEach((objeto) => {
    const tiposDeProductos = Object.keys(objeto);

    //Object.key me devuelve un array entonces lo recorro al array de tiposDePorductos, entocnes valido si esta en el array con include, si no lo tiene que lo cree con push

    tiposDeProductos.forEach((key)=>{
        if (!productos.includes(key)) {
            productos.push(key);
        }
    });
});

console.log(productos); 
//[
//     'manzanas', 'peras',
//     'carne',    'jugos',
//     'dulces',   'sandias',
//     'huevos',   'panes'
//   ]

let totalVendidos = 0;
objetos.forEach ((objeto) =>{
    let KeyValues = Object.entries(objeto);

    KeyValues.forEach((prod) =>{
            totalVendidos += prod [1];
    });
});

console.log(totalVendidos);