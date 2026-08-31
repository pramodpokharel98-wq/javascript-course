//if,else+{}=>scope
let a=300
if(true){
let a = 10
const b  = 20 
console.log(`inner:`,a);
}
console.log(a);
 

function one(){
    const username = "pramod"
    function two(){
        const website= "youtube"
        console.log(username)
    }
    // console.log(website);
    two()

}
one() // in nestedfunction inner function can access to outer function


if(true){
    const username="pramod"
   if (`pramod`){
    const website =  "youtube"
    console.log(username+website );
    
   }
//    console.log(website);
   
}
console.log(username);


// ++++++++++++++INTRRESTING++++++++++++//

 console.log(addone(5));
 function addone(num){
      return num + 1
 }

 
  console.log(addtwo(5))

 const addtwo = function(num){
    return num+2
 }