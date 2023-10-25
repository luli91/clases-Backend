//Creación de una clase contador

//Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
// Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
// Realizar prueba de individualidad entre las instancias.



class Contador {
    static contadorGlobal = 0;

    constructor(responable) {
        this.responable = responable;
        this.contador = 0;
    }

    getResponsable() {
        return `${this.responable}`;
    }

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

  // Pruebas
const contador1 = new Contador("Fulanito");
const contador2 = new Contador("Arturito");

  // Contamos
contador1.contar();
contador2.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador1.contar();
contador2.contar();
contador1.contar();

  // Cuenta individual
console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());
console.log(contador2.getResponsable());
console.log(contador2.getCuentaIndividual());

  // Cuenta global
console.log(contador1.getCuentaGlobal());
console.log(contador2.getCuentaGlobal());