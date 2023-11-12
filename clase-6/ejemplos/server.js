const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.method === "GET" && request.url === "/") {
    response.end("Mi primer servidor con node en Coderhouse!!!!");
    }

    if (request.url !== "/") {
    response.end("Error página no encontrada");
    }
});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});

//req.params: Este es un objeto que contiene propiedades mapeadas a los “parámetros” de la ruta. Por ejemplo, si tienes una ruta como /user/:id, puedes acceder al valor de id con req.params.id
//Por ejemplo: Imagina que tienes una librería online y quieres ver los detalles de un libro específico. Podrías tener una URL como esta: www.milibreria.com/libros/123. Aquí, 123 es el ID del libro que quieres ver. Cuando haces una solicitud a esa URL, en tu servidor puedes acceder a ese 123 con req.params.id.

//req.body: Este es un objeto que contiene los valores de los datos enviados en el cuerpo de la solicitud HTTP, comúnmente utilizados con métodos como POST y PUT. Por ejemplo, si envías datos JSON en el cuerpo de tu solicitud, puedes acceder a esos datos con req.body. 
//Por ejemplo: supongamos que estás en un formulario en una página web para crear un nuevo libro en tu librería online. Rellenas los detalles del libro como el título, el autor, etc., y haces clic en “Enviar”. Todos esos detalles del libro se envían en el cuerpo de la solicitud HTTP al servidor. En tu servidor, puedes acceder a esos detalles con req.body.

//req.query: Este es un objeto que contiene los valores de los parámetros de consulta de la URL. Por ejemplo, si tienes una URL como /search?keyword=example, puedes acceder al valor de keyword con req.query.keyword.
//Por ejemplo: magina que estás en la página principal de tu librería online y ves un cuadro de búsqueda en la parte superior. Escribes “Harry Potter” en el cuadro de búsqueda y presionas Enter. La URL en tu navegador podría verse así: www.milibreria.com/buscar?termino=Harry+Potter. Aquí, termino es un parámetro de consulta y su valor es Harry Potter. En tu servidor, puedes acceder a “Harry Potter” con req.query.termino.