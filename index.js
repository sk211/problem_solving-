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

// Array.sort  srtink কে ক্রমানয়ে সাজায় 

console.log(roll_number.sort(function(a, b){
    return a-b
}))


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

// problem 3 
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

console.log(sumArray([4,5,4]))





