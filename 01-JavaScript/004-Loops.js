// Bucles - Repetición de Código
// Los bucles se utilizan para ejecutar un bloque de código varias veces.
// En principio tenemos tres tipos de bucles clásicos en JavaScript: for, while y do-while.
// Pero existen variantes dentro de los mismos tipos de bucles, y muchos más, algunos son realmente complejos.

// Vamos con los clásicos:

// 1. Bucle "for"
// Se utiliza cuando se conoce de antemano cuántas veces se debe ejecutar el bloque de código.
// En su sintáxis básica, el bucle "for" consta de tres partes: inicialización, condición y actualización.
for (let i = 0; i < 5; i++) {
    console.log("Iteración for hasta 5:", i);
}
// 1.1 Dentro de los bucles, se puede utilizar la sentencia "break" para salir del bucle en cualquier momento.
// Misma sintáxis, pero con un "break" dentro del bloque de código del bucle que lo interrumpe cuando i es igual a 3.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Iteración for hasta un break en 3:", i);
}

// 1.2 De la misma manera se puede utilizar la sentencia "continue" para saltar a la siguiente iteración del bucle.
// De nuevo, misma sintáxis, pero con un "continue" dentro del bloque de código del bucle que salta la iteración cuando i es igual a 3.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Iteración for con un continue en 3:", i);
}

// 2. Bucle "while" (mientras)
// Se utiliza cuando no se sabe cuántas veces se debe ejecutar el bloque de código, y se basa en una condición.
// MIENTRAS la condición sea verdadera, el bloque de código se ejecuta.
// En su sintáxis básica, el bucle "while" consta de una condición.
let j = 0;
while (j < 5) {
    console.log("Iteración while hasta 5:", j);
    j++;
}

// 3. Bucle "do...while" (hacer...mientras)
// Similar al bucle "while", pero garantiza que el bloque de código se ejecute al menos una vez.
// Porque primero ejecuta el bloque de código y luego verifica la condición.
// En su sintáxis básica, el bucle "do...while" consta de una condición al igual que el "while".
let k = 0;
do {
    console.log("Iteración do...while que ejecuta al menos una vez aunque nunca cumpla la condición:", k);
    k++;
} while (k > 5);


// Además de los bucles clásicos que vimos hasta acá, existen muchos otros bucles en JavaScript.
// Como el bucle "forEach" y el bucle "for...of" que se utilizan para iterar sobre arrays y objetos.
// También el bucle "for...in" que se utiliza para iterar sobre las propiedades de un objeto.
// Y existen muchos otros bucles realmente complejos, como los bucles anidados.

// Vamos con algunos ejemplos:

// 4. Bucles anidados.
// Los bucles anidados son bucles dentro de bucles.
// Se utilizan para iterar sobre estructuras de datos más complejas, como matrices (arrays de arrays).
// En este ejemplo, tenemos un bucle "for" dentro de otro bucle "for".
for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        console.log("Bucle anidado - m:", m, "n:", n);
    }
}

// 5. Bucle "for...in"
// Este bucle se utiliza para iterar sobre las propiedades de un objeto.
// En cada iteración, la variable "key" toma el nombre de una propiedad del objeto.
// Luego, dentro del bloque de código, se puede acceder tanto al valor de la propiedad utilizando la notación de corchetes (objeto[key]) como al nombre de la propiedad utilizando la notación de punto (objeto.key).
// La sintáxis es similar a la del bucle "for", pero en lugar de inicialización, condición y actualización, se utiliza la palabra clave "in" para indicar que se está iterando sobre las propiedades de un objeto.
let person = { name: "Ana", age: 25 };
for (let key in person) {
    console.log("La propiedad es:", key, "y su valor es:", person[key]);
    // También se puede acceder al valor de la propiedad utilizando la notación de punto:
    // console.log("La propiedad es:", key, "y su valor es:", person.key); // Esto no funciona, ya que person.key busca una propiedad llamada
}

// 6. Bucle "for...of"
// Este bucle se utiliza para iterar sobre los elementos de un array.
// En cada iteración, la variable "number" toma el valor de un elemento del array.
// En cuanto a sintáxis, es similar al bucle "for...in", pero en lugar de iterar sobre las propiedades de un objeto, itera sobre los valores de un array.
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log("Elemento del array con for...of:", number);
}

// 7. Bucle "forEach"
// Este bucle se utiliza para iterar sobre los elementos de un array.
// Se define una función de callback que se ejecuta para cada elemento del array.
// La función de callback recibe como argumento el valor del elemento actual.
// La sintáxis es diferente a la de los bucles anteriores, ya que se utiliza el método "forEach" del array.
numbers.forEach(function (number) {
    console.log("Elemento del array con forEach:", number);
});