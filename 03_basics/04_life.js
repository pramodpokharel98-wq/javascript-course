//Immediately Invonked Function Expression(IIFE)

(function chai(){
    //NAMED IIFE
    console.log(`DB-connected`)
}());

((name) => {
    console.log(`DB connected two ${name}`)
})(`pramod`)