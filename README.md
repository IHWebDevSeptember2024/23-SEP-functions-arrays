# Funciones y arrays

En esta clase hemos visto cómo crear funciones en JavaScript y cómo trabajar con arrays. 

## Declaración de funciones

Las funciones se pueden declarar así:

```javascript
function myFunction() {
  // código que ejecuta la función
}
```

Para ejecutar la función, simplemente se la llama por su nombre y se le añaden paréntesis:

```javascript
myFunction();
```

Recuerda que hasta que no llamemos a la función, el código que contiene no se ejecutará! 🙀

### Parámetros

Los parámetros son valores que se pasan a la función para usarlos en su código. No tienen un valor asignado, pero se pueden usar como si fueran variables.
El nombre que le pongamos es el que queramos (ditto).

```javascript
function myFunction(param1, param2) {
  console.log(param1, param2);
}
```

### Argumentos

Los argumentos son los valores que se pasan a la función cuando se llama. 

```javascript
myFunction('hola', 'adiós');
```

### Return

Las funciones pueden devolver un valor con la palabra reservada `return`. 

```javascript
function sum(a, b) {
  return a + b;
}
```

De este modo podemos guardar el valor que devuelve la función en una variable:

```javascript
const result = sum(2, 3);
console.log(result); // 5
```

Si no se especifica un valor de retorno, la función devolverá `undefined`.

## Arrays

Los arrays son estructuras que nos permiten almacenar varios valores en una sola variable. Se declaran así:

```javascript
const myArray = [1, 2, 3, 4, 5];
```

Para acceder a un valor concreto, se usa la posición del valor en el array. **¡Ojo!** Los arrays empiezan en la posición 0.

```javascript
console.log(myArray[0]); // 1
```

Para añadir un valor al final del array, se usa el método `push()`:

```javascript
myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]
```

Para eliminar el último valor del array, se usa el método `pop()`:

```javascript
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]
```

Para eliminar un valor en una posición concreta, se usa el método `splice()`:

```javascript
myArray.splice(2, 1);
console.log(myArray); // [1, 2, 4, 5]
```

Para saber cuántos elementos tiene un array, se usa la propiedad `length`:

```javascript
console.log(myArray.length); // 4
```

Para recorrer un array, se puede usar un bucle `for`:

```javascript
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

Otra forma de recorrer un array es con el método `forEach()`:

```javascript
myArray.forEach(function(element) {
  console.log(element);
});
```

La función que se pasa como argumento a `forEach()` se llama **callback**.

Automáticamente, `forEach()` ejecutará la función que le pasemos una vez por cada elemento del array. 

```javascript
myArray.forEach(function() {
  console.log("Hola"); // Hola Hola Hola Hola (una vez por cada elemento)
});
```

El método también pasará automáticamente un argumento a la función que le pasemos, que será el elemento del array que está recorriendo en ese momento.

```javascript
myArray.forEach(function(element) {
  console.log(element); // 1 2 4 5
});
```

Otra forma de añadir funciones como argumentos es con **arrow functions**:

```javascript
myArray.forEach((element) => {
  console.log(element); // 1 2 4 5
});
```

Hablaremos más sobre arrow functions en próximas clases.