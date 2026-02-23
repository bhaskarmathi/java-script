// ""let list = "bhaskr"
// let result = ""
// for(let i=0;i<=list.length;i++){
// 	if(list[i]==="a"||list[i]=== "s"||list[i]==="k"){
// 		result=result+list[i];
		
// 	}
	
// }
// 	console.log(result);



// let name = "javascript";
// let count = 0;
// for(let i=0;i<=name.length;i++){
// 	if(name[i]==="a"){
// 		count++
// 	}
// }
// console.log(count);




// function name(str){
// 	let reverse = "";
// 	for(let i=str.length-1;i>=0;i--){
// 		reverse=reverse+str[i]
		
// 	}
// 	return reverse;
// }
// console.log(name("pavan"));


// function addOddOrEven(str){
// 	count = 0;
// 	for(let i=0;i<str.length;i++){
// 		if(str[i]%2!==0){
// 			count++
// 		}
		
// 	}
// 	return count;
// }
// console.log(addOddOrEven([1,2,3,4,5,6,7,8,9]));




// function strVowels(name){
// 	let vowels = "aeiou";
// 	let count = 0;
// 	for(let i=0;i<name.length;i++){
// 		if(vowels.includes(name[i])){
// 			count++
// 		}
		
// 	}
// 	return count;
// }
// console.log(strVowels("bhaskar"))




//  function isPalindrome(name){
//  	let reverse ="";
//  	for(i=name.length;i>=0;i--){
// 	    
// 	}if(name[i]>reverse){
// 		reverse = name[i]
// }
// 	return reverse;
// };
//  console.log(isPalindrome("121"))



// let name = madam;
// let reverse = "";
// for(let i=name.length;i>=0;i--){
	
// }


// function countNum(arr){
// 	count = 0;
// 	for(let i=0;i<arr.length;i++){
// 		count=count+arr[i];
		
// 	}
// 	return count
// }
// console.log (countNum([10,20,30,40,50]));


// let name = "bhaskar"
//  let y = name.slice(2,5);
// console.log(y);

// let name = "bhaskar"
// let arr = name.split("").reverse().join("");
// console.log(arr);




// let arr ="pavanthonda";
// // //let name =arr.includes("nt")
// // //console.log(arr.includes(nt));
// // for (let i=0;i<=arr.length;i++){
// // 	if(arr[i].includes("nt")){
		
// // 	}
// // 	console.log(arr[i])
// // }

// // let name =arr.includes("nt");
// // console.log(name);


// let result = "";
// for(let i=0;i<arr.length;i++){
// 	if(arr[i]==="nt"){
// 		result=result+arr[i];
// 	}
// 	console.log(result);
// }




// let num = 9;
// isPrime=true;
// if(num<1){
// 	isPrime=false;
// }else{
// 	for(let i=2;i<=Math.sqrt(num);i++){
// 		if(num%i===0){
// 			isPrime=false;
// 			break;
// 		}
// 	  };
	
// }if(isPrime){
// 		console.log("prime");
// 	}else{
// 		console.log("not prime");
// };



// function isPrime(num){
// 	if(num<=1) return false;
// 	for(let i=2;i<=Math.sqrt(num);i++){
// 		if(num%i===0){
// 			return false;
// 		}
// 		i++;
// 	}
// 	return true;
// };
// console.log(isPrime("7"));



// function isPrime(num){
// 	if(num<=1) return false;
// 	let i = 2
// 	while(i<=Math.sqrt(num)){
// 		if(num%i===0){
// 			return false;
// 		}
// 		i++;
// 	}
// 	return true;
// };
// console.log(isPrime("8"));




// let num = "121";
// let reverse = "";
// for(let i=num.length-1;i<0;i--){
// 	reverse = reverse+num[i];
// }if(num===reverse){
// 	console.log("palindrome");
// }else{
// 	console.log("not palindrome");
// }


// function isPalindrome(str){
// 	let rev ="" 
// 	for(let i=str.length-1;i>=0;i--){
// 		rev=rev+str[i]
// 	}
// 	return (str === rev);
// };
// console.log(isPalindrome("121"));




// for (let i=2;i<=50;i++){
// 	let isPrime = true;

// 	for(let j=2;j<=Math.sqrt(i);j++){
// 		if(i%j===0){
// 			isPrime=false;
// 		}
// 	}

// if(isPrime){
// 	console.log("prime")
// }else{
// 	console.log("no prime")
// }
// };	



// let arr = [1,2,3];
// let max = arr[0];

// for(let i=0;i<arr.length;i++){
// 	if(arr[i]>max){
// 		max=arr[i]
// 	}
	
// }console.log(max)



// let arr = [1,2,3];

// let max = Math.max(...arr);
// console.log(max)


// let arr = [4,5,6];
// let min = arr[0];
// for(let i=0;i<arr.length;i++){
// 	if(arr[i]<min){
// 		min =arr[i]
// 	}
// }
// console.log(min)




// function findMax(num){
// 	let max = num [0];
// 	//return max
// 	for(let i=0;i<num.length;i++){
// 		if(num[i]<max){
// 			max=num[i]
// 		}
		
// 	}
// 	return max;
// };
//  console.log(findMax([2,4,5]));




// let num = 1238654;
// let highest = 0;
// while(num>0){
// 	let digit = num%10;
// 
// 	if(digit>highest){
// 		highest = digit
// 	}
// 			num=Math.floor(num/10)

// }
// console.log(highest);


// let num = 123654;
// let smallest  = 9;
// while(num>0){
// 	let digit=num%10;
// 	if(digit<smallest){
// 		smallest=digit
// 	}
// 	num=Math.floor(num/10)
// }
// console.log(smallest)



//let x = "volvo";
// function myFunction(name){
// 	return name
// }
// console.log(myFunction("audi"))


// let arr = [1, 2, 3, 2, 4, 1];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
// 	if (arr[i] === arr[j]) {
// 	  console.log("Duplicate:", arr[i]);
// 	}
//   }
// }


// // function call
// const p1 ={
// 	name:"bhaskar",
// 	city:"hybd",
//     country:"india",
// };

// const p2 ={
// 	name:"employlee"
// };

// function greet(){
// 	console.log("hello "+this.name,this.city,this.country)
// }
// function erson
// const newGreet = greet.bind(p1)
// // greet.call(p1)
// // greet.apply(p1)

// newGreet();
// // 

function greet(country,city){
	console.log("hello "+this.name,this.country,this.city)
};
const person={
	name:"binladen",
	 country:"india",
	city:"hybd"
};

greet.call(person)
