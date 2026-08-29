// ARRAYS

const myarr=[1,2,3,4,5]
const myheros=["shaktiman","nagraj"]

const myarr2= new Array(2,4,6,8)
console.log(myarr[0]);
console.log(myheros[0]);
console.log(myarr2[0]);


// ARRAY METHODS

myarr.push(6) //add values at backhandside
myarr.push(7) 
myarr.pop() // remove last value
myarr.unshift(9) //add values at fronthandside
myarr.shift() //remove values at fronthandside

console.log(myarr.includes(9)) // give true or false result on the basis of present or not
console.log(myarr.indexOf(9)) // if includes give the position of presnt if not then gives -1
  
const newarr=myarr.join()// converts array to string

console.log(myarr);
console.log(newarr);
console.log(typeof myarr);
console.log(typeof newarr);


// SLICE,SPLICE

console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1); // neither include last range nor manapulate the orginal array
console.log("B",myarr);

const myn2=myarr.splice(1,3) // includes last range and manapulate the orginal array
console.log(myn2);
console.log("C",myarr);

