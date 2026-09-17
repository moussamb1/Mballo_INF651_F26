"use strict";

// 1) Type Conversion
// Create a variable that stores a number as a string, convert it to a number using Number(), log the original and converted values with their data types, and then add 10 to the converted number and log the result.

// Create a variable that stores a number as a string
let numberAsString = "26";

// Convert the string to a number using Number()
let convertedNumber = Number(numberAsString);

// Log the original value and its data type
console.log("Original value:", numberAsString);
console.log("Original data type:", typeof numberAsString);

// Log the converted value and its data type
console.log("Converted value:", convertedNumber);
console.log("Converted data type:", typeof convertedNumber);

// Add 10 to the converted number and log the result
console.log("Result after adding 10:", convertedNumber + 10);

// What I learned: JavaScript stores numeric text as a string until I convert it, and then I can use it in normal arithmetic.

// 2) Type Coercion
// Create one string variable containing a number and one number variable, use them with +, -, and *, then log the actual results and their data types.

// Create one string variable containing a number and one number variable
let stringNumber = "10";
let numberValue = 5;

// Use the string and number with the + operator and log the result and its data type
let additionResult = stringNumber + numberValue;
console.log("Addition result:", additionResult);
console.log("Addition data type:", typeof additionResult);

// Use the string and number with the - operator and log the result and its data type
let subtractionResult = stringNumber - numberValue;
console.log("Subtraction result:", subtractionResult);
console.log("Subtraction data type:", typeof subtractionResult);

// Use the string and number with the * operator and log the result and its data type
let multiplicationResult = stringNumber * numberValue;
console.log("Multiplication result:", multiplicationResult);
console.log("Multiplication data type:", typeof multiplicationResult);

// What I learned: The + operator can join values into a string, while - and * force JavaScript to convert the string into a number before calculating.

// 3) True and False Values
// Create variables containing a non-empty string, an empty string, 0, a positive number, null, and undefined, then use Boolean() to check whether each value becomes true or false.

// Create variables with different truthy and falsy values
let nonEmptyString = "hello";
let emptyString = "";
let zeroValue = 0;
let positiveNumber = 42;
let nullValue = null;
let undefinedValue = undefined;

// Check each value with Boolean() and log the result
console.log("nonEmptyString:", Boolean(nonEmptyString));
console.log("emptyString:", Boolean(emptyString));
console.log("zeroValue:", Boolean(zeroValue));
console.log("positiveNumber:", Boolean(positiveNumber));
console.log("nullValue:", Boolean(nullValue));
console.log("undefinedValue:", Boolean(undefinedValue));

// What I learned: Empty strings, 0, null, and undefined are falsy, while non-empty strings and positive numbers are truthy.

// 4) if/else
// Create an age variable, check whether the age is 18 or older, and display the correct message for both eligible and not eligible cases.

// Create an age variable
let age = 18;

// Test the eligible case
if (age >= 18) {
  console.log("You are eligible.");
} else {
  console.log("You are not eligible yet.");
}

// Test a second age for the not eligible case
age = 16;

if (age >= 18) {
  console.log("You are eligible.");
} else {
  console.log("You are not eligible yet.");
}

// What I learned: The if/else statement checks a condition and chooses the correct block based on whether the condition is true or false.

// 5) else if
// Create a grade checker that assigns a letter grade based on the score rules and logs both the score and the grade.

// Test three different scores to cover multiple grade ranges
let score = 95;

if (score >= 90 && score <= 100) {
  console.log("Score:", score, "Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Score:", score, "Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Score:", score, "Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Score:", score, "Grade: D");
} else {
  console.log("Score:", score, "Grade: F");
}

score = 82;

if (score >= 90 && score <= 100) {
  console.log("Score:", score, "Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Score:", score, "Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Score:", score, "Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Score:", score, "Grade: D");
} else {
  console.log("Score:", score, "Grade: F");
}

score = 58;

if (score >= 90 && score <= 100) {
  console.log("Score:", score, "Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Score:", score, "Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Score:", score, "Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Score:", score, "Grade: D");
} else {
  console.log("Score:", score, "Grade: F");
}

// What I learned: The else if chain lets me test several conditions in order and use the first matching grade range.

// 6) switch
// Create a service variable, use a switch statement to display a message for each valid service, and include a default case for an unknown value.

// Create a variable named service with one of the valid campus service values
let service = "library";

// Test a valid service case
switch (service) {
  case "library":
    console.log("You can borrow books and study materials from the library.");
    break;
  case "tutoring":
    console.log("Tutoring is available for academic help and homework support.");
    break;
  case "parking":
    console.log("Parking services help with permits and campus access.");
    break;
  case "technology":
    console.log("Technology support helps with devices, Wi-Fi, and software issues.");
    break;
  default:
    console.log("Unknown service. Please contact campus administration.");
}

// Test another valid service value
service = "technology";

switch (service) {
  case "library":
    console.log("You can borrow books and study materials from the library.");
    break;
  case "tutoring":
    console.log("Tutoring is available for academic help and homework support.");
    break;
  case "parking":
    console.log("Parking services help with permits and campus access.");
    break;
  case "technology":
    console.log("Technology support helps with devices, Wi-Fi, and software issues.");
    break;
  default:
    console.log("Unknown service. Please contact campus administration.");
}

// Test an unknown service value
service = "health";

switch (service) {
  case "library":
    console.log("You can borrow books and study materials from the library.");
    break;
  case "tutoring":
    console.log("Tutoring is available for academic help and homework support.");
    break;
  case "parking":
    console.log("Parking services help with permits and campus access.");
    break;
  case "technology":
    console.log("Technology support helps with devices, Wi-Fi, and software issues.");
    break;
  default:
    console.log("Unknown service. Please contact campus administration.");
}

// What I learned: A switch statement is useful when one value can match several known cases, and the default case handles anything unexpected.

// 7) Ternary Operator
// Create a variable named isLoggedIn, then use a ternary operator to display a welcome message when true and a login prompt when false.

// Create a variable named isLoggedIn and test both true and false values
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

isLoggedIn = false;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

// What I learned: The ternary operator gives a short and readable way to write a simple true-or-false decision.

// 8) Student Status Program
// Create variables for the student name, age, score, major, and enrollment status, then check adulthood, assign the grade, use a ternary operator for enrollment, and show the final summary in a template literal.

// Create student variables
const studentName = "Emma Johnson";
const studentAge = 20;
const studentScore = 87;
const studentMajor = "Informatics";
const isEnrolled = true;

// Check whether the student is 18 or older
const adultStatus = studentAge >= 18 ? "Yes" : "No";

// Determine the grade using if/else if/else
let finalGrade;

if (studentScore >= 90) {
  finalGrade = "A";
} else if (studentScore >= 80) {
  finalGrade = "B";
} else if (studentScore >= 70) {
  finalGrade = "C";
} else if (studentScore >= 60) {
  finalGrade = "D";
} else {
  finalGrade = "F";
}

// Use a ternary operator to display the enrollment status
const enrollmentMessage = isEnrolled ? "Enrolled" : "Not Enrolled";

// Use a template literal to display the final summary
const studentSummary = `Student: ${studentName}
Age: ${studentAge}
Major: ${studentMajor}
Adult: ${adultStatus}
Score: ${studentScore}
Grade: ${finalGrade}
Status: ${enrollmentMessage}`;

console.log(studentSummary);

// What I learned: Combining a ternary operator, an if/else grade check, and a template literal makes it easier to create a clean summary from multiple values.
