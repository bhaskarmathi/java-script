// let str = "bhaskar";
// let reversed ="";
// for(let i=str.length-1;i>=0;i--){
// 	reversed = reversed+str[i];
	
// }console.log(reversed);

// //



// let array = [1,2,3,4,5,6];
// let sum = 0;
// for(let i=0;i<array.length;i++){
// 	sum=sum+array[i]
// }
// console.log(sum)



// let num = "bhaskar";
// let reverse = "";
// 	for(let i=num.length-1;i>=0;i--){
// 		reverse = reverse+num[i]
// 	} console.log(reverse)


// let array = "bhaskar";
// let sum = "";
// for(let i=array.length-1;i>=0;i--){
// 	sum=sum+array[i];
// }
// console.log(sum);






// 1️ Print numbers from 1 to 10

//  Use for loop and while loop


// for(let i=1;i<=10;i++){
// 	console.log(i);
// }

// let num = 1;
// while(num<=10){
// 	console.log(num);
// 	num++;
// }



// for(let i=1;i<=50;i++){
// 	if(i%2===0){
// 		console.log(i);
// 	}
// }

// let n = 5;
// let sum =0;
// for(let i=1;i<=n;i++){
// 	sum=sum+i
// }
// console.log(sum);


// let num =12345;
// let reverse = 0;
// while(num>0){
// 	let digit = num%10
// 	reverse = reverse*10+digit
// 	num=Math.floor(num/10)
// }
// console.log(reverse);


// let num = 5;
// for(let i=1;i<=10;i++){
// 	console.log(num+"x"+i+"="+(num*i));
// }


// for(let i=10;i>=1;i--){
// 	console.log(i);
// }


// let num=123456;
// let count = 0;
// while(num>0){
// 	let digit =num%10;
// 	count++
// 	num=Math.floor(num/10);
	
// }console.log(count);


// let num =3;
// isPrime=true;

// if(num<=1){
// 	isPrime=false;
// }else{
// 	for(let i=2;i<=Math.sqrt(num);i++){
// 		if(num%1===0){
// 			isPrime=false;
// 		}
// 	}
// }
// if(isPrime){
// 	console.log("prime");
// }else{
// 	console.log("not a prime");
// }



// let num = 123456;
// let count = 0;
// while(num>0){
// 	let digit = num%10;
// 	count=count+digit
// 	num=Math.floor(num/10);
// }
// console.log(count);


// let num = "123456";
// let sum= "";
// let i = 0;
// while(i<num.length){
// 	if(num[i]==="1"){
// 		sum=sum+"101"
// 	}else{
// 		sum=sum+num[i]
// 	}
// 	i++;
// }
// console.log(sum);



// let num = "5891278585757537";
// let largest = 0;
// while(num>0){
// 	let digit=num%10;
// // 	count =count+digit
// // 	num=Math.floor(num/10);
// // 	count++;
	
// // }console.log(count);

// if(digit>largest){
// 	 largest =digit
// 	num=Math.floor(num/10);
// }
// console.log(largest)


// // 


// let name = "bhaskar";
// let char = name.at(4)
// console.log(char);




// let num = 7;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
// 	if (num % i === 0) {
// 	  isPrime = false;
// 	  break;
// 	}
//   }
// }

// if (isPrime) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }




let num = 18;
let i = 2;
isPrime = true;

if(num<=1){
	isPrime=false;
}else{
	while(i<=Math.sqrt(num)){
		if(num%i===0){
			isPrime=false;
		}
		i++;
	}
}
if(isPrime){
	console.log("prime");
}else{
	console.log("not a prime");
};

