// JavaScript es un lenguaje de programación versátil que se utiliza principalmente para el desarrollo web. 
// Originalmente fue creado para agregar interactividad a las páginas web, pero con el tiempo ha evolucionado y ahora se utiliza en una amplia variedad de aplicaciones, desde desarrollo de servidores hasta aplicaciones móviles y de escritorio.
// Con la introducción de Node.js, JavaScript también se puede ejecutar en el lado del servidor, lo que ha ampliado aún más su alcance y popularidad.

// JavaScript es un lenguaje de programación interpretado, lo que significa que a diferencia de otros lenguajes de programación como Java, C++ o Python, no necesita ser compilado antes de ejecutarse. Esto facilita el desarrollo y la prueba rápida de código.
// También es un lenguaje basado en prototipos, lo que permite una herencia flexible y dinámica. (OOP)
// JavaScript es, aunque no directamente como Java, C++ o C#, un lenguaje de programación orientado a objetos, lo que significa que se basa en la creación y manipulación de objetos para organizar y estructurar el código.
// Sin embargo, con la inclusión de TypeScript, que no es más que JavaScript con tipado estático, JavaScript utiliza un enfoque basado en prototipos en lugar de clases tradicionales.
// Esto significa que los objetos pueden heredar propiedades y métodos directamente de otros objetos, lo que proporciona una mayor flexibilidad en la creación y manipulación de objetos.
// JavaScript también soporta programación funcional, lo que permite a los desarrolladores utilizar funciones como ciudadanos de primera clase, es decir, pueden ser asignadas a variables, pasadas como argumentos y retornadas desde otras funciones.

// Ejemplo de JavaScript orientado a objetos:
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

persona.saludar(); // Llama al método saludar del objeto persona