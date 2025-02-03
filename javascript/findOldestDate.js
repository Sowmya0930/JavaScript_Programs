//22/04/1990,22/04/1992,22/04/1995,22/04/1999

function findOldestDate(datesArray){
    
    let oldestDate="";
    let oldestYear=Infinity;
    let oldestMonth=Infinity;
    let oldestDay=Infinity;

    for(let dateString of datesArray ){
        let delimiter= dateString.includes('/') ? '/' : '-';
        let parts=dateString.split(delimiter)
        let day=parseInt(parts[0]);
        let month=parseInt(parts[1]);
        let year=parseInt(parts[2]);
        if(year<oldestYear || (year===oldestYear && month<oldestMonth) || (year===oldestYear && month===oldestMonth && day<oldestDay)){
            oldestYear=year;
            oldestMonth=month;
            oldestDay=day;
            oldestDate=dateString;
            }

    }
   
    return oldestDate;

}

let dates=["22/03/1992","23/04/1992","22/04/1995","22/04/1999"]
console.log(findOldestDate(dates));