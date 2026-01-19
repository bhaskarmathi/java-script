// for(let i=1;i<=3;i++){
// 	console.log(i);
// 	for(let sub=1;sub<=3;sub++){
// 		console.log(sub);
// 	}
// }





// for(let i=1;i<=3;i++){
    
// 	console.log(i);
// 	let bag=""
// 	for(let seed=1;seed<=3;seed++){
// 		bag=bag+"*"
// 		console.log(bag);
// 	}
// };





// for(let hor=1;hor<=10;hor++){
// 	let bag="";
// 	for(let ver=1;ver<=10;ver++){
// 		if(hor===1||hor===10){
// 			 bag=bag+"*";
// 		}else if(ver===1||ver===10){
// 		        bag=bag+"*";
// 		}else{
// 			bag=bag+" ";
// 		}
		
// 	}
// 	console.log(bag);
// };





// for(let num=2;num<=50;num++){
// 	let isPrime=true;
// 	for(let i=2;i<=Math.sqrt(num);i++){
// 		if(num%i===0){
// 			isPrime=false;
// 		}
// 	}
// 	if(isPrime){
// 		console.log("prime"+num);
// 	}else{
// 		console.log("not prime"+num);
// 	};
// };




// for(let i=1;i<=5;i++){
// 	   let bag="";
// 	for(let farm=1;farm<=i;farm++){
// 		bag=bag+"*";
// 		// console.log(farm);
// 	};
// 	console.log(bag);
// };




// for(let i=1;i<=3;i++){
// 	for(let j=1;j<=10;j++){
// 		console.log(i+"x"+j+"="+(i*j))
// 	};
// 	console.log("---------------")
// }




// let num =1;
// while(num<=3){
    
// 	let sum =1;
// 	let bag="";
// 	while(sum<=num){
// 		bag=bag+"*";
// 		sum++;
// 	}
// 	console.log(bag);
// 	num++;
// };



// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
// 	console.log(arr[i][j]);
//   };
// };



// let playerRow=1;
// let playerCol=1;
// for(let i=0;i<=3;i++){
//     let row="";
//   for(let j=0;j<=3;j++){
//     if(i===playerRow&&j===playerCol){
//         row=row+".";
//     }else{
//         row=row+  ".";
       
//     };
       
//   };
    
//   console.log(row);
// };





// let map = [
//   ["E", "P", "E"],
//   ["P", "E", "P"],
//   ["E", "E", "P"]
// ];

// let enemy = 0;
// for(let i=0;i <map.length;i++){
//     for(let j=0;j <map[i].length;j++){
//         if(map[i][j]==="E"){
//             enemy++;
//         };
//     };
   
// };
//  console.log(enemy);




// let A = [
//   [1, 2],
//   [3, 4]
// ];

// let B = [
//   [5, 6],
//   [7, 8]
// ];

// let c=[];

// for(let i=0;i<2;i++){
//     c[i]=[];
//     for(let j=0;j<2;j++){
//         c[i][j] = A[i][j]+B[i][j];
//     };
    
// };
// console.log(c);



// let A = [
//   [1, 2],
//   [3, 4]
// ];

// let B = [
//   [5, 6],
//   [7, 8]
// ];

// let result = [];

// for (let i = 0; i < 2; i++) {
//   result[i] = [];
//   for (let j = 0; j < 2; j++) {
//     result[i][j] = A[i][j] + B[i][j];
//   }
// }

// console.log(result);



// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
    
// }



// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     console.log(arr[i][j]);
//   };
// };



// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];


// let largest = 0;
// for(let i=0;i<arr.length;i++){
//   largest="";
//   for(j=0;j<arr[i].length;j++){
//     if(arr[i][j]>largest){
//     largest=arr[i][j];
//     }
//   }
 
// }
//   console.log(largest);





// let arr = [2, 4, 6, 8, 5, 5, 1, 9];
// let target = 10;
// let count = 0;

// // for(let i=0;i<arr.length;i++){
// //   for(let j=i+1;j<arr.length;j++){
// //     if(arr[i]+arr[j]===target){
// //       count++;
// //       console.log("pair"+arr[i],arr[j]);
      
// //     };
    
// //   }
// // }
// // console.log("pairs"+count)\

// let i = 0;
// while(i<arr.length){
//   let j = i+1;
//   while(j<arr.length){
//     if(arr[i]+arr[j]===target){
//       count++;
//       console.log("pair"+" "+arr[i],arr[j]);
//     };
//     j++;
//   };
//   i++;
// };
// console.log("pairs"+" "+count);



// for(let i=4;i>=1;i--){
//     let stars=""
//     for(let j=1;j<=i;j++){
//         stars=stars+"*";
//         //console.log(j);
//     };
//     console.log(stars);
// 



// let rows =4
// let i = rows;
// while(i>0){
//     let j = 0
//     let stars="";
//     while(j<i){
//         stars=stars+"*";
//     //console.log(stars);
//         j++
//     }
//     console.log(stars);
//     i--;
// };






// for(let i=4;i>=0;i--){
// 	let star ="";
// 	for(let j=1;j<=i;j++){
// 		 star=star+"*"
// 	}
// 	console.log(star);
// };



// function greet() {
// 	console.log("Hello World");
// }

// greet();




// setTimeout(function () {
// 	console.log("Hello after 2 seconds");
// }, 2000);




// (function () {
// 	console.log("I run immediately");
// })();






