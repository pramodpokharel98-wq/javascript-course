// # primitive data type
// 7 types : string(call by value) : ,number:,boolean : ,null ,:undefined: , symbol:, bigint :, 

const score = 100
const scorevalue = 100.3

const isLoggenIn= false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

// const bigNumber = 485588583656548n


// # refernce type  or non primitive
// arrays:, objects:, functions:,

const heros=   ["shaktiman","naagraj","doga"]
let myobj={
    name:"pramod",
    age:22,
}
const myfunction= function(){ 
    console.log("hello world")
    
}
console.log(typeof outsideTemp ); //null=>object
console.log(typeof myfunction);//function=>function
console.log(typeof heros);//object=>object
console.log(typeof id);//symbol=>symbol
console.log(typeof anotherid);//symmbol=>symbol
console.log(typeof score);  // number=>number
console.log(typeof scorevalue);//number=>number
console.log(typeof isLoggenIn); //boolean=>boolean



//+++++++++++++++++++++++++++++++++++++++++
// MEMORY RELSTED
// STACK(for primtive type) ,HEAP(for non primitive type)

 let mySisterName="prisma pokharel"
 let anothername= mySisterName
 anothername = "mussa"
 console.log(anothername);
 console.log(mySisterName);

 let userone={
    email:"usergoogle.com",
    password :" user243"
 }
 let usertwo=userone
 usertwo.email ="pramod@google.com"
 console.log(userone.email);
 console.log(usertwo.email);
 