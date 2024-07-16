//If-Else Statements

function check(a){
    if( a > 0) return "Positive";
    else if( a < 0) return "Negative";
    else return "Zero";
}
console.log(check(-5));

function Eligibility(a){
    // (a >= 18) ? return "Yes" : return "NO"; -- wrong syntax
    return (a >= 18) ? "eligible" : "not eligible";
}
console.log(`Person is ${Eligibility(21)} to vote.`);


//Nested If-Else Statements
function Largest(a, b, c){
    if( a > b){
        if( a > c) return a;
        else return c;
    }else{
        if( b > c ) return b;
        else return c;
    }
}
console.log(`Largest Number is : ${Largest(65, 43, 21) }`);


//Switch Case
function Day(x) {
    switch (x) {
        case 1: 
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";     
        default:
            return "Invalid day"; 
    }
}
console.log(`Day is ${Day(2)}`); 


function Grade(x) {
    switch (true) {
        case (x >= 90):
            return "A";
        case (x >= 80):
            return "B";
        case (x >= 70):
            return "C";
        case (x >= 60):
            return "D";
        case (x >= 50):
            return "E";
        case (x >= 40):
            return "F";
    }
}
console.log(`Grade : ${Grade(89)}`);

//Conditional (Ternary Operator)
const num = 87;
console.log(num % 2 === 0 ? "Even" : "Odd");

//Combining Request
function leapYear(x){
    if( x%4 == 0 && x%100 != 0){
        return "Leap Year";
    }
    else if( x%400 == 0) return "Leap Year";
    else return "Not a leap year";
}
console.log(leapYear(2024));

