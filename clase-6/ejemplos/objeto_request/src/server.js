import express from "express"

const app = express ();
const PORT = 5000;

//esto es un middleware que se utiliza para hacer peticiones mas complejas
app.use(express.urlencoded({ extended: true }));

const usuarios = [
    {
        id:1,
        nombre: "Cynthia",
        edad :32,
    },
    {
        id:2,
        nombre: "Emiliano",
        edad :26,
    },
    {
        id:3,
        nombre: "Mauro",
        edad :21,
    },
];

app.get ("/", (req,res) =>{
    // console.log(req.params);
    console.log(req.query.nombre); //key=valor por lo general lo usamos para las busquedas
//buena prsctica si desestructuramos
    const { nombre, edad, ciudad} = req.query
    console.log(nombre, edad, ciudad);

    if(nombre){
        const usuario = usuarios.find((user) => user.nombre === nombre);
        if (usuario) {
            return res.send(`Bienvenido ${usuario.nombre}!`);
        } else{
            return res.send("Bienvenido invitado!")
        }
    }
//siempre tengo que poner tener un res(respuesta) porque me paso que queda cargando...
    res.send("Bienvenido invitado!");
});

app.get("/usuarios", (req,res) => {
    res.json(usuarios);
});

app.get("/usuarios/:id", (req,res) => {
    // console.log(req.params);
    const {id} = req.params;

    const usuario = usuarios.find((user) => user.id === Number (id));

    if (usuario) {
        res.json(usuario);
    }

    res.json ({ error: "User not found"});
});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));