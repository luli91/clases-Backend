//Basándonos en el ejemplo anterior, desarrollar una vista web que permita mostrar los datos personales de múltiples usuarios. 

// Utilizar la misma estructura mostrada por el profesor, para poder levantar un servidor que utilice handlebars como motor de plantillas. 
// Configurar la plantilla para que muestre los siguientes datos: nombre, apellido, edad, correo, teléfono.
// Crear un array “users” que cuente con 5 usuarios de tipo objeto, cada uno con los datos mencionados arriba.
// Al llamar al método get ‘/’, generar un número random para elegir a alguno de los usuarios y mostrar el usuario seleccionado al azar en la plantilla.
// Observar los diferentes resultados en el navegador. 

import express from 'express';
import handlebars from "express-handlebars";
import __dirname from './utils.js';


const app = express (); 
const PORT = 5000;

//configuramos el motor de plantilla que se llama 'hbs'

app.engine('hbs', handlebars.engine({
    extname: 'hbs',//el nombre del archivo lo definimos acá. porej: index.hbs
    defaultlayout: 'main' //toma la plantilla principal
}))

//seteamos el motor
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

//public
app.use(express.static(`${__dirname}/public`));

//routes
app.get("/", (rep, res) => {
    res.render("index", {
        title: "Titulo nuevo",
        nombre: "Cynthia",
    });
});
