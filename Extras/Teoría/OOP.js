// Object Oriented Programming (OOP) in JavaScript
// =====================================================================
// Los 4 pilares de la Programación Orientada a Objetos:
// 1️⃣ Abstracción
// 2️⃣ Encapsulación
// 3️⃣ Herencia
// 4️⃣ Polimorfismo
// =====================================================================
// Introducción:
// La Programación Orientada a Objetos (OOP) es un paradigma de programación
// que utiliza "objetos" para modelar datos y comportamientos del mundo real.
// En JavaScript, las clases y objetos son herramientas clave para implementar OOP.
// Un objeto es una colección de propiedades y métodos. Atributos y comportamientos. Características y acciones.
// =====================================================================
// 1️⃣ ABSTRACCIÓN
// =====================================================================
// Abstraer significa *modelar algo del mundo real* en código. Es un "molde".
// Para esto, creamos una clase que representa dicho "molde" de una "Persona" con sus atributos y comportamientos.

class Person {
  // Atributos (y constructor)
  constructor(name, age) {
    // El llamado metodo constructor, define cómo se crea un objeto "Person", cuales son sus atributos iniciales.
    // El "molde" no tiene valores concretos, sino genéricos que se definen al momento de crear una instancia.
    // Con la palabra reservada "this" definimos las propiedades (abstractas) del objeto.
    this.name = name;  // propiedad pública
    this.age = age;    // propiedad pública
  }

  // Métodos (funciónes dentro de una clase)
  // Los métodos definen comportamientos que los objetos de esta clase pueden realizar.

  // Un método para saludar, usando las propiedades del objeto "this".
  greet() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old.`);
  }

  // Un método para celebrar un cumpleaños (aumentar la edad)
  haveBirthday() {
    this.age++; // aumenta la edad
    console.log(`${this.name} is now ${this.age}!`);
  }
}

// Creamos una instancia (objeto literal, ya no es un molde abstracto) de la clase Person
// Los argumentos "Ana" y 25 se asignan a las propiedades name y age respectivamente.
const ana = new Person("Ana", 25); // "new" crea un nuevo objeto basado en la clase Person

// Usamos los métodos del objeto "ana"
ana.greet();         // "Hi! I'm Ana and I'm 25 years old."
ana.haveBirthday();  // "Ana is now 26!"


// =====================================================================
// 2️⃣ ENCAPSULACIÓN
// =====================================================================
// Encapsular significa *proteger los datos internos de un objeto*.
// Evitamos el acceso directo a ciertas propiedades para mantener la integridad del objeto.
// Solo el mismo objeto puede acceder y modificar sus propiedades.
// Se pueden usar métodos públicos, pero quien accede realmente es el objeto mismo.
// Se logra usando campos privados (#) o convenciones como "_property".

class BankAccount {
  // El #balance es un campo privado (solo accesible dentro de la clase)
  #balance;
  // Constructor
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  // Métodos públicos para interactuar con el balance
  deposit(amount) {
    if (amount <= 0) {
      console.log("❌ Amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`✅ ${this.owner} deposited $${amount}.`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("❌ Insufficient funds.");
      return;
    }
    this.#balance -= amount;
    console.log(`💸 ${this.owner} withdrew $${amount}.`);
  }

  getBalance() {
    // Método "getter" para acceder al valor privado
    console.log(`💰 Current balance of ${this.owner}: $${this.#balance}`);
  }
}

// Creamos una cuenta bancaria para Carla

const carla = new BankAccount("Carla", 100);
carla.deposit(50);
carla.withdraw(30);
carla.getBalance(); // "💰 Current balance of Carla: $120"
// carla.#balance ❌ → No se puede acceder directamente (Error)


// =====================================================================
// 3️⃣ HERENCIA
// =====================================================================
// La herencia permite que una clase “hija” extienda a otra “padre”,
// heredando sus propiedades y métodos.
// Esto promueve la reutilización de código y la creación de jerarquías.
// Las clases hijas pueden agregar nuevos comportamientos o sobrescribir los existentes.

// Clase hija Employee que hereda de Person

class Employee extends Person {
  constructor(name, age, role) {
    // super() llama al constructor de la clase padre (Person)
    super(name, age);
    // Nuevo atributo específico de Employee
    this.role = role;
  }

  // Método nuevo, propio de Employee
  work() {
    console.log(`${this.name} is working as a ${this.role}.`);
  }

  // Método heredado de Person, pero podemos sobrescribirlo (override)
  // De esta manera es que dos objetos pueden responder diferente al mismo método.
  // Por esto lo próximo a ver es Polimorfismo.
  greet() {
    console.log(`Hello, I'm ${this.name}, a ${this.role} at the company.`);
  }
}

const luis = new Employee("Luis", 30, "Developer");
luis.greet(); // "Hello, I'm Luis, a Developer at the company."
luis.work();  // "Luis is working as a Developer."
luis.haveBirthday(); // método heredado de Person


// =====================================================================
// 4️⃣ POLIMORFISMO
// =====================================================================
// “Polimorfismo” significa que *métodos con el mismo nombre*
// pueden comportarse distinto según el objeto que los use.

// Creamos un array con diferentes tipos de objetos:

const people = [
  new Person("Sofi", 20),
  new Employee("Tomás", 28, "Designer"),
  new Employee("Mica", 35, "Manager"),
];

// Todos tienen un método .greet(), pero se comporta diferente
people.forEach(p => p.greet());

// 🔹 Person → "Hi! I'm Sofi and I'm 20 years old."
// 🔹 Employee → "Hello, I'm Tomás, a Designer at the company."
// 🔹 Employee → "Hello, I'm Mica, a Manager at the company."


// =====================================================================
// 🔧 BONUS: FACTORY FUNCTION vs CLASS
// =====================================================================
// Una alternativa a las clases es una "Factory Function":
// una función que devuelve objetos con propiedades y métodos.
// No usa "new" ni "this".

function createCar(brand, model) {
  return {
    brand,
    model,
    info() {
      console.log(`🚗 ${brand} ${model}`);
    }
  };
}

const car = createCar("Toyota", "Corolla");
car.info(); // "🚗 Toyota Corolla"

// 🔹 Las factory functions son útiles para crear objetos simples,
// pero las clases permiten herencia, encapsulación y estructura más clara.
// Elegir entre ambos depende del caso de uso y preferencias.


// =====================================================================
// 💬 RESUMEN VISUAL DE LOS PILARES
// =====================================================================
// 🔸 Abstracción → modelar el mundo real (Person, BankAccount)
// 🔸 Encapsulación → ocultar detalles internos (#balance)
// 🔸 Herencia → extender comportamiento (Employee hereda de Person)
// 🔸 Polimorfismo → mismo método, distintos comportamientos (greet())
// =====================================================================

