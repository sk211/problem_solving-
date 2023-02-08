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




