"use strict";
// Implement the Car class that implements the Vehicle interface
class Car {
    // make: string;
    // model: string;
    // year: number;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);
// Call the start method on the instance
myCar.start();
