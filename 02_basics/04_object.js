// const tinderuser= new Object()
//  tinderuser.id="123abc"
//  tinderuser.name="prisma"
//  tinderuser.isLoggedIn=false
// console.log(tinderuser)

// const reguser={
//     email:"pramod@google.com",
//    fullname:{
//         userfullname:{
//             firstname:"pramod",
//             lastname:"Pokharel"
//         }
//    }
// }
// console.log(reguser.fullname?.userfullname);

// const obj1={
//     1:"a",
//     2:"b",
// }
// const obj2={
//     3:"c",
//     4:"d",
// }
// const obj3={obj1 , obj2}
// console.log(obj3);
// const obj4=Object.assign({},obj1,obj2)
// console.log(obj4);

// const obj5={...obj1,...obj2}
// console.log(obj5);


//  const users=[
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     {
//         id:2,
//         email:"b@gmail.com"
//     },
//     {
//         id:3,
//         email:"c@gmail.com"
//     },
//     {
//         id:4,
//         email:"d@gmail.com"
//     },
//     {
//         id:5,
//         email:"e@gmail.com"
//     },
//     {
//         id:6,
//         email:"f@gmail.com"
//     },
//     {
//         id:7,
//         email:"g@gmail.com"
//     },
//     {
//         id:8,
//         email:"a@gmail.com"
//     },
//     {
//         id:9,
//         email:"i@gmail.com"
//     },
//  ]
//  console.log(users[1].email);
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


//**************** */ object destructurting */**********************// */
const course={
     coursename:"js in hindi",
     price:999,
     teacher:"hitesh choudary"
  }
const {teacher:ins}=course
console.log(ins);
  
// const navbar=({company})=>{

// }    /// destrucuturing
// navbar(company="pramod")


/// **************API*******************
{
    "name"="pramod",
    "course"="javascript",
    "fee"="free"
}
// https://api.github.com/users/hiteshchoudhary

[
    {},
    {},
    {},
]