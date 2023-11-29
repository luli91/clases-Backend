import express from "express";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.routes.js";
import __dirname from "./utils.js";

// Socket Server
import { Server } from "socket.io";

const app = express();
const PORT = 5000;
//movimos el app.listen
const httpServer = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

// Instanciar Websocket
//creamos un servidor para sockets viviendo dentro de nuestro servidor principal
const socketServer = new Server(httpServer);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuramos el motor de plantilla
app.engine(
  "hbs",
  handlebars.engine({
    // index.hbs
    extname: "hbs",
    // Plantilla principal
    defaultLayout: "main",
  })
);

// Seteamos nuestro motor
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Public
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/", viewRouter);

const users = [];

// Socket communication

// El cliente se conecta con su websocket al socketServer (socketServer.on significa que está escuchando que algo pase), entonces, cuando socketServer escucha que hay una nueva conexión (connection), muestra en consola el mensaje “Nuevo cliente conectado”.

socketServer.on("connection", (socketClient) => {
  console.log("Nuevo cliente conectado");

  
//socketClient.on ("message", (data) => significa: "escuchar cuando el socket conectado envie un evento de tipo message"
//Una vez que recibe el evento de tipo message, con la data que se envio, muestra por consola

//Enviando información desde el servidor hacia el cliente

  socketClient.on("message", (data) => {
    console.log(data);
  });

//envio mensaje desde el servidor y lo tiene que escuchar desde el archivo main:
//server 1
// socketClient.on("server_message", (data) => {
//   console.log(data);
// });
  socketClient.emit("server_message", "Mensaje desde el servidor");
//server 2
  // Mensaje para todos, menos para el que hace la conexion. 
  socketClient.broadcast.emit("message_all", `${socketClient.id} Conectado`);
//server 3
  // Mensaje para todos
  socketServer.emit("message_all_2", "Mensaje a todos");

  // Mensajes del form
  socketClient.on("form_message", (data) => {
    console.log(data);
    users.push(data);
    socketClient.emit("users_list", users);
  });

  socketClient.emit("users_list", users);
});
