const fs = require ('fs');
//Esta manera no es muy utilizada ya que forma la primide de costado
//pasamos callback como segundo parametro. No hace falta colocar Syn en writefile, append fila etc

fs.writeFile ("./texto_callback.txt", "Escribiendo en un callback", (error) => {
    if (error) {
        return console.log("Hubo un error al escribir el archivo");
    }
    
    fs.readFile("./texto_callback.txt" ,"utf-8", (error, contenido) => {
        if (error) {
            return console.log("Hubo un error al leer el archivo");
        }

        console.log(contenido);

        fs.appendFile ("./texto_callback.txt", "\n Texto recien salido del horno", (error) =>{
            if(error){
                return console.log("Hubo un error al agregar contenido al archivo");
            }

            fs.readFile ("./texto_callback.txt", "utf-8", (error, contenido) => {
                if (error){
                    return console.log("Hubo un error al leer el archivo");
                }
                console.log(contenido);

                fs.appendFile(
                    "./texto_callbacak.txt",
                    "\nTexto recien salido de horno",
                    (error) =>{
                        if (error){
                            return console.log("Hubo un error al agregar contenido al archivo");
                        }

                    fs.readFile ("./texto_callback.txt", "utf-8", (error, contenido) => {
                        if (error) {
                            return console.log("Hubo un error al leer el archivo");
                        }

                        console.log(contenido);

                        fs.unlink("./texto_callback.txt", (error) => {
                            if (error) {
                                return console.log("Hubo un error al eliminar el archivo");
                            }
                        });
                    });
                });
            });
        });
    });
});

// Escribiendo en un callback
// Escribiendo en un callback
//  Texto recien salido del horno
// Escribiendo en un callback
//  Texto recien salido del horno