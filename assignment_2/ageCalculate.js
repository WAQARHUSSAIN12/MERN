function ageCalculate(age){
    let date = new Date();
    let year = date.getFullYear();
    age = year-age;
    return age;  
    }
    console.log(ageCalculate(27))