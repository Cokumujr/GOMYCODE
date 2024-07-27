// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that implements the Vehicle interface
  class Car implements Vehicle {
    // make: string;
   // model: string;
   // year: number;
  
    constructor( public make: string, public model: string, public year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2020);
  
  // Call the start method on the instance
  myCar.start();  
  