// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. Compartir la definición en el Visual Studio Code.

let cliente ="Cynthia Medina";

console.log (cliente); 

let series = ["Outlander", "Family business", "Ozark", "The walking dead"];

let peliculas = ["La isla siniestra","Que paso ayer?" ]

let edad = 32 ;

console.log(cliente + " / " + edad + " / "+ series+" / "+ peliculas);

series.push("breaking bad");
peliculas.push("click");
edad++;


console.log("Datos agregados");
console.log(cliente + " / " + edad + " / "+ series+" / "+ peliculas);