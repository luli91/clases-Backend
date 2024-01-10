import { Router } from "express";
import cookieParser from "cookie-parser";

const router  = Router ();

//cookie sin firma
// router.use(cookieParser())

// Con firma
router.use(cookieParser('CoderS3cr3tC0d3'))


router.get('/', (req, res) => {
    res.render('index', {})
});

router.get('/setcookie', (req, res) => {
    //sin firma 
    //por parametro le paso clave y valor, 3er paramatro para configuraciones 
    // res.cookie('CoderCookie','Esta es una cookie sin firma',{ maxAge: 30000}).send('cookie asignada con exito')

    // Con firma
    res.cookie('CooderCookie', 'Esta es una cookie sin firma!!', { maxAge: 30000, signed: true }).send('Cookie asignada con exito')
});


router.get('/getcookie', (req, res) => {
    //sin firma
    // res.cookie(req.cookies)

    // Con firma
    res.send(req.signedCookies)
});

router.get('/deletecookie', (req, res) => {
    //sin firma
    res.clearCookie('CooderCookie').send('Cookie borrada!')
});

//genera un id cada vez que inicio una sesion
router.get('/session', (req, res)=> {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Se ha visitado este sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter = 1
        res.send('Bienvenido')
    }
});

//elimina la sesion 
router.get('/logout', (req, res) => {
    req.session.destroy(error => {

        if (error) {
            res.json({ error: 'Error logout', msg: 'Error al cerrar la session'})
        }
        res.send('Session cerrada correctamente!')
    })
});

router.get('/login', (req, res) => {
    const { username, password } = req.query
    if ( username !=  'pepe'|| password !== '123qwe') {
        return res.status(401).send("Login failed, check ypour credentianls")
    } else {
        req.session.user = username;
        req.session.admin = false;
        res.send('Login Successful')
    }
});

//midleware auth
function auth (req, res, next) {
    if(req.session.user === 'pepe' && req.session.admin){
        return next()
    } else{
        return res.status(403).send("Usuario no autorizado para ingresar a este recurso.");
    }
}

//ruta protegida
router.get('/private', auth, (req, res)=> {
    res.send('Si estas viendo esto es porque estas autorizado a este recurso!')
});

export default router;