//IF 
 
const isuserloggedin = false
const temperature = 27
if(isuserloggedin === true){
    console.log(`you are logged in`)
}
else{
    console.log(`you are not logged in`);
    
}
if(2===`2`){
    console.log(`you are logged in`)
}
else{
    console.log(`you are not logged in`);
    
}
if(2 !== 3){
    console.log(`you are logged in`)
}
else{
    console.log(`you are not logged in`);
    
}
if( temperature<27){
    console.log(`temperature is less than 27`)
}
if( temperature === 27){
    console.log(`temperature = 27`)
}
else{
    console.log(`temperature is greater than 27`);
    
}
 // 1) != => not equalls to 
 // 2) === => data type also compares
 // 3) !== => for checking negative sign


 const score=200
 if (score>100){
   const  power= `fly`
    console.log(`user power:${power}`);
 }
// console.log(`user power:${power}`);
// if var is declared inside the function then it is  accessible outside the block.
const balance=1000
if(balance>500) console.log(`you can buy the product`);// if we have only one statement then we can write in single line without using {}. if coma is used then we can write in multiple lines.

if(balance<500){
    console.log(`less than 500`);
}
else if(balance<750){
    console.log(`less than 750`);
}
else if(balance<900){
    console.log(`less than900`);
}
else{
    console.log(`less than 1200`);}
// if we have multiple conditions then we can use else if. if all the conditions are false then it will go to else block.   


const userloggedin = false
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if (loggedinfromemail||loggedinfromgoogle){
    console.log(`you are logged in`);
}
{
    console.log(`you are not logged in`);
}
if (userloggedin && debitcard){
    console.log(`you can buy the product`);
}
{
    console.log(`you cannot buy the product`);
}
