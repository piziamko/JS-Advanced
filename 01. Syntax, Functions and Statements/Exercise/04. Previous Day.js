function solve(year, month, day) {
    let date = new Date(year, month-1, day);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}

// previosDay(2016, 9, 30)
// previosDay(2016, 10, 1)

// Variant 2 

function previosDay(year, month, day){
   let myDate = new Date(year, month-1, day-1);
   // myDate.setDate(myDate.getDate() - 1)
   console.log(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`);
}

// previosDay(2016, 9, 30)
// previosDay(2016, 10, 1)
