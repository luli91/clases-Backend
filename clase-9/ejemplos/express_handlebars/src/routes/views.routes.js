import { Router } from "express";

const router = Router ();
//routes
router.get("/", (rep, res) => {
    res.render("index", {
        title: "Titulo nuevo",
        nombre: "Cynthia",
        fileCss:"style.css",
    });
});

//en handlebars en el condicional solo se pone un dato un booleano no se puede como la manera que veniamos viendo. Ej: {{#if booleano}}
// Agregar un arreglo con nombre “food”, el cual contendrá 5 objetos con los datos: name, price
// Con base en la estructura ya desarrollada. Agregar al usuario de prueba un campo “role” el cual podrá ser “admin” o “user” 
// Modificar la plantilla para que, si el usuario es de rol admin, pueda ver la lista de alimentos, si es usuario, sólo verá la bienvenida

// Food

const food = [
    { name: "Pizza", price: 100 },
    { name: "Hamburguesa", price: 80 },
    { name: "Empanada", price: 20 },
    { name: "Milanesa", price: 60 },
    { name: "Fideos", price: 40 },
];

const user = {
    name: "Cynthia",
    role: "admin", //si coloco otra cosa aca seria false en la linea 53 por lo tanto en food.hbs lo toma como false y en la pagina solo me mostraria No ten´s acceso
}
router.get('/food', (req, res) => {
    res.render("food", {
        title: "Food",
        isAdmin: user.role === "admin", //si es admin es tru o false?
        fileCss: "food.css", //array food
    });
});

// form 
router.get("/form", (req, res) => {
    res.render("form", {
        title: "Form example",
        fileCss: "styles.css",
    });
});

//para que se pueda enviar los datos

const users = [];

router.post("/user", (req, res) => {
    const { name, age } = req.body

    users.push({
        name,
        age,
    });

    console.log(users);
    res.redirect("/")
})
export default router;