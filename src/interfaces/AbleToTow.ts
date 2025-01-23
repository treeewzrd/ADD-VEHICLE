// Import the AbleToTow interface without '.js' extension
import AbleToTow from "../interfaces/AbleToTow";  // Correct path
// Ensure that the paths to Car and Motorbike are correct
import Car from "../classes/Car";  // Correct path to Car class
import Motorbike from "../classes/Motorbike";  // Correct path to Motorbike class

class Truck implements AbleToTow {
  towingCapacity: number;
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number, towingCapacity: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.towingCapacity = towingCapacity;
  }

  // Implementing the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Check for towing capacity if it's a truck
    if (vehicle instanceof Truck && vehicle.towingCapacity > this.towingCapacity) {
      console.log("This truck exceeds the towing capacity.");
    } else if (vehicle instanceof Truck) {
      console.log("Towing a truck");
    } else if (vehicle instanceof Motorbike) {
      console.log("Towing a motorbike");
    } else if (vehicle instanceof Car) {
      console.log("Towing a car");
    } else {
      console.log("Cannot tow this vehicle");
    }
  }
}

export default Truck;
