let age= "13"   // if inside doublequote then its string  
let score = 84 // if simply written its number
  
  // no matter how the output is to be displayed same result is shown
console.log(typeof age);
console.log(typeof (score));
 

// to convert one type of value to another
// MAIN POINT TO REMEMBER : name cannot be converted into number as NAN is shown    

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log( valueInNumber);
let valueInString = String(score)
console.log(typeof valueInString);
console.log( valueInString);
  

 // UNLL LOGIC TEST 

let grade = null
console.log( typeof grade)
console.log( grade)

let section = Number( grade)
console.log( typeof section)
console.log( section)  // value is 0


// let sec = string( grade)
// console.log( typeof sec)
// console.log( sec)
// for 25,26,27 ??
//  null value cannot be converted into string


// undefine logic test //

let house = undefined
console.log( typeof house)
  
let residence = Number( grade)
console.log( typeof residence)  // when undefine is converted into number number is shown//
console.log( residence)  // value is 0

let addres = String(house)  
console.log( typeof addres)// no change when undefine is converted into string
console.log( addres)
     
// BOOLEEN LOGIC TEST//

let district = false
console.log( typeof house)

let zone = Number(district)
console.log( typeof zone )
console.log( zone ) // true=> 1 ; false=> 0

let dist= String(district)
console.log( typeof dist )
console.log( dist) 
// boolen logic is same in string and boolen


 let isLoggedIn = 1

 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(typeof booleanIsLoggedIn ) 
 console.log( booleanIsLoggedIn ) // for 1=> true;0=>false

   // for empty place the value of bbolen algebra is always false
 let LoggedIn = ""

 let booleanLoggedIn = Boolean(LoggedIn)
 console.log(typeof booleanLoggedIn ) 
 console.log( booleanLoggedIn )
 
 
 // for string the value of bollen is always true
 let inLoggedIn = " pramod"

 let booleanInLoggedIn = Boolean(inLoggedIn)
 console.log(typeof booleanInLoggedIn ) 
 console.log( booleanInLoggedIn ) 
 
 let someNumber = 33
 let stringNumber = String(someNumber)
  console.log(stringNumber)
  console.log(typeof stringNumber)
  
  // ***************************OPERATIONS**************//

let value=3 
let negvalue = -value
console.log( negvalue);

console.log(2+2); // adition
console.log(2-2); //subt
console.log(2*2);//multiply
console.log(2*2);// power
console.log(2**3); //power
console.log(2/3); // quotient
console.log(2%3); // remimder

let str1="hello"
let str2=" hitesh"
let str3= str1 + str2 
console.log(str3);

console.log("1"+ 2);
console.log(1+ "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log( ((3 + 4) * 5) % 3);

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
