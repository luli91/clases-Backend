// ¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

// El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Edad
// Curso
// El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

// El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios

const fs = require ('fs')

//Agregé este condicional porque cada vez que imprimia el codigo se repetian los usuarios 
// Compruebo si el archivo ya existe
if (fs.existsSync('./Usuarios.json')) {
    // Si existe, lo borro
    fs.unlinkSync('./Usuarios.json');
}

class ManagerUsurarios{
    //si yo quiero usar varios manager usuarios debo crear el constructor con el nombre del archivo como parametro. por ej:  para que manejar diferentes tipos de usuarios
    constructor(fileName){
        this.fileName = fileName;
        if(fs.existsSync(fileName)){
            try{
                let usuarios= fs.readFileSync(fileName, "utf8");
                this.usuarios = JSON.parse(usuarios); 
            } catch (error) {
                //puede ser que halla un archivo vacion entonces si esta vacio que me devuelva un array vacio
                this.usuarios = [];
            }
        } else {
            this.usuarios = [];
        }
    }

    async saveFile(data) {
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, "\t"));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async crearUsuario(usuario) {
        this.usuarios.push(usuario);
        const respuesta = await this.saveFile(this.usuarios);

        if (respuesta){
            console.log("usuario creado");
        } else {
            console.log("Hubo un error al crear un usuario");
        }

    }
    consultarUsuarios () {
        console.log(this.usuarios);
        return this.usuarios;

    }

}
class Usuario {
    constructor (nombre, apellido, edad, curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
}

//pruebas
const usuario1 = new Usuario ("Mariano", "Lopez", 26, "Backend");
const usuario2 = new Usuario ("Felipe", "Ponce", 36, "Backend");
const usuario3 = new Usuario ("Arturo", "Feliz", 28, "Frontend");

const manager = new ManagerUsurarios("./Usuarios.json");

manager.crearUsuario (usuario1);
manager.crearUsuario (usuario2);
manager.crearUsuario (usuario3);

console.log(manager.consultarUsuarios());
