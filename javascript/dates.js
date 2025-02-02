//Returns thw current date
// console.log(Date());

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// year,month, date, hour, minute, seconds, milisecond format
// const d = new Date(2014, 11, 20, 3, 20, 50, 0);
// console.log(d);

//previde a date
// const d = new Date("2022-03-25");
// console.log(d);

// 1 0r 2 digits in year place are considered as previous century 19xx
// const d = new Date(99, 11,25)
// console.log(d);

//Date stores in miliseconds. 0 time is jan 1 1970 

// const d = new Date(0)
// console.log(d);

//Date dislay is in string format. To be more readable format use toDateString
// const d = new Date(0)
// console.log(d.toDateString());

//Date is UTC format
// const d = new Date(0)
// console.log(d.toUTCString());

//Date in ISO String
// const d = new Date(0)
// console.log(d.toISOString());

//Short Dates: MM/DD/YYYY
// const d = new Date('03/04/2014')


//LongDates: MMM DD yyyy
// const d = new Date('Mar 01 1965')
// console.log(d);

//Date Parsing ->Converts to milisecond
// console.log(Date.parse('01/01/1971'));

//Get Date methids
// const d= new Date()
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getTime());

//Set date methods
const d= new Date()
//sets the year to 2020
// d.setFullYear(2020);

//sets the year to 2020 and month and date
// d.setFullYear(2020,11,24)
// console.log(d);

//setting the month
// d.setMonth(11);
// console.log(d);

//sts the date
// d.setDate(35);
// console.log(d);

//Similary we have setHours,setMinutes, setMiliseconds 



