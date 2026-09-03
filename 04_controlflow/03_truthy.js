const useremail=[]

if (useremail) {
    console.log(" got userEmail ");
}
else{
    console.log(" userEmail not found ");
}
// *****FALSY VALUES*****//
//false, 0, -0, BigInt On,"", null, undefined, NaN,

// ***********truthy values********//
//`0`,`false`,` `,[],{},function(){}, 


if (useremail.length===0) {
    console.log("array is empty");
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

// NULLISH COALESCING OPERATOR (??) => if the value is null or undefined then it will return the right side value.//
// WORK ONLY ON NULL OR UNDEFILED

let val1;
val1=5??10 // output=5
val1=null??10 // output=10
val1=undefined??15 // output=15
val1=null ?? 10??20 // output= 10
console.log(val1); 


// TERNIARY OPERATOR

// condition ? true : false
const iceTeaprice=200
iceTeaprice <200 ? console.log("ice tea is expensive") : console.log("ice tea is cheap");