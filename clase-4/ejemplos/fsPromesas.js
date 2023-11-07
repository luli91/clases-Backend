// fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
// fs.promises.readFile  = Para obtener el contenido de un archivo.
// fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
// fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.

//IMPORTANTE SI NO APARECE PROMESA ES CALLBACK

const fs = require ('fs');

const operaciones = async (fileName) => {
    try {
        await fs.promises.writeFile(fileName, "Escribiendo en un archivo con promesas");

    let contenido = await fs.promises.readFile(fileName, "utf-8");
    console.log(contenido);

    await fs.promises.appendFile(fileName, "\nAgregando contenido");

    contenido = await fs.promises.readFile (fileName, "utf-8");
    console.log(contenido);

    await fs.promises.unlink(fileName);
} catch (error) {
    console.log("Hubo un error");
}
};

operaciones("./texto.txt");


//consola

//Escribiendo en un archivo con promesas
// Escribiendo en un archivo con promesas
// Agregando contenido
// Hubo un error
