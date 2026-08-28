// DATES

let myDate = new Date()
console.log(myDate);//gives date
console.log(myDate.toString());//ddate in readble format with timezone
console.log(myDate.toDateString());//date and day only
console.log(myDate.toISOString());//date and sth unreadable
console.log(myDate.toJSON());//date and sth unreadable
console.log(myDate.toLocaleDateString());// date only but redable
console.log(myDate.toLocaleString()); // date and time but not day

console.log(typeof myDate); // object

let mybddate=new Date(2023,0,23) // in year,month,day format
console.log(mybddate.toDateString());
let myddate=new Date(2023,0,23 ,5,6,54) // in year,month,day,hrs,min,sec format
console.log(myddate.toLocaleString());
let mydate=new Date("2023- 01-14" ) // in year,month,day,hrs,min,sec format
console.log(mydate.toLocaleString());
let myydate=new Date("01-13-2026")// in year,month,day,hrs,min,sec format
console.log(myydate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myydate.getTime());
console.log(Date.now()/100);
console.log(Math.floor(Date.now()/100));

let newdate=new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getMonth()+1);
console.log(newdate.getFullYear());
//  `${newdate.getFullYear()}-${newdate.getMonth()}-${newdate.getDate()}`
 newdate.toLocaleString('default')
 {
    weekday:"long"
 }