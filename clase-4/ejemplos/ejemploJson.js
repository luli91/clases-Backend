const fs = require ('fs')

//parametro nombre del archivo y el objeto
const operacion = async (fileName, objeto) => {
    try {
        //esto me convierte en un texto plano al objeto
        await fs.promises.writeFile(fileName, JSON.stringify(objeto, null, "\t")); //null porque no quiero pasarle ninguna funcion

        //enotnces para que me devuelva un objeto con clave y valor para que yo pueda acceder por ejemplo al valor lo tengo que leer y aplicar JSON.parce

        let contenido = await fs.promises.readFile(fileName, "utf-8");
        let data = JSON.parse(contenido);
        console.log(contenido); //console.log(contenido.id) no podria hacer si es un texto plano, deberia crear el archivo json 
        console.log(data.id);
        console.log(typeof contenido);

        // si quiero agregar mas de un objeto, debo hacer un array de objetos
        let array = [data, { id: 2, name :"Arturo", age: 25}];
        
        await fs.promises.writeFile(fileName, JSON.stringify(array, null, "\t"));

    } catch (error) {
        console.log("Hubo un error");
    }
};
// porejemplo en la siguiente linea de codigo, se crea un archivo json (no de texto) con un objeto al cual puedo acceder a la clave o valor
operacion ("./texto.json", {
    id: 1,
    name: "Roberto",
    age: 24,
});