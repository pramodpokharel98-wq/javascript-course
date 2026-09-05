// FOR

for (let i = 0; i <= 10; i++) {
    const element = i ;
    if (element==5){
        console.log("5 is found");
    }
    console.log(element);
}
// console.log(element);


for (let i = 1; i <=11; i++) {
    console.log(`multiplication table of :${i} is `);
    // outer loop runs once and inner loop runs 10 times for each outer loop iteration
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value:${j} and outer loop value:${i}`);
        console.log(i+`*`+j+ `=`+i*+j);
    }
}

let myarray=[`flash`,`batman`,`superman`,`spiderman`];
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
 console.log(element);
    
}

// BREAK ABD CONTINUE
for (let index = 1; index < 20; index++) {
    if (index==16){
        console.log("5 is detected");
        break;
    }
   console.log(`value of is ${index}`);
}
for (let index = 1; index < 20; index++) {
    if (index==16){
        console.log(`${index} is detected`);
        continue; // continue will skip the current iteration and move to the next iteration
        break; // break will exit the loop completely
    }
   console.log(`value of is ${index}`);
}