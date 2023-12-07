const asyncPromise = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Función Asíncrona"), 2000)
        : reject(new Error ("ERROR!"));
    });
};

const validate = async () => {
    console.log("Esperando respuesta...")
    // En la constante main, el await por asyncPromise solo bloqueará el resto del código de esta arrow function, ya que es el scope al que pertenece. Es decir, solo bloqueará el string "Proceso finalizado".
    const main = await asyncPromise()
    console.log(main)
    console.log("Proceso finalizado.")
};

console.log("Before");
validate();
// Si escribiésemos await validate(); el flujo de éste código dejaría de ser asíncrono ya que sí se detendría a esperar que terminase toda la función validate para poder imprimir el resto (el string "After"), llevando así un orden síncrono común a pesar de seguir esperando esos 2 segundos para resolver la promesa.
console.log("After"); 

/* La consola imprime

Before
Esperando respuesta...
After
Función Asíncrona   <== 2 segundos después
Proceso finalizado.

*/