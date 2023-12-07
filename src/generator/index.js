function* generator() {
    yield 1;
    yield 2;
    yield 3;
};

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);

// <== O ==> //

function* iterate(familia) {
    for (let miembro of familia) {
        yield miembro
    };
};

const it = iterate(["Manuela", "Emma", "Iván", "Cristian", "Celia", "Juanma"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);