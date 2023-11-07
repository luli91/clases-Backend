const fs = require('fs');

// Obtengo la fecha y hora actual
const fechaHoraActual = new Date().toLocaleString();

// Creo un archivo con la fecha y hora actual
fs.writeFile('fechaHora.txt', fechaHoraActual, (error) => {
    if (error) {
        console.log('Hubo un error al escribir el archivo:', error);
    } else {
        console.log('Archivo creado exitosamente.');

    // Leo el archivo
    fs.readFile('fechaHora.txt', 'utf-8', (error, contenido) => {
        if (error) {
            console.log('Hubo un error al leer el archivo:', error);
        } else {
            console.log('El contenido del archivo es:', contenido);
        }
    });
    }
});

// Archivo creado exitosamente.
// El contenido del archivo es: 3/11/2023, 19:28:02