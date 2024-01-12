import { Router } from 'express';
import userModel from "../models/user.model.js";

const router = Router ();

//register
router.post ('/register', async (req, res) =>{
    const { first_name, last_name, email, age, password } = req.body; 
    console.log(req.body);
    //validamos si el user esta en la base de datos
    const exist = await userModel.findOne({ email });
    if (exist) {
        return res.status(400).send({ status: 'error', msg: "Usuario ya existe!"})
    }

    const user = { 
        first_name, 
        last_name, 
        email, 
        age, 
        password 
    }

    const result = await userModel.create(user);
})

//login
router.post ('/login', async (req, res) =>{
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password }); //ya que es password no esta hasheado, podemos buscarlo directamente

    if (!user) return res.status(401).send({ status:'Error', error: "Incorrect credentials"})

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age
    }

    res.send({ status: "Sucess", payload: req.session.user, message: "Primer logueo realizado!"});
})

export default router;