// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("enter a number"));
if(num%2===0){
  console.log(`number is even`);
}
else{
  console.log(`number is odd`);
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt("Enter a number");
let numB = prompt("Enter another number");
if(numA>numB){
  alert(numA);
}else{
  alert(numB);
}

// 3. Convert the above code using`?` terniary operator
numA>numB ? alert(numA):alert(numB );

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("enter house name");
if(houseName==="stark"){
  console.log("Winter is coming");
}else if(houseName==="lannister"){
  console.log("A lannister always pays his dept");
}else{
  console.log("all men must die");
}


// 5. Convert the above code using`?` terniary operator
houseName === "stark" ? console.log("winter is coming") : 
houseName==="lannister" ? alert("A Lannister always pays his debt"):alert ("All man must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
 
let monthNumber = Number(prompt("Enter the month number"));
switch(monthNumber){
  case 1:
  alert("january, the no. of days are 31");
  break ;
  case 2:
  alert("february, the no. of days are 28");
  break;
  case 3:
  alert("march, the no. of days are 31");
  break;
  case 4:
  alert("april, the no. of days are 30");
  break;
  case 5:
  alert("may, the no. of days are 31");
  break;
  case 6:
  alert("june, the no. of days are 30");
  break;
  case 7:
  alert("july, the no. of days are 31");
  break;
  case 8:
  alert("august, the no. of days are 31");
  break;
  case 9:
  alert("september, the no. of days are 30");
  break;
  case 10:
  alert("october, the no. of days are 31");
  break;
  case 11:
  alert("november, the no. of days are 30");
  break;
  case 12:
  alert("december, the no. of days are 31");
  break;
  default:
    alert("Not a valid input");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter your salary"));
switch(true){
  case salary<=20000:
    alert(`In-hand amount ${salary -( (10/100) * salary)}`);
    break;
  case salary<=40000:
    alert(`In-hand amount ${salary - 20/100 * salary }`);
    break;
  case salary > 50000:
    alert(`In-hand amount ${salary - 30/100 * salary }`);  
    break;
    default:
      alert("Not a valid input");
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your marks"));
if(marks>100){
  alert("Marks can't be greater than 100");
}else if(marks > 80 && marks <= 100){
  alert("Grade A");
}else if(marks>50 && marks<=80){
  alert("Grade B");
}else if(marks>30 && marks<=50){
  alert("Grade C");
}else if(marks>0){
  alert("Grade D");
}

switch(true){
  case marks>100:
    alert("Marks can't be greater than 100");
    break;
  case(marks >80 && marks <= 100):
   alert("Grade A");
   break;
  case(marks>50 && marks<=80):
   alert("Grade B");
   break;
  case(marks>30 && marks<=50):
   alert("Grade C");
   break;
  case(marks>0):
   alert("Grade D");
   break;
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

 let weatherCond = prompt("What is weather like outside");
 switch(weatherCond){
   case "sunny":
     alert(`Wear a T-shirt`);
     break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert("Get a hanky");  
    break;
  case "freezing":
      alert("Get your sweeter on");
      break;
  default:
    alert(`Not a valid input`);
 }