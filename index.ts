let Name: string = "bhaskar";
console.log(Name);


function add(a:number,b:number){
    return a+b;
}
console.log(add(1,5));


let arr:number[]=[1,2,3,4,5,]
arr.push(6);
arr.pop();
console.log(arr);

//primitive data types

let userName:string = "hello world";  //used for text
console.log(userName);

let age:number = 30;    //used for numbers int&float
console.log(age);

let isActive:boolean = true;  //used for true or false
console.log(isActive);

let file:null = null;   //used for null value
console.log(file);

let bigNumber:bigint = 9874563215545n;  //used for big numbers
console.log(bigNumber);


let value:undefined = undefined; //variable declared not value not assign
console.log(value)


let id:symbol = Symbol("id")
console.log(id)

//special types


let data:any = 10;  //allows any data types and values not safe method in projects
data = true;
console.log(data);


let watch:unknown ="awesome"; //it compare both values and data types
   if(typeof watch === "string"){
    console.log(watch);
   }

//

function greet():void{
    console.log("hello ")
}
greet();
//void used in functions that return noting;
;

//non primitive data types
let user:object ={
 name:"hello",
}
console.log(user);


//advanced custom types;
//arrays stored multiple values with same types
let num:number[]=[1,2,3,4,5];
let str:string[]=["hai","hello"];
console.log(num);
console.log(str)


let tuples:[number,string]=[123,"hello"]; //fixedLength fixedType
console.log(tuples);


enum Role { //fixedSet of values;
  Admin,
  User,
  Guest
}

let userRole: Role = Role.Admin;
console.log(userRole);




//functions in typescript

function sumAdd(a: number, b: number): number {       //function with parameters
    return a + b;
}

console.log(sumAdd(5, 10));



function iGreet(name: string): void {       //function without return void
    console.log("Hello " + name);
}

iGreet("hello");



function welcome(name?: string): void {  //optional parameter must come to the end
    console.log("welcome"+name)
}
welcome();
welcome("hai");


function urgent(name: string = "guest"): void {  //default parameter
    console.log("Hello " + name);    
}
urgent(); //if not it passes guest




interface User {               //creating a structure of blueprint for an object.
    name: string;
    age: number;
}

function getUserDetails(): User {    //function that returns the interface of an object
    return {
        name: "Bhaskar",
        age: 23
    };
};
let iUser = getUserDetails();
console.log(iUser.name);
console.log(iUser.age);


function getMessage(): string {   //function returns the string;
    return "Welcome to TypeScript";
}
console.log(getMessage());


let sum: (a: number, b: number) => number;  //function type variables
sum = function(a:number, b:number):number{
    return a+b;
};
console.log(sum(1,3));


function printId(id: number | string): void {  //function with union holds multiple types
    console.log("ID is " + id);
}
printId(101);
printId("A101");


//union array 

let wantedData:(string | number)[]=["hello",33];
console.log(wantedData);


//array loop

let number:number[]=[10,20,30];

for(let i=0;i<=number.length;i++){
    console.log(number[i])
};


//object and interfaces

let mUser = {   //normal way of object creation
    name: "bhaskar",
    age: 22,
};
console.log(mUser.name, mUser.age);


let kUser: { name: string; age: number } = {  //object with notation 
    name: "oosama binladen",
    age: 30
};
console.log(kUser);


//interface


interface user{
    name:string,
    age:number,
    isActive:true,
};
let User:user={
    name: "bhaskar",
    age: 25,
    isActive: true,
};
console.log(User)



type UserId = number;  //A Type Alias allows you to create a custom name for any type.
let Uid: UserId = 110;
console.log(Uid)

type numId = number|string;  
let rId = 220;
let vId = "110";
console.log(rId);
console.log(vId);

let tNum: number| string;
let que = 140;
let root = "220F"
console.log(que+" "+root)

function printF(id:number|string|boolean) {  // do something if id is a non-empty string
    if (typeof id === "string" && Boolean(id)) {
        console.log("id is a non-empty string");
    }
}
printF(656); // Pass a valid argument (number, string, or boolean) but returns nothing bcz of void
printF("boom");
printF(true);
printF("");

function printRId(id: number|string){
  if (typeof id === "string"){
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id);
  }
};
printRId("bhaskar");
printRId(114);


enum Status {
  Pending,
  Success,
  Failed
}
let orderStatus: Status = Status.Success;
let dot:Status = Status.Failed;
console.log(orderStatus+" "+dot);



//generic
class Box<T> {  
  value: T;  
  constructor(value: T) { this.value = value; }  
}  
let stringBox = new Box<string>("text"); // value is string
let hulk = new Box<number>(112);  //we can call value in the 
console.log(stringBox);
console.log(hulk);

function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");



//class blueprint of a creating objects

class Person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greet():string {
        return "Hello " + this.name;
    }
}

let p1 = new Person("iron man", 23);
console.log(p1.greet());


