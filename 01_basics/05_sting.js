const name="pramod"
const repocount=50
// console.log(name+ repocount+"value");
console.log(`hello my name is ${name} and my repo count is${repocount} `);


const gameName= new String('pramod-hc-com')

console.log(gameName[0]);//access ing the key
console.log(gameName.__proto__);//access protype
console.log(gameName.length);
console.log(gameName.toUpperCase());// to convert to uppercase
console.log(gameName.charAt(3)); // to know which string is at 3rd place
console.log(gameName.indexOf('m'));// to know the place of string 

const newString=gameName.substring(0,4)
console.log(newString); //to know which variables is in those place from left to right


const anotherString=gameName.slice(-8,4)
console.log(anotherString); //to know which variables is in those place from rightto left

const newstringone= "    hitesh   "
console.log(newstringone);  // simply print the value
console.log(newstringone.trim()); // remove the unwanted spaces 
const url="https://pramod.com/pramod%20pokharel"
console.log(url.replace('%20','-')) // replace the string present in url
console.log(url.includes('prakash')); // check wheather the given string is in provided url or not
console.log(gameName.split('-' ));

 