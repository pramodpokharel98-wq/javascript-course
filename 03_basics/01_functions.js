

function saymyname(){
    console.log("p");
 console.log("a");
 console.log("r");
 console.log("a");
 console.log("o");
 console.log("d");

}
saymyname()

function addtwonumbers(num1,num2){
   console.log( num1+num2);
   
}
function addtwonumbers(num1,num2){
 num1+num2
       let result=num1+num2
    return result
  return num1+num2
}
const result=addtwonumbers(3,4)
addtwonumbers(3,"4")
addtwonumbers(3,"a")
addtwonumbers(3,null)
console.log("result:",result);

function loginusermessage(username){
    if(!username){ // !username===undefine
       console.log(`please enter the user name`);
       return
    }
    return `${username}just logged inn`
}
console.log(loginusermessage("pramod"))
console.log(loginusermessage(""));
console.log(loginusermessage());

// ********FOR MAKING SAME AS ADD TO CHART IN E-COMMERCE SITE***********//

function calculatecartprice(val1,val2,...num1 /* rest operator in function to convert to array */){
     return num1
    }
    console.log(calculatecartprice(200,300,500,600,400));
    

    const user={
        username:`hitesh`,
        prices:199
    }

    function handleobject(anyobject){
        console.log(`username is ${anyobject.username}and price is ${anyobject.prices}`);
    }

    handleobject(user)
    handleobject({
        username:`sam`,
        prices:399
    })

const mynewarray = [200,400,100,600]

 function returnsecondvalue(array){
   return array[3]
 }
 console.log(returnsecondvalue(mynewarray));
 console.log(returnsecondvalue([200,400,100,600]));