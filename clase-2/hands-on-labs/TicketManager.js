// Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

// Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
// Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
// nombre
// lugar
// precio (deberá agregarse un 0.15 del valor original)
// capacidad (50 por defecto)
// fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
// Debe contar con un método “agregarUsuario” El cual recibirá:
// id del evento (debe existir, agregar validaciones)
// id del usuario
// El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
// Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
// Debe contar con un método “ponerEventoEnGira” El cual recibirá:
// id del evento
// nueva localidad
// nueva fecha
// El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)


class TicketManager {

    #precioBaseGanancia = 0.15;

    constructor () {
        this.eventos = [];
    }

    getEventos () {
        return this.eventos;
    }

    agregarEvento (evento){
        //actualizamos el precio del evento. La variable es parta que o se pueda acceder fuera de la clase
        evento.precio += evento.precio * this.#precioBaseGanancia;
//definir el id
        if(this.eventos.length === 0){
            evento.id = 1;
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1 //elemento que esta en la ultima posisicion del array y le sumo uno para que se incremente a lo ultimo
        }
        //una vez que tenemos el evento lo agregamos
        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.eventos.find((evento) => evento.id === idEvento)

        if(!evento) {
            return "No existe el evento";
        }

        if(!evento.participantes.includes(idUsuario)){
        evento.participantes.push(idUsuario);
        }else{
            return "El usuario ya existe";
        }
    }

    ponerEventoEnGira( idEvento, nuevaLocalidad, nuevaFecha){
        const evento = this.eventos.find((evento) => evento.id === idEvento);

        if(!evento){
            return "El evento no existe";
        }

        const newEvento = {
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length -1].id +1,
            participantes: [],
        };
        this.eventos.push(newEvento);
    }
}

class Evento {
    constructor (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleString()) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = [];
    }
}

//pruebas

const manejadorEventos = new TicketManager();

console.log(
    "agregando Evento coder 1 para Argentina, precio: 200, para 50 participantes"
);
manejadorEventos.agregarEvento(
    new Evento("Evento coder 1", "Argentina", 200, 50)
);

console.log(
    "agregando al evento con id 1 la participacion del usuario con id 2"
);
manejadorEventos.agregarUsuario(1, 2);

console.log(
    "creando una copia vacía del evento 1 pero en mexico y para el 2024"
);
manejadorEventos.ponerEventoEnGira(1, "Mexico", "30/11/2024");

console.log(manejadorEventos.getEventos());