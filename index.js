var Name = "bhaskar";
console.log(Name);
function add(a, b) {
    return a + b;
}
console.log(add(1, 5));
var arr = [1, 2, 3, 4, 5,];
arr.push(6);
arr.pop();
console.log(arr);
//primitive data types
var userName = "hello world"; //used for text
console.log(userName);
var age = 30; //used for numbers int&float
console.log(age);
var isActive = true; //used for true or false
console.log(isActive);
var file = null; //used for null value
console.log(file);
var bigNumber = 9874563215545n; //used for big numbers
console.log(bigNumber);
var value = undefined; //variable declared not value not assign
console.log(value);
var id = Symbol("id");
console.log(id);
//special types
var data = 10; //allows any data types and values not safe method in projects
data = true;
console.log(data);
var watch = "awesome"; //it compare both values and data types
if (typeof watch === "string") {
    console.log(watch);
}
//
function greet() {
    console.log("hello ");
}
greet();
//void used in functions that return noting;
;
//non primitive data types
var user = {
    name: "hello",
};
console.log(user);
//advanced custom types;
//arrays stored multiple values with same types
var num = [1, 2, 3, 4, 5];
var str = ["hai", "hello"];
console.log(num);
console.log(str);
var tuples = [123, "hello"]; //fixedLength fixedType
console.log(tuples);
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log(userRole);
//functions in typescript
function sumAdd(a, b) {
    return a + b;
}
console.log(sumAdd(5, 10));
function iGreet(name) {
    console.log("Hello " + name);
}
iGreet("hello");
function welcome(name) {
    console.log("welcome" + name);
}
welcome();
welcome("hai");
function urgent(name) {
    if (name === void 0) { name = "guest"; }
    console.log("Hello " + name);
}
urgent(); //if not it passes guest
function getUserDetails() {
    return {
        name: "Bhaskar",
        age: 23
    };
}
;
var iUser = getUserDetails();
console.log(iUser.name);
console.log(iUser.age);
function getMessage() {
    return "Welcome to TypeScript";
}
console.log(getMessage());
var sum; //function type variables
sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 3));
function printId(id) {
    console.log("ID is " + id);
}
printId(101);
printId("A101");
//union array 
var wantedData = ["hello", 33];
console.log(wantedData);
//array loop
var number = [10, 20, 30];
for (var i = 0; i <= number.length; i++) {
    console.log(number[i]);
}
;
//object and interfaces
var mUser = {
    name: "bhaskar",
    age: 22,
};
console.log(mUser.name, mUser.age);
var kUser = {
    name: "oosama binladen",
    age: 30
};
console.log(kUser);
;
var User = {
    name: "bhaskar",
    age: 25,
    isActive: true,
};
console.log(User);
var Uid = 110;
console.log(Uid);
var rId = 220;
var vId = "110";
console.log(rId);
console.log(vId);
var tNum;
var que = 140;
var root = "220F";
console.log(que + " " + root);
function printF(id) {
    if (typeof id === "string" && Boolean(id)) {
        console.log("id is a non-empty string");
    }
}
printF(656); // Pass a valid argument (number, string, or boolean) but returns nothing bcz of void
printF("boom");
printF(true);
printF("");
function printRId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Number ID:", id);
    }
}
;
printRId("bhaskar");
printRId(114);
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failed"] = 2] = "Failed";
})(Status || (Status = {}));
var orderStatus = Status.Success;
var dot = Status.Failed;
console.log(orderStatus + " " + dot);
//generic
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
var stringBox = new Box("text"); // value is string
var hulk = new Box(112); //we can call value in the 
console.log(stringBox);
console.log(hulk);
function identity(value) {
    return value;
}
identity(10);
identity("Hello");
//class blueprint of a creating objects
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Person;
}());
var p1 = new Person("iron man", 23);
console.log(p1.greet());
