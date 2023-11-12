// const express = require ('express');


// // esto importa el módulo Express.js, que es un marco de trabajo para construir servidores web en Node.js
// import express from "express";

// // acá se crea una nueva aplicación Express
// const app = express ();

// //esta linea define una ruta para la raíz del sitio web (“/”). Cuando alguien visita la raíz de mi sitio web, Express llama a la función que proporciono. Esta función toma dos argumentos: un objeto que representa la solicitud (request) y un objeto que representa la respuesta (response)
// app.get("/", (request,response)=> {

//     // esto envía una respuesta al cliente. En este caso, estoy enviando un simple mensaje de “Hola mundo desde express” en un encabezado 
//     response.send("<h1> Hola mundo desde express</h1>");
// })

// //Finalmente, esta linea inicia el servidor en el puerto 8080. Cuando el servidor comienza a escuchar solicitudes, imprime “Server listening on port 8080” en la consola
// app.listen(8080, () => console.log("Server listening on port 8080"));

//ACTIVIDAD EN CLASE
// Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto 8080. Además de configurar los siguientes endpoints:

// El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string, dando la bienvenida.
// El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}


import express from "express";

const app = express ();

app.get("/Bienvenidos", (request,response)=> {
    response.send("<h1 style='color=blue'> Bienvenidos a mi primer servidor express</h1>");
});

app.get("/usuario", (request,response) =>{
    response.json({
        nombre: "Cynthia",
        apellido: "Medina",
        edad:32,
        correo: "cynthia.medina.diaz@gmail.com"
    });
});

app.listen(8080, () => console.log("Server listening on port 8080"));