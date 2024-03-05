

let startDate = new Date("2023-07-16");
let today = new Date();

let differenceInTime = today.getTime() - startDate.getTime();

 

let differenceInDays=

    Math.round

        (differenceInTime/ (1000 * 3600 * 24));



document.getElementById("days").textContent = differenceInDays.toString();
