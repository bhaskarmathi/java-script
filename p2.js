// function greet(name){
// 	console.log("hai ",name);
// };
// greet("hello")


//call back

// function calculate(a,b,operation){
// 	return operation(a,b);
// };
// function mul(x,y){
// 	return(x*y);
// };
// console.log(calculate(5,6,mul))


// function oddNum(num){
// 	if(num%2===0){
// 		return 'even'
// 	}else{
// 		return 'odd'
// 	}
// }
// console.log(oddNum(5));
// console.log(oddNum(6))




// function filterEven(arr){
// 	let even =[]
// 	for(let x of arr)
// 		if(x%2===0){
// 			even.push(x);
// 		}else{
// 		even.push("odd"+x);
// 		}return even
// };
// console.log(filterEven([1,2,3,4,5,6,7,8]))


// function even(arr){
// 	let num= [];
// 	for(let i=0;i<=arr.length;i++){
// 		if(i%2===0){
// 			num.push("even"+i);
// 		}else{
// 			num.push("odd"+i);
// 		}
// 	};
// return num;
// };
// console.log(even([1,2,3,4,5,6]));



// function odd(arr){
// 	let result = [];
// 	for(let x of arr){
// 		result.push(x%2!==0 ?"odd "+x:"even "+x)
// 		};
// 		return result;
// };
// 	console.log(odd([9,8,7,4,5,6]));


// function findVowels(str){
// 	let vowels = "aeiou";
// 	let count = 0;
// 	str=str.toLowerCase();
// 	for(let x of str){
// 		if(vowels.includes(x)){
// 			count++
// 		};
// 	}
// 	console.log("no of vowels "+count)
// }
// findVowels("a.e,i,s,e,w,t,y,f,u,o,u,c,g,f")




// function findVowels(str){
// 	let vowels = "aeiouAEIOU";
// 	let count =0
// 	for(let x of str){
// 		if(vowels.includes(x)){
// 			count++
// 		};
// 	}
// console.log("no of vowels "+count)
// }
// findVowels("A,s,f,g,t,u,o,p,A,D,S,W,S,F,G,J,K,I,U,H,F");




// function fizzBuzz(range = 100){
// 	for(i=0;i<=range;i++){
// 		if(i%3===0&&i%5===0&&i%4===0){
// 			console.log(i,"3/5/4");
// 		}else if(i%3===0&&i%5===0){
// 			console.log(i,"3/4d");
// 		}else if(i%3===0&&i%4===0){
// 			console.log(i,"3/4");
// 		}else if(i%3===0){
// 			console.log(i,"3d");
// 		}else if(i%5===0){
// 			console.log(i,"4d");
// 		}else if(i%4===0){
// 			console.log(i,"4d");
// 		}else{
// 			console.log(i)
// 		}
// 	}
// }
// fizzBuzz();




// function flattenArray(arr){
// 	let uArray = arr;
// 	let result = uArray.flat();
// 	return result
// 	return arr.flatt()
// }
// console.log(flattenArray(]));



// function array(arr){
// 	let flatten = arr;
// 	let result = flatten.flat();
// 	return result;
// 	return  arr.flat()
// }
// console.log(array([[1,2],[3,4],[5,6],[7,8],[9,0]]));



// const sum = (x,y,z)=>console.log(x+y+z);
// sum(3,3,3)



// const sum = (x,y,z)=>{
// 	let result =(x+y+z)
// 	console.log(result)
// };
// sum(2,3,4);



// const sum =(w,e,r)=>(w+e+r)
// console.log(sum(8,5,2));



// function square(arr){
// 	arr.forEach(function square(val){
// 		console.log(val*val)
// 	})
	
// }
// square([1,2,3,4,5,6])


let num = 10;

do{
	console.log(num)
	num--
}while(num>=0)