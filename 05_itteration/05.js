const coding=['javascript','python','ruby','c++']

// coding.forEach( function (item){
//     console.log(item)
// } )

// const heros=[`batman`,`ironman`,`spiderman`, `flash`,`thor`]
// heros.forEach( function( val){
//     console.log(val)
// })
// const subject=[`maths`,`science`,`english`,`c`]
// subject.forEach( (itm)=>{
//     console.log(itm)
// })
//  function printMe(items){
//    console.log(items);
   
//  }
//  coding.forEach(printMe)

//  coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
//  })

const mycode=[
    {
        languagename:`javascript`,
        filename:`js`
    },
    {
        languagename:`c++`,
        filename:`cpp`
    },
    {
        languagename:`python`,
        filename:`py`
    }
]
mycode.forEach((items)=>{
    console.log(items.languagename)
})