// const user={
//     username:`pramod`,
//      price:999,
//     welcomemeassge: function(welc){
//        console.log(`${this.username},welcome to the website`);
//        console.log(this);
       
//     }
     
//    }
// //this.=> holds the current vlue

// // user.welcomemeassge()
// // user.username=`shyam`
// // user.welcomemeassge()
// console.log(this);


// function chai(){
//     let username="pramod"
//     console.log(this.username);
    
// }
const chai =() =>{
    let username="pramod"
    console.log(this.username);
    
}


// chai()

// const addtwo = (num1,num2) => {
//   return num1+num2
// }
// const addtwo = (num1,num2) => 
//    (num1+num2)
const addtwo = (num1,num2) => 
   ({username:`hitesh`})
// const addtwo = (num1,num2) => 
//    num1+num2
 console.log(addtwo(3,4))

const myarray =[1,2,3]

// myarray.foreach(()=>)