import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import session from 'express-session';
// import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'

import sessionsRouter from "./routes/sessions.router.js"
import usersViewRouter from "./routes/users.views.router.js";

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//conectamos nuestra session con el file storage
// const fileStore = FileStore(session)


const MONGO_URL = "mongodb://127.0.0.1:27017/clase19?retryWrites=true&w=majority";

//configuracion de session
app.use(session(
    //ttl: time to live in seconds.
    //retries: reintentos para que el servidor lea el archivo del storage
    //path: ruta a donde buscara el archivo del session storage


    {
        //usando session-file-storage
        // store: new fileStore({path: "./sessions", ttl: 15, retries: 0}),

        // usando conncet mongo
        store: MongoStore.create({
            mongoUrl: MONGO_URL,
            //mongoOptions son opciones para el save de las sessions
            mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true},
            ttl: 10 * 60
        }),

        secret: "coderS3cr3t",
        resave: false, //guarda en memoria
        saveUninitialized: true // lo guardo a penas se crea
    }
))


app.use ('/', viewsRouter)
app.use('/users', usersViewRouter)
app.use('/api/sessions', sessionsRouter)

const PORT = 9090
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log(("Conectado a exito a la DB usando mongoose"));
    }catch (error){
        console.error("No se pudo conectar a la BD usando mongoose!" + error);
        process.exit();
    }
}
connectMongoDB();