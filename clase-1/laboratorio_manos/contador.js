//Creación de una clase contador



//definir la clase contador
//Debe existir una variable estatica que funcione como contador global de todas las instancias de contador creadas
class Contador {
    static contadorGlobal = 0;
//la clase se crea con un nombre representando al responsable del contador
//el contador debe inicializarse en 0
    constructor(responable) {
        this.responable = responable;
        this.contador = 0;
    }

  
//Defino el método getResponsable, el cual debe devolver el responsable de dicho contador.
    getResponsable() {
        return `${this.responable}`;
    }

    // Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
    getCuentaIndividual() {
        return this.contador;
    }

// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
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
console.log(contador1.getResponsable()); // Fulanito
console.log(contador1.getCuentaIndividual()); // 5
console.log(contador2.getResponsable()); // Arturito
console.log(contador2.getCuentaIndividual()); //3

  // Cuenta global
console.log(contador1.getCuentaGlobal()); //8
console.log(contador2.getCuentaGlobal()); //8

//Me imprime en consola:

// Fulanito
// 5
// Arturito
// 3
// 8
// 8