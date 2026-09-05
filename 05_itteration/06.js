//  const coding=[`java`,`python`,`danjo`,`c++`,]
//  coding.forEach((item)=>{
//   console.log(item)

// })


const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((num)=> num>5)
// console.log(newnums)
 const newnum=[]
 mynums.forEach((num)=>{
    if (num>4) {
          newnum.push(num)        
    }
 })
 console.log(newnum)

 // exercise

 const library=[
    { title:`book1` , genre:`friction` ,publish:1897, edition:2004},
    { title:`book2` , genre:`non-friction` ,publish:1990, edition:2012},
    { title:`book3` , genre:`history` ,publish:1909, edition:1997},
    { title:`book4` , genre:`astology` ,publish:1998, edition:2009},
    { title:`book5` , genre:`sci-friction` ,publish:1993, edition:2005},
    { title:`book6` , genre:`non-friction` ,publish:1998, edition:2009},
    { title:`book7` , genre:`friction` ,publish:1887, edition:1994},
    { title:`book8` , genre:`drama` ,publish:1895, edition:1998},
    { title:`book8` , genre:`essay` ,publish:1997, edition:2008},
    { title:`book9` , genre:`history` ,publish:2007, edition:2024},
    { title:`book10` , genre:`drama` ,publish:1997, edition:2016},
 ]
 let userbooks=library.filter((bk)=> bk.genre === `history` && bk.publish>=1994 )
 console.log(userbooks)