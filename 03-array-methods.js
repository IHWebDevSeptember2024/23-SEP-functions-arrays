const arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.splice(2, 1, "Ditto", "Cloister", "Caterpy"); // elimina a Joan y añade a ditto en su lugar

console.log(arrayNames);

const students = ["Eric", "Andrea", "Eleni"];

students.push("Sven"); // añade el nuevo valor al final

students.unshift("Tomás"); // añade al inicio

students.splice(2, 0, "Airam"); // no borro nada y lo añado en el índice 2

students.pop(); // borra el último

students.shift(); // borra el primero

console.log(students);

const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

pokemons.forEach(function hola(ditto) {
  console.log("Hola " + ditto);
});

const studentGreetings = [];

// CUANDO UNA FUNCIÓN SE INTRODUCE COMO ARGUMENTO SE CONOCE COMO CALLBACK FUNCTION

students.forEach(function greeting(student) {
  studentGreetings.push(`Hola ${student}, ¿qué tal estás?`);
});

students.forEach((student) => { // lo mismo 
  studentGreetings.push(`Hola ${student}, ¿qué tal estás?`);
});

const sayHi = () => {
  // podemos guardar una arrow function en una variable
  console.log("Hi");
};

sayHi(); // y luego invocarla

console.log(studentGreetings);

// SPLIT
// split es para crear un array en base a una string

const string =
  "lorem ipsum dolor bla bla lo que sea etcétera un montón de palabras aquí random, que sueño tengo Marcel cállate un rato";

const resultArray = string.split(" ");

console.log(resultArray);
