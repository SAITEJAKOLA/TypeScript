//Type Infere vs Type assign
let height = 160; //infer
let height2: number = 183; //assign

//Rule of thumb is let typescript infer as much as it can.
//when we declare the variables and not initiating them, In these kind of situations assign the type to varaibles;
let amount: number | string;
amount = 120;
amount = 'Saiteja';
// amount= true;//not allowed

//Objects
const obj = {
  firstName: 'saiteja',
  lastName: 'kola',
  age: 24,
  phoneNumber: '92843752988',
  gender: 'Male',
};

//using type assign
const obj2: {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
} = {
  firstName: 'saiteja',
  lastName: 'kola',
  age: 24,
  phoneNumber: '92843752988',
  gender: 'Male',
};
obj2.age = 25;
// obj2.age ="Hello World"//not allowed
obj2.phoneNumber;

//using interface
type StudentType = {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
};

const obj3: StudentType = {
  firstName: 'saiteja',
  lastName: 'kola',
  age: 24,
  phoneNumber: '92843752988',
  gender: 'Male',
};

//Arrays
const arrayOfString = ['String1', 'String2', 'String3']; //type = String[]
const arrayOfString1: (String | boolean)[] = [
  'HelloWorld',
  true,
  false,
  'Namasthe Coding',
];
const ele = arrayOfString.find((ele) => {
  if (ele.length == 7) return ele;
});
console.log(ele);
//array of object
//we can define the object using interface or we can while initilising only
let arrayOfObject: {}[] = [];

//Arrays of Arrays
const arrayOfArray = [['Hellow'], ['World'], ['from STK']];
//const arrayOfArray : string[][];

//tuples
let ourtuple: [number, boolean, string];
ourtuple = [23, true, 'Hello']; //valid
// ourtuple = [23,"hellow", true]; //not valid

//Typescript functions
// type any
// const add = (num1, num2)=>{
//     return num1+num2
// }
const add = (num1: number, num2: number) => {
  return num1 + num2;
};
//type number and expected to retun a number
add(1, 2); //works fine
// add('Hello',2)//not allowed
// add(1); //not allowed

//Always Always assign the type to a function. Dont let TS infer the type of a function.
const compare = (num1: number, num2: number): boolean => {
  return num1 > num2;
};

//when we dont return anything.
const log = (): void => {
  console.log('hellow');
};

//Advance Topics of TS

//union types //string | number called union type
let numberOrString: string | number | boolean | undefined | null =
  'Sai teja kola';

//letral Types
let rainbowcolours: 'red' | 'indigo' | 'violet' | 'green' | 'orange' = 'red';
rainbowcolours = 'orange'; //valid
// rainbowcolours = "pink"; // not allowed

// we can do the same thing using enum
enum RainbowColours {
  red,
  indigo,
  violet,
  green,
  orange,
  blue,
}

let rainbow: RainbowColours = RainbowColours.red;
rainbow = RainbowColours.blue;
// rainbow = "blue";//not valid
// rainbow = "black";//not allowed

//make things optional
let obj4: {
  property1: string;
  property2?: string;
} = {
  property1: 'Hello',
};

//interfaces
//using interface
interface Student {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
}

//using type
type Student1 = {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
};

let obj5: Student = {
  firstName: 'Sai teja',
  lastName: 'Kola',
  age: 24,
  phoneNumber: '78978740385',
  gender: 'male',
};

//type vs interface
//interface always results an object
//type can be used in any case
//eg: type student2 = string
//let obj6 :student2 //works fine

//Example: Type can be used to store an array objects, but interface cannot.
//          Interface always return an object

type Person = {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
}[]; //with type this can be done.

let arr5: Person = [
  {
    firstName: 'Sai teja',
    lastName: 'Kola',
    age: 24,
    phoneNumber: '78978740385',
    gender: 'male',
  },
  {
    firstName: 'Sai teja',
    lastName: 'Kola',
    age: 24,
    phoneNumber: '78978740385',
    gender: 'male',
  },
  {
    firstName: 'Sai teja',
    lastName: 'Kola',
    age: 24,
    phoneNumber: '78978740385',
    gender: 'male',
  },
]; // this works fine.

interface Person1 {
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  gender: String;
}
[]; //even if you declare that it is an array which store specific type of object. It will return an object only.

// let arr : Person1 = [{
//     firstName: "Sai teja",
//     lastName: "Kola",
//     age: 24,
//     phoneNumber: "78978740385",
//     gender: "male"
// },
// {
//     firstName: "Sai teja",
//     lastName: "Kola",
//     age: 24,
//     phoneNumber: "78978740385",
//     gender: "male"
// }] // not valid

//Ts clases

class Car {
  model: string;
  color: string;
  age: number;
  private peopleInPolicy: string[]; // we declare private varaibles which cant be accessed out side of the class.
  private readonly manufactureDate: string = '2019-01-01'; // we can modify the date.[Readonly mode]
  constructor(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;
  }

  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }

  addToPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }
  getPolicy() {
    return `The People in Policy are ${this.peopleInPolicy}`;
  }
}

const myJaguar = new Car('Jaguar', 'Blue', 2);

myJaguar.describe();
myJaguar.addToPolicy('Sai teja');
// myJaguar.peopleInPolicy // we cannot access the provate variables outside of the JS.;
myJaguar.getPolicy(); //using this function we can fetch the peopleInPolicy
//This is also called encapsulation - we are binding the variables and methods with the class.
//We can access them only with the class.

//Code cleanup
class Vehicle {
  private peopleInPolicy: string[]; // we declare private varaibles which cant be accessed out side of the class.
  private readonly manufactureDate: string = '2019-01-01'; // we can modify the date.[Readonly mode]
  constructor(public model: string, public color: string, public age: number) {
    this.model = model;
    this.color = color;
    this.age = age;
  }
  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }

  addToPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }
  getPolicy() {
    return `The People in Policy are ${this.peopleInPolicy}`;
  }
}
