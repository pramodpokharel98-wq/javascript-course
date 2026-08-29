const marbelheros=["thor","ironman","spiderman"]
const dcheros=["supperman","batman","flash"]

marbelheros.push(dcheros) // add 2nd array inside first array
console.log(marbelheros);
console.log(marbelheros[3][1]);

const allheros=marbelheros.concat(dcheros) // merge two arrays
console.log(allheros);

const alheros=[...marbelheros,...dcheros] // same has concact but can merge various arrays together
console.log(alheros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[9,0,5,4,[2,3,5]]]]

const realnextarry = anotherarray.flat(Infinity)
console.log(realnextarry);



console.log(Array.isArray("pramod"));
console.log(Array.from("pramod"));
console.log(Array.from({name: "hitesh"})); // intresting 

let score1=100
let score2=200
let score3=300
  console.log(Array.of(score1,score2,score3));
  
let fruits=[]
fruits.push("apple","pineapple","orange","banana")
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(fruits[4]); // 'no value so undefine
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length=10//determining the LENGTHS OF ARRAY
console.log(fruits); // to see value inside array 
console.log(typeof fruits);// to see the type 
console.log(fruits.length);// to view the length
console.log(Object.keys(fruits)); // to see which which place is occcupied 
fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`);});  // to determie the place of arrays with its value 
    
