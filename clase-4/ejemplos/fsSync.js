
const fs = require ("fs");
// writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.writeFileSync ("./text.txt", "escribiendo en un archivo nuevo \ otro texto");

//es una buena practica que al leer un archivo, antes hay que verificar si existe. existsSync es sincrono porque si queremos evaluar si existe o no tiene que ser una operacion sincrona
if(fs.existsSync("./text.txt")){
console.log("El archivo existe");

// hay casos en los que no puede leer si es que usamos una ñ o etc hay que colocar UTF8
//readFileSync = Para obtener el contenido de un archivo.
    let contenido = fs.readFileSync ("./text.txt","utf-8");
    console.log(contenido);

//appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    fs.appendFileSync ("./text.txt", " \n Contenido añadido");

    contenido = fs.readFileSync ("./text.txt","utf-8");
    console.log(contenido);
    // unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    fs.unlinkSync("./text.txt");
}

