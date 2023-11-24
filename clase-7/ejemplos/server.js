import express from 'express';

const app = express ();

app.use(express.json())
app.use (express.urlencoded({extended: true}));
//Api de usuarios, datos en memoria

const usuarios = []

app.get("/", (req,res) => {
    res.json({
        mensaje: "Bienvenido a mi api soy Cynthia",
    });
});

app.get("/usuarios", (req,res) => {
    res.json({
        usuarios,
    })
})

//obtenemos el id
app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    const usuario = usuarios.find ((user) => user.id === Number(id));

    if(!usuario){
        return res.json({
            error: "User does not exists"
        });
    }

    res.json ({
        usuario,
    });
});


//creamos usuarios POST
app.post("/usuarios", (req, res) => {
    //console.log(req.body);
    const{ id, username, nombre} = req.body;

    usuarios.push({
        id: Number(id),
        username,
        nombre,
    })

    res.json({
        status:"creado",
    });
});

//actualizar usuario
//la direfencia es que pasamos el id por parametro
app.put("/usuarios/:id", (req, res) =>{
    const { id } = req.params;

    const { username, nombre } = req.body;
    const index = usuarios.findIndex((user) => user.id === Number(id));

    if (index === -1) {
        return res.json({
            error: "user not found"
        })
    }

    usuarios [index] = {
        id: Number(id),
        username,
        nombre, b
    };

    res.json({
        status:"Actualizado",
        usuario: {
            id: Number(id),
            username,
            nombre,
        }
    })
});

//eliminar usuario

app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex((user) => user.id === Number(id));

    if (index === -1) {
        return res.json({
        error: "User not found",
        });
    }

    usuarios.splice(index, 1);

    res.json({
        status: "Usuario Eliminado",
    });
});

app.listen(5000, () => console.log("Server listening on port 5000"));