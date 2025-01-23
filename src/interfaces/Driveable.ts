import Driveable from "../interfaces/Driveable.js";

class Car implements Driveable {
  started: boolean = false;
  currentSpeed: number = 0;

  start(): void {
    this.started = true;
    console.log("Car started.");
  }

  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Car accelerated by ${change} mph. Current speed: ${this.currentSpeed} mph.`);
    } else {
      console.log("Please start the car first.");
    }
  }

  decelerate(change: number): void {
    if (this.started && this.currentSpeed - change >= 0) {
      this.currentSpeed -= change;
      console.log(`Car decelerated by ${change} mph. Current speed: ${this.currentSpeed} mph.`);
    } else {
      console.log("Cannot decelerate below 0 mph.");
    }
  }

  stop(): void {
    this.started = false;
    this.currentSpeed = 0;
    console.log("Car stopped.");
  }

  turn(direction: string): void {
    if (this.started) {
      console.log(`Car turned ${direction}.`);
    } else {
      console.log("Please start the car first.");
    }
  }

  reverse(): void {
    if (this.started) {
      console.log("Car is reversing.");
    } else {
      console.log("Please start the car first.");
    }
  }
}

export default Car;
