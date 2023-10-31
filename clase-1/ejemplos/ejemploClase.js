

class Persona {
    //constructor(nombre, edad): Este es el constructor de la clase Persona. Toma dos parámetros: nombre y edad. El constructor inicializa dos propiedades de la instancia de la clase: nombre y edad.
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
//static especie = "Humano"; define una propiedad estática llamada especie que es compartida por todas las instancias de la clase. En este caso, se inicializa con el valor "Humano"
    static especie = "Humano";
//hablar(texto): Este método toma un parámetro llamado texto y lo imprime en la consola junto con el nombre de la persona que está hablando.
    hablar(texto) {
        console.log(`${this.nombre}: ${texto}`);
    }
//cambiarEspecie(especieNueva): Este método toma un parámetro llamado especieNueva y lo asigna a la propiedad estática especie de la clase Persona
    cambiarEspecie(especieNueva) {
        Persona.especie = especieNueva;
    }
//datos(): Este método imprime en la consola el nombre y la edad de la instancia de la clase.
    datos() {
        console.log(`${this.nombre} - ${this.edad}`);
    }
} 

  // Instancias
  // se crean dos instancias de la clase Persona: una llamada lautaro con nombre “Lautaro” y edad 23, y otra llamada matias con nombre “Matias” y edad 32. Se llama al método datos() en ambas instancias para imprimir sus nombres y edades en la consola.
const lautaro = new Persona("Lautaro", 23);
const matias = new Persona("Matias", 32);

lautaro.datos();
matias.datos();

console.log(Persona.especie);
lautaro.cambiarEspecie("Asgardiano");

console.log(Persona.especie);