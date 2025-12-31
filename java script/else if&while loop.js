// let age = 20;
// let result = age >= 60
// ?"old"
//  :age >=80
// ?"minor":"major";
// console.log(result);

// let age = 20;

// let result = age >= 60
//   ? "old"
//   : age >= 60
//     ? "major"
//     : "minor";

// console.log(result);

// let day = 5;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   default:
//     console.log("Invalid day");

// }

// let month = 6;
// switch (month){

//   case 1:
//     console.log("january");
//     break;

//   case 2:
//     console.log("feb");
//     break;

//   case 3:
//    console.log("march");
//    break;

//   case 4:
//    console.log("april");
//  break;

//   case 5:
//     console.log("may")
//    break;

//   case 6:
//   console.log("june");
//   break;

//   default:
//   console.log("invalid month")

// // }

// let  mobileInStore = "iphone";

//  let dreamMobile = "iphone";

//  let favColors = ["white","blue"];

//  let colorInStore = "white";

//  let price = 80000;

//  let budget = 80000;

//  if((mobileInStore === dreamMobile && colorInStore === "white" || colorInStore === "blue")&& price >= budget) {
//    console.log("i will buy iphone")
//  }
//      else{
//    console.log("i will not buy iphone")
//  }

// let a = 5000;
// let b = 100;
// let c = 35000;

// if(a>b && a>c){
//   console.log("a is grater")
// } else if (b>a && b>c){
//   console.log("b is grater")
// } else {
//   console.log("c is grater")
// }

// let num = 1
// while(num<=5){
//   console.log("pavan vs thonda")
//   num++;
// }

// let a = 10;
// while(a>=1){
//   console.log(a)
//     a--
// }

// let a = 0;
// while(a <= 5){
//  if(a % 2 ==0) {
//     console.log(a);
//   }
//   a++;
// }

// let x = 0;
// while(x <=10){
//   if( x % 3 ==0){
//     console.log(x);
//   }
//   x++;
// }

// let a = 0;
// let sum = 0;
// while(a <=10){
//   if( a%5==0){
//   sum = sum+a;
//   }
//   a++
// }
// console.log(sum);

// let number = 1;
// let sum = 0;
// let count =0;
// while(number <= 100) {
//   sum = sum + number;
//   number++;
//   count++;
// }console.log(sum / count);

// let sum = 0;
// for (let i = 1 ; i <=10; i++){
//    sum = sum + i;
//  }
//  console.log(sum);

// let sum = 0;
// for(let i=1; i<=5; i++){
//    sum = sum + i +" ";
// }
// console.log(sum);

// let sum = 0;
// for(let i = 1; i<=5; i++){
//    sum = sum + i + "*"
// }console.log(sum);

// let sum = 0;
// for (let i = 1;i<20;i++){
//   if ((i % 2==0)&&(i % 5==0)){
//    sum = sum +i
//    }

// }
// console.log(sum);


  

// let array = [1,2,3,4,5,];
// for(let i = 1;i <= array.length;i++){
//    if(i % 2===0){
//       console.log(i)
//    }

//}

// let numbers = [1,2,3,4,5,];
// let evenNumbers = numbers.filter(num => num  % 2 ===0 );
//    console.log(evenNumbers);

//  let i = 1;
// while(i<=5){
//    if(i%2===0){
//       console.log(i);
//    }
//   i++
// }

//    let numbers = [1,2,3,4,5,];
// for(let i = numbers.length-1;i>=0;i--){
//    console.log(numbers[i]);
// }

// let a = "pavan";
// let output = "";
// for(let i=0;i<a.length;i++){
//    if(a[i] ==="p"){
//       output = output +"tond";
//    }else{
//       output = output + a[i]
//     }
//  }console.log(output);

//  toString
// let numbers = ["1","2","3","4","5"];
// let my_list = numbers.toString();
// console.log(my_list);



// const cars = ["Saab", "Volvo", "BMW"];

// // let list = cars[cars.length];
// console.log(cars.sort());




// let a = 10;
// for(let i = 0; i <= 10; i++){
//   console.log(i)};

// let b = 0;
//   while(b<=20){
//     if(b%3==0){
//     console.log(b);
//   }
//   b++
// }






// let age = 15;
//   let text = "you can drive"
// if(age =20){
//   text = "you can`t drive"
// }console.log(text);

    


// for (let day = 1; day<=4; day ++){
//   console.log("day",day);
//     for (let sub = 1;sub <=4;sub++){
//       console.log("sub",sub)
       
//     }; 
//   };


// for (let hour= 1; hour <= 4;hour++){
  
//   for(let secs =1;secs<=6; secs++){
    
//      for(let min=1; min<=6; min++){
       
//        console.log("secs",secs); 
//     };
    
//   console.log( "min completed");
//   };

//   console.log  ( "hour completd");
// };



// for(let farm=1;farm<=5;farm++){
//   console.log("farm",farm);
//   for(let seed =1;seed<=5;seed++){
//     console.log("*");
//   };
// };


// for(let farm = 1;farm <=5;farm++){
//   console.log("farm",farm)
//   let bag = "";
//     for(let seed=1;seed<=5;seed++){
//     bag = bag + "*" +  " "
//     }
// console.log(bag);
// };






// for(let i = 1; i <=5; i++){
//   let bag = "";
//   for(let j=1; j<=i; j++){
//     bag=bag + "*";
    
//   };
//   console.log(bag);
// };


// for(let hor = 1;hor<=10;hor++){ 
//   let bag = "";
//     for(let ver =1;ver<=10;ver++){ 
//        if(hor==1 || hor==10){ 
//           bag = bag + "*";
//        }
//          else if(ver==1 || ver==10){
//            bag = bag + "*";     
//         } else{
//              bag = bag + " ";
//          }     
       
//      }
//           console.log(bag); 
// // };``










// let a = [1,2,3,4,5,6,7,8,9,10];
// for(let i=1;i<=a.length;i++){
//   if(i % 2 ===0){
//     console.log(i);
//   }
  
// };

// let a = "pavan";
// let output = "";
// for(i=0;i<a.length;i++){
//   if(a[i] === "p"){
//   output = output + "tonda"
    
//   }else{
//     output = output  + a[i]
//     }
     
// }
// //  console.log(output);

// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }



//Write a program to check if a number is positive or negative




// let num = -5
// if(num>=0){
//   consple.log("positive no");
// }else{
//   consol.log("negitive no")
// };



//   let num = 123456;
// let count = 0;
// for(;num > 0;num = Math.floor(num/10)){
//   count++;
// }console.log(count);



// let num = 9874575457555454545544545786123;
// let count = 0;
// for(; num>0;num=Math.floor(num/10)){
//   count ++;
// }
// console.log(count);

// let num =5;
// let fact = 1;
// for(let i =1;i<=5;i++){
//   fact*=i
// }console.log(fact);


// let name = "pavan";
// let array ="";
// for(let i = 0;i<name.length;i++){
//   if(name[i]==="p"){
//     array=array+"thonda"
//   }else{
//     array = array+name[i];
//   }
  
// }
// console.log(array);


// let num = 5;
// let fact =1;
// for(let num=1;num<=5;num++){
//   fact *=num
// }
// console.log(fact);
