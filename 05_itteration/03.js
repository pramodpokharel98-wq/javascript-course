//  FOR OF

// [``,``] string
// [{},{}] object 

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//  console.log(num);
//  }
// const greetings=`hello world`
// for (const greet of greetings) {
//     console.log(`each variable is ${greet}`);   
// }


// MAPS
const map= new Map();
map.set('IN' , 'India');
map.set('US' , 'United States');
map.set('UK' , 'United Kingdom');
console.log(map);
for(const [key , value] of map ){
    console.log(key,":-", value)
 } 
const myObject = {
 game1: 'NFS',
 game2: 'spiderman'
 }  
 for (const [key, value] of Object.entries(myObject)) /* objects is in irretable untill entries are available*/{
    console.log(key, ":-", value);
 } 
 