//Comparadores: == compara el contenido, === compara el contenido y el tipo

var a = [1, 2, 3];
var b = "1,2,3";

console.log(a == b);
console.log(a === b);


//let y var
var c = 5;
var d = 10;

if (c === 5) {
    let c = 8;
    var d = 15;
    console.log(c); //el scope es solo en el bloque
    console.log(d); //el scope es global
}

console.log(c);
console.log(d);


//Tipos de datos
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let name2: string = "Jaume";

let hello = "Hello";

// Podemos crear nuestros tipos de datos
type dni = number;
let dniJaume: dni = 324324;


class Vehicle {
    private brand: string;
    private year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string) {
        this.brand = brand;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number) {
        this.year = year;
    }
}

let myCar: Vehicle = new Vehicle("Toyota", 2020);
console.log(myCar.getBrand());

class VehicleAlt {

    constructor(private _brand: string, private _year: number) { }

    get brand(): string {
        return this._brand;
    }

    set brand(brand: string) {
        this._brand = brand;
    }

    get year(): number {
        return this._year;
    }

    private set year(year: number) {
        this._year = year;
    }
}

let myCarAlt: VehicleAlt = new VehicleAlt("Mercedes", 1999);

console.log(myCarAlt.brand);
myCarAlt.brand = "Toyota";
console.log(myCarAlt.brand);


class Motorcycle extends VehicleAlt {

    constructor(_brand: string, _year: number, private _cc: number) {
        super(_brand, _year);
    }


    public get cc(): number {
        return this._cc;
    }

    public set cc(cc: number) {
        this._cc = cc;
    }

}

let myMotorcicle: Motorcycle = new Motorcycle("Suzuki", 2015, 250);

console.log(myMotorcicle.cc);
console.log(myMotorcicle.brand);

interface Subject {
    name: string;
    qualifications: number;
    description?: string;

}

let mySubject: Subject = {
    name: "Maths",
    qualifications: 9,

}

class Subjects implements Subject {
    name: string;
    qualifications: number;
    description?: string | undefined;

    constructor(name: string, qualifications: number) {
        this.name = name;
        this.qualifications = qualifications;
    }

}

type param = number | string;

function sumar(num1: param, num2: param) {
    return Number(num1) + Number(num2);
}

let number1: string = "16";
let number2: number = 16;
console.log(sumar2(number1, number2));

function sumar2(num1: number | string, num2: number | string) {
    return Number(num1) + Number(num2);
}

let arrayNums: number[] = [1, 2, 3, 5];

for (let i = 0; i < arrayNums.length; i++) {
    console.log(arrayNums[i]);

}

for (let num in arrayNums) {
    console.log(num);
    console.log(arrayNums[num]);
}

