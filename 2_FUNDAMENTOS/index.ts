// 1 - numbers
let x: number = 10

console.log(x)

x = 20

console.log(typeof x)

const y:any = 15.58484

console.log(y)
console.log(typeof y)
console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Simon";
console.log(firstName.toUpperCase());

let fullName: string

const lastName: string = "Franklin"

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// 3 - boolean
let a: boolean = false

console.log(a);
console.log(typeof a);

a = !a;
console.log(a);

//Type annotation e Type inference
const ann: string = "Teste";

const inf = "Teste";


console.log("Testando")