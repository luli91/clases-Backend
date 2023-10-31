// Operador Nullish (??): Imagina que tienes dos cajas, una puede estar vacía y la otra contiene tu juguete favorito. Si la primera caja está vacía (es decir, su valor es null o undefined), entonces eliges la segunda caja. Aquí está el código JavaScript que representa esta situación:

let caja1 = null;
let caja2 = "Juguete favorito";

let eleccion = caja1 ?? caja2;

console.log(eleccion); // Imprime "Juguete favorito"

// Variables privadas: Imagina que tienes un diario secreto que solo tú puedes leer y cambiar. En JavaScript, puedes crear algo similar con una “variable privada”. Aquí te dejo un ejemplo de cómo podrías hacerlo en una clase:

class DiarioSecreto {
    #secreto; // Esta es una variable privada
    
    constructor(secreto) {
        this.#secreto = secreto;
    }
    
    leer() {
        return this.#secreto;
    }
    
    cambiar(nuevoSecreto) {
        this.#secreto = nuevoSecreto;
    }
}

    let miDiario = new DiarioSecreto("Mi secreto");

  console.log(miDiario.leer()); // Imprime "Mi secreto"

    miDiario.cambiar("Mi nuevo secreto");

  console.log(miDiario.leer()); // Imprime "Mi nuevo secreto"
