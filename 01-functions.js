// Una función es un bloque de código que podemos reutilizar

// FUNCTION DECLARATION

function myFunction() {
  console.log("Esto está dentro de la función");
}

// FUNCTION INVOCATION

//myFunction(); // si no añado el paréntesis no se ejecuta

// añadimos parámetros
function sum(ditto1, ditto2) {
  console.log(ditto1 + ditto2);
}

sum(1000, 300); // añadimos ARGUMENTOS (valores reales)
sum(5000, 300); // añadimos ARGUMENTOS
sum("Hola ", "Qué tal");

function multiply(ditto1, ditto2) {
  return ditto1 * ditto2; // el return nos permite guardar quello que devolvamos para reusarlo en un futuro
  console.log("sadsadsa"); // lo que está por debajo no se ejecuta
}

const result1 = multiply(2, 3); // estamos guardando los resultados
const result2 = multiply(2324, 3);
const result3 = multiply(2, 335243);
const result4 = sum(3, 4); // esto será undefined porque la función no tiene return

console.log(
  "La suma de todos los resultados es: ",
  result1 + result2 + result3
);

console.log("Esto es result 4: ", result4);

function substract(ditto1, ditto2) {
  if (typeof ditto1 === "string" || typeof ditto2 === "string") {
    return; // evitamos que nos ponga strings
  }

  return ditto1 - ditto2;
}

const result5 = substract(5, 3);

console.log("RESULT de la resta: ", result5);

console.log(substract(10, 20)); // también puedo añadir la función dentro del console.log

function example1(ditto1, ditto2) {
  const result = ditto1 + ditto2;
  return result;
}

function myFunction() {
  // SCOPE, la variable sólo es válida dentro de la función
  const myName = "Marcel";
  const managerName = "Marina";
  const careerAdvisorName = "Valentina";

  return [myName, managerName, careerAdvisorName];
}

const myName = "Germán";

console.log(myFunction());
