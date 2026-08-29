// SINGLETON 
//object.create

// objects literals

const sym=Symbol("key1")
const sym2=Symbol("key2")


const JsUser={
    name:"pramod",
    "full name" :"pramod pokharel",
    age:18,
    [sym]:"key1", // for declaring as symbol
 email:"pramod@google.com",
 isLoggedIN: false,
 lastLoginDays : ["monday","sunday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[sym]); // special case of symbol
console.log(typeof JsUser[sym]);

JsUser.email="hitesh@gmail.com" // for changing value
//Object.freeze(JsUser) // to make object unchangable
JsUser.email="hitesh@chatgpt.com"
console.log(JsUser);
JsUser.greeting=function(){
    console.log("hello JS user");
}
console.log(JsUser.greeting())
JsUser.greeting2=function(){
    console.log(`hello JS user,${ this.name}`);
}
console.log(JsUser.greeting2())
