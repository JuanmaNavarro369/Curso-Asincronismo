function sum(a,b){
    return a + b;
};
function rest(a,b){
    return a - b;
};
function mult(a,b){
    return a * b;
};
function div(a,b){
    return a / b;
};
function calc(a, b, callback){ //=> El parámetro callback puede recibir cualquier nombre
    return callback(a, b);
};

console.log(calc(2, 2, div));
console.log(calc(2, 2, sum));

//-------------------------------------------------------------------//

setTimeout(function() {
    console.log("Hello!");
}, 2000);

// OR //

function saludo(name) {
    console.log(`Hola ${name}`)
}
setTimeout(saludo, 2000, "Juanma");

// EJEMPLO //

function execCallback(callback) {
    const name = prompt("¿Cuál es tu nombre?")
    window.setTimeout(callback, 2000, name);
  };

function saludar(nombre) {
    console.log(`Felicitaciones ${nombre}!`);
  };
  
execCallback(saludar);