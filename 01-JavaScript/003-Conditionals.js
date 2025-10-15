// Conditional Statements - Toma de decisiones
// Los condicionales son estructuras de control que permiten ejecutar diferentes bloques de código dependiendo de una condición.

// El condicional "if" se utiliza para ejecutar un bloque de código si una condición es verdadera.
let loggedIn = true;
if (loggedIn) {
    console.log("Usuario ha iniciado sesión.");
}

// El condicional "if...else" se utiliza para ejecutar un bloque de código si una condición es verdadera y otro bloque si no lo es.
let age = 20;
if (age >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// El condicional "else if" permite verificar múltiples condiciones posiblemente verdaderas. Y si ninguna se cumple, se ejecuta el bloque "else".
let score = 85;
if (score >= 90) {
    console.log("Excelente");
} else if (score >= 75) {
    console.log("Bueno");
} else if (score >= 50) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}

// El operador ternario es una forma abreviada y moderna de escribir un condicional "if...else".
let isMember = false;
let discount = isMember ? 0.1 : 0.05; // Si es miembro, 10% de descuento, si no, 5%
console.log("Descuento aplicado:", discount * 100 + "%");

// El condicional "switch" se utiliza para ejecutar uno entre muchos bloques de código basándose en el valor de una expresión.
// Cada "case" representa un valor posible, y "default" se ejecuta si ninguno de los casos coincide.
// La palabra clave "break" se utiliza para salir del switch una vez que se ha ejecutado un caso.
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Lunes";
        break;
    case 2:
        dayName = "Martes";
        break;
    case 3:
        dayName = "Miércoles";
        break;
    case 4:
        dayName = "Jueves";
        break;
    case 5:
        dayName = "Viernes";
        break;
    case 6:
        dayName = "Sábado";
        break;
    case 7:
        dayName = "Domingo";
        break;
    default:
        dayName = "Día inválido";
}
console.log("El día de la semana es:", dayName);

// Ejemplo práctico: Verificar si un número es par o impar