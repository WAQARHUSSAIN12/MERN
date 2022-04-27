// Task: Write a Function which accepts “Day” as string and return true if its a weekday and false otherwise. E.g:
// isWeekday(“Thursday”); // Returns true
let day = "Thursday";
function weekDays(day){
    switch(day){
        case "Monday":
            return false;
        break;    
        case "Tuesday":
            return false;
        break;  
        case "wednesday":
            return false;
        break;  
        case "Thursday":
            return true;
        break;  
        case "Friday":
            return false;
        break;  
        case "Saturday":
            return false;
        break;  
        case "sunday":
            return false;
        break;  
    }
}
console.log(weekDays("Thursday"));