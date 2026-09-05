const mynums=[1,2,3,]
const total=mynums.reduce(function(acc,curvral){
    console.log(`acc:${acc} and curvral:${curvral}`);
    
    return acc+curvral
}, 4)
console.log(total);

const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal);
  

const shopingcart=[
    {
        itemsname:`js course`,
        prize:2999
    },
    {
        itemsname:`python`,
        prize:999
    },
    {
        itemsname:`data science`,
        prize:1999
    },
    {
        itemsname:`mobile dev course`,
        prize:12999
    },
]
const prizetopay=shopingcart.reduce((acc,items)=>acc+items.prize,0)
console.log(prizetopay);
