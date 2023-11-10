//Práctica de módulos nativos: fs + crypto
//Se creará una clase “UserManager” que permitirá guardar usuarios en un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar los módulos nativos  fs y crypto, El manager debe contar con los siguientes métodos:
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Nombre de usuario
// Contraseña
// El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la contraseña debe estar hasheada por seguridad
//El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.

const fs = require ("fs")
const crypto = require ("crypto")

class UserManager {
    constructor (path){
        try {
            this.path = path;
            let users = fs.readFileSync(path, "utf-8");
            this.users = JSON.parse(users);
        } catch{
            this.users = []; // para no leer el archivo a cada rato
        }
    }
    //este codigo se puede realizar sincrono en vez de asincrono
    async crearUsuario(user){
        //aca hasheamos la contraseña con las dependencias de crypto
        const hashPassword = crypto
        .createHash("sha256") //Esto crea y devuelve un objeto hash que utiliza el algoritmo SHA-256. Un algoritmo hash es una función que convierte los datos de entrada en una cadena de longitud fija que es única para los datos de entrada.
        .update(user.password) //Este método se utiliza para agregar datos al objeto hash. En este caso, se está agregando la contraseña del usuario.
        .digest ("hex");//Este método se utiliza para calcular el hash de los datos que se han agregado utilizando el método update(). El argumento "hex" indica que el resultado debe ser una cadena hexadecimal.
        user.password = hashPassword;

        this.users.push(user);

        try{
            await fs.promises.writeFile(this.path, JSON.stringify(this.users, null, "\t"))
        } catch (error) {
            console.log("Error creating user" + error);
        }
    }
    validarUsuario(username, password) {
        //busca en la lista de usuarios para ver si hay un usuario con el nombre de usuario proporcionado. Si existe, userExists será ese usuario caso contrario sera undefined
        const userExists = this.users.find ((user) => user.username === username);
        // esta condicion verifica si es usuario es undefined imprime el error
        if (!userExists){
            console.log("User does not exists");
            return;
        }
        //el código está tomando la contraseña proporcionada y la está transformando en un código secreto
        //se vuelve a realizar este paso como en el metodo crearUsuario para proteger la seguridad de la contraseña
        const hashPassword = crypto
        .createHash("sha256") 
        .update(password) // sin user
        .digest ("hex");

        console.log("User password: " + userExists.password);
        console.log("New pasword: " + hashPassword);

        // Cuando se crea el usuario, se transforma la contraseña en un código secreto y se guarda ese código en lugar de la contraseña real. Luego, cuando un usuario intenta iniciar sesión, se toma la contraseña que ingresó, se transforma en un código secreto y se compara con el código que se guardó cuando se creó el usuario
        //con este condicional comparamos las contraseñas
        if (userExists.password === hashPassword){
            console.log("Logged!");
        } else {
            console.log("Invalid password");
        }
    }
}

class User {
    constructor (name, lastname, username, password){
    this.name = name;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    }
}
const user = new UserManager("./Users.json");
user.crearUsuario(new User("emi", "perez", "emiperez", "123"));
user.crearUsuario(new User("yessi", "perez", "yessiperez", "1234"));
user.crearUsuario(new User("facu", "perez", "facuperez", "pauli"));
user.crearUsuario(new User("paula", "perez", "pauperez", "facu123"));

user.validarUsuario("emiperez", "123");
// user.validarUsuario("pauperez", "facu123");
// user.validarUsuario("yessiperez", "123");
// user.validarUsuario("yessuperez", "123");