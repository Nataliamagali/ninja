class Ninja { // se creo la clase ninja 
    constructor(nombre) { // se agrego el atributo nombre 
        this.nombre = nombre;
        this.salud = 100; // se agrego el atributo salud.
        this.velocidad = 3; // valor de velocidad de 3
        this.fuerza = 3; // valor de fuerza de 3
    }

    sayName() { // se agrego el metodo sayname 
        console.log(`Nombre del Ninja: ${this.nombre}`); // se registra el nombre  de ninja.
    }

    showStats() { // se agrego el metodo de showStats
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`); // muestra la fuerza ,la velocidad y la salud del ninja.
    }

    drinkSake() { // se agrega un metodo drinkSake.
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y ganó 10 puntos de salud. Salud total: ${this.salud}`); // esto deberia agregar +10 de salud al ninja.
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
