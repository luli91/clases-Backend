import express from 'express';
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.routes.js"
import __dirname from './utils.js';


const app = express (); 
const PORT = 5000;

//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use ("/", viewRouter);//para que se vea el indice de la pagina



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));