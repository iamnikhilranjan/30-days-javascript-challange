//1.Basic regular expression to match a simple pattern( eg. match all occurences of the word "Javascript" in a string). Log the matches

const str = "I am learninf Javascript, Javascript is a powerful language. Javascript is used in web development";

let pattern = /Javascript/g;

let matches = str.match(pattern);

console.log(matches);

//Write a regular expression to match all digits in a string.

let digitStr = " today's date is 7/08/2024, My pin codee is 829121. no- 7";

let pattern2 = /\d+/g;

let matches2 = digitStr.match(pattern2);

console.log(matches2);

//2. Character classes and Quantifiers

//Write a regular expression to match all words in a stirng that start with a capital letter. Log the matches.

let str3 = "Today is Wednesday. It is August currently. I am learning Javascript";

let pattern3 = /\b[A-Z][a-z]*\b/g;

let matches3 = str3.match(pattern3);
console.log(matches3);

//Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

let str4 = "Today's date is 7/08/2024, and my pin code is 82921. No- 7";

let pattern4 = /\d+/g;

let matches4 = str4.match(pattern4);

console.log(matches4); 

//3. Grouping and capturing
//Write a regular expression to capture the area code, central office code,and line number from a US phone number format(e.g - (123) 456-7890)

let phoneNumber = "(123)456-7890";

let pattern5 = /\((\d{3})\)(\d{3})-(\d{4})/;

let matches5 = phoneNumber.match(pattern5);

if(matches5){
    console.log("Area code:", matches5[1]);
    console.log("Central Office Code: ",matches5[2]);
    console.log("Line Number:", matches5[3]);
}else{
    console.log("No matches found");
}

//write a regular expression to capture the username and domain from an email address. Log the captures

function userEmail(email) {
    let pattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let matches = email.match(pattern);

    if (matches) {
        console.log("Username:", matches[1]);
        console.log("Domain:", matches[2]);
    } else {
        console.log("No match found");
    }
}

userEmail("username@gmail.c0m"); 
userEmail("username@gmail.com"); 
userEmail("user..name@gmail.com"); 

//4. Assertions and BOundries
//Write a regular expressions to match a word only if it is at the begining of a string. Log the matches

function matchBeginningWord(str) {
    let pattern = /^\b\w+\b/;
    let matches = str.match(pattern);

    if (matches) {
        console.log("Match found:", matches[0]);
    } else {
        console.log("No match found");
    }
}

matchBeginningWord("hello world");
matchBeginningWord("  hello world");

//Write a regular expression to match a word only if it is at the end of the string.

//5. Practical applications
//write a regular expression to validate a siple password (must include at least one uppercase letter, one lowercase, one digit, and one special character).

function validatePassword(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (pattern.test(password)) {
        return("Password is valid.");
    } else {
     return("Password is invalid.");
    }
}

console.log(validatePassword("#Robin123"));
console.log(validatePassword("#robin123"));
console.log(validatePassword("#Robinhood"));

//Write a regular expressioin to vallidate a URL. Log whether the URL is valid.

function validateURL(url) {
    let pattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+)(:\d+)?(\/[^\s]*)?$/;

    if (pattern.test(url)) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

validateURL("https://www.example.com"); 
validateURL("http://.com");











