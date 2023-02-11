// console.log("Hello world");

const result = document.getElementById("result");
const atpabetic = document.getElementById("atpabetic");

//লুড়ু খেলায় আমরা ১-৬ পযন্ত print করবো 

const getRendom =()=>{
    result.innerHTML = Math.ceil (Math.random() *6) ; 
}

// formul 2
const getRendomNumber =(min, max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRendomNumber(1, 6));

// problem 2   
// Array sort with alphabet
const getAlphabet=()=>{
   let students =["sujan" , "akbor", "kamrul", "tanvir", "akbor"]
    let result =students.sort()
    atpabetic.innerHTML =result
}

const roll_number =  [3,5,6,8,9,6,4,3,4,56,33,4,5,6,78]


// problem 3 
// Array.sort  Array  কে ক্রমানয়ে সাজায় 

console.log(roll_number.sort(function(a, b){
    return a-b
}))

// problem 4 

// কোন একটা সাল lifeYear কিনা 
    // ৪০০ দিয়ে ভাগ করলে ভাগশেষ থাকবে না 
    // ৪ এর গুননিয়ক হবে 
    function iseapYear(year){
        if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)))
        {
            console.log(`${year} is a leap year`);
        }else{
            console.log(`${year} is not a leap year`)
        }
    }
    iseapYear(2028)

// problem 5
// print 0-10 even number 
function getEvenNumbers(){
    const evenNums= [];
    for(let i=0; i<=10; i++){
        if(i % 2 === 0){
            evenNums.push(i)
        }
    }
    return evenNums;
}
 console.log(getEvenNumbers())

 function printMultiplicatoinTable(n){
    let result = ''
    for(let i= 1 ; i<=n ; i++){
        for(let j =1; j <=n; j++){
            result += (i*j)+ '\t'
        }
        result += '\n'
    }
    console.log(result)
 }
 printMultiplicatoinTable(10)

//  problem 6 

//  Create a length converter function 
function converterLenth(value, fromUnit, toUnit){
    const conversionFactors ={
        cm: {
            cm: 1,
            m: 0.01,
            in: 0.39,
            ft: 0.0328084
        },
        m: {
            cm: 100,
            m: 1,
            in: 39.3701 ,
            ft: 3.28084
        },
        in :{
            cm: 2.54,
            m:0.0254,
            in:1,
            ft:0.0833333
        },
        ft :{
            cm: 30.48,
            m:0.0254,
            in:12,
            ft:1
        },

    }
    return value * conversionFactors[fromUnit][toUnit]
}
console.log(converterLenth(10, "m", "ft"))
console.log(converterLenth(10, "ft", "m"))

function sumArray(arr){
    return arr.reduce((acc, currentValue)=>acc+currentValue,0)
}

console.log(sumArray([10,10,10]))

// problem 7 

function reverseArray(arr){
    return arr.reverse()
}

console.log(reverseArray([1,3,4,5,7,8]))

function rA(arr){
return arr.reverse();
}
console.log(rA([9,8,7,6,5,4,3,2]))


// formula 2
function reverseArr(){
    let newArr = [];
    for(let i =arr.length -1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(rA([2,4,6,8,10]))

// Problem 8 

// Array sort Acciding and desinding 


function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  

console.log(sortArrayAscending([9,-1,-3,-5,-6,-7,8,9,1,2,3,4]));

function sortArrayDcending(arr) {
    return arr.sort((a, b) => a + b);
  }
  

console.log(sortArrayDcending([9,-1,-3,-5,-6,-7,8,9,1,2,3,4]));


// Remove the spaces found in a string 

function removeSpaces(str){
    return str.replace(/\s/g)
}
console.log(removeSpaces("sujan chandra majumder"))

// problem 9 
function isDivisibleBy10(number){
    return number % 10 ===0;
}
console.log(isDivisibleBy10(10))
console.log(isDivisibleBy10(5));


// problem 10 
function countVowels(str){
    let vowels = "aeiouAUIOU"
    let count =0 ;
    for(let i= 0; i< str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowels("sujan majumder"))
console.log(countVowels("hello"))

// problem 11 
// FizzBuzz: Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

for(let i =1; i<= 100; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if(i % 3 ===0){
        console.log("Fizz")
    }else if(i %5 ===0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
// problem 12 
  // Removing duplicates from an array
//   function removeDuplicates(arr){
//     return [...new Set(arr)]
//   }
//   console.log(removeDuplicates(["sujan", "akbor", "tanvir", "rakib", "Shakib","sujan", "sujan"]))

//   formula 2 

function removeDuplicates(arr){
    return arr.filter((item, index)=>arr.indexOf(item) === index);
}


console.log(removeDuplicates(["sujan", "akbor", "tanvir", "rakib", "Shakib","sujan", "sujan"]))

// problem 12 
    // problem : Reverse a string: Write a function to reverse a string in JavaScript

    function reverseString(str){
        return str.split(' ').reverse().join();
    }

    console.log(reverseString("sujan chandra majumder"))
    
    function reverseString2(str){
        return str.split(' ').reverse().join(' ')
    }

    console.log(reverseString2("amar sonar banlg ami tumai valobasi amar sonar bnalg "))

    let originlSting = "hello";
    let reverseString3 = reverseString(originlSting);
    console.log(reverseString3)


    // problem - 13
    // Flattening an array: Write a function to flatten an array of arrays.

    function flattenArray(arr){
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
    }
    let nestedAttary = [1, [2, [3, [4, 5]]]];
    let falttendArray = flattenArray(nestedAttary);
    console.log(falttendArray)