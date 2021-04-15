// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age = +prompt(`Enter your age`);
if(age>=12 && age<=55)
  alert(`you can participate in the marathon`);
else if(age>=4 && age<=11)
  alert(`You are too young to participate in the marathon`)
else if(age<4)
  alert(`Hey Kiddo! Can You Walk ?`)  
else
  alert(`You are too old to participate in the marthon`)

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/

let n = prompt("Enter a number");
tempString = ""

for(i=1; i<=n; i++)
tempString += "e";

console.log(`h${tempString}llo`);

// [Your code goes here]

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
let number = prompt("Enter a number to calculate sum of first n natural number");
let sumOfNaturalNo =0;

for(let i=0; i<=number;i++)
sumOfNaturalNo += i;
alert(sumOfNaturalNo);

// [Your code goes here]

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
let aDigit = +prompt("Enter a number");
switch(aDigit){
  case 1:
    alert(`one`)
    break;
  case 2:
    alert(`two`)
    break;
  case 3:
    alert(`three`)
    break;
  case 4:
    alert(`four`)
    break;
  case 5:
    alert(`five`)
    break;
  case 6:
    alert(`six`)
    break;
  case 7:
    alert(`seven`)
    break;
  case 8:
    alert(`eight`)
    break;
  case 9:
    alert(`nine`)
    break;
  default:
    alert(`please try again`)
  }

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

let marks = +prompt("enter your marks between o-100");
switch(true){
  case marks>90 && marks<=100:
    alert("enter valid number");
    break;
    case marks>80 && marks<=90:
    alert("AB");
    break;
    case marks>70 && marks<=80:
    alert("BB");
    break;
    case marks>60 && marks<=70:
    alert("BC");
    break;
    case marks>50 && marks<=60:
    alert("CC");
    break;
    case marks>40 && marks<=50:
    alert("CD");
    break;
    case marks>30 && marks<=40:
    alert("enter DD");
    break;
    case marks<=30:
    alert("FF");
    break;
    default:
    alert("enter valid number");
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
let numA = +prompt("Enter a number");
let numB = +prompt("Enter another number");

numA>numB ? alert(`${numA} is larger`) : alert(`${numB} is larger`)
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
let product=0;

if(num1 * num2 *num3 < 0)
alert(`negative -`)
else
alert(`positive +`)


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let firstNum = +prompt("Enter first number");
let secondNnum= +prompt("Enter second number");
let operation = prompt("enter operation (Add, Sub, Mul, Div)");

if(operation=="Add")
alert(`sum: ${firstNum+secondNnum}`)

else if(operation=="Mul")
alert(`mul: ${firstNum*secondNnum}`)

else if(operation=="Div")
firstNum>secondNnum ? alert(`div: ${firstNum/secondNnum}`) : alert(`number one should be greater then number two`);

else if(operation=="Sub")
firstNum>secondNnum ? alert(`sub: ${firstNum-secondNnum}`) : alert(`number one should be greater then number two`);

else
alert("enter valid input");
