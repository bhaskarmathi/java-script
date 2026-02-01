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
// 	    let digit = name%10
// 		reverse=reverse*10+digit;
// 		name=Math.floor(name/10)
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




let num = 7;
isPrime=true;
if(num<=1){
	isPrime=false;
}else{
	for(let i=1;i<=Math.sqrt(num);i++){
		if(num%i===0){
			isPrime=false;
			break;
		}
	}if(isPrime){
		console.log("prime");
	}else{
		console.log("not prime");
	};
};
	