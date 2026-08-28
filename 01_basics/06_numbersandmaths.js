const score=400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber=123.6944

console.log(othernumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

//**********************MATHS***********/
console.log(Math);
console.log(Math .abs(-4)); // change negative to postive
console.log(Math .round(4.63));// roundoff the given decimal value
console.log(Math .ceil(4.23));// give the higher round off
console.log(Math .floor(4.93));// give the lower round off
console.log(Math .min(4,6,7,3,2)); // determine the min value from array
console.log(Math .max(4,5,8,98,34));// determine the maxiun value from array

console.log(Math.random()); // value between zero and one
console.log(Math.random()*10+1); // value for more than one
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1))+ min); // to give the value more than min
