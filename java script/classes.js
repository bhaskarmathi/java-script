class car{
	constructor (name, year) {
		this.car =  car;
		this.year =  year;
	}age(currentYear = new Date().getFullYear()){
		return currentYear - this.year;
	}
	
}
const myCar = new car("volvo",2010)
const myCar2 = new car("benz",2011)
console.log(myCar)
console.log(myCar.age())
console.log(myCar2.age(2026))


class myCar {
	constructor (name,year){
		this.name = name;
		this.year = year;
	}age(x) {
	return x - this.year
		
	}
}
const date = new Date();
let year = date.getFullYear();
const car = new myCar("volvo",2012)

console.log(car);
console.log(car.age(2030))



class Vehicle {
  constructor(type, brand, year) {
	this.type = type;
	this.brand = brand;
	this.year = year;
  }

  getAge(currentYear = new Date().getFullYear()) {
	return currentYear - this.year;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(type, brand, year, batteryCapacity) {
	super(type, brand, year);
	this.batteryCapacity = batteryCapacity;
  }

  getBatteryInfo(unit) {
	return "Battery: " + this.batteryCapacity + " " + unit;
  }
}

const ev = new ElectricVehicle("Scooter", "Ola", 2022, 4);

console.log(ev.getAge());
console.log(ev.getBatteryInfo("kWh"));
