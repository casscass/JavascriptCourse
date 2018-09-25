/*****************************
 *  Variables and Data Types
 */
/*
let firstName = "John";
console.log(firstName);

let lastName = "Smith";
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = "teacher";
console.log(job);

// Variable naming rules
let years = 3;
let johnMark = "John and Mark";
*/




/*****************************
 *  Variables Mutation and Type Coersion
 */
/*
let firstName = "John";
let age = 28;

// Type coersion
console.log(firstName + " " + age);

let job, isMarried;
job = "teacher";
isMarried = false;
console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

Variable Mutation
 age = "twenty eight";
 job = "Driver";

alert( firstName + " is a " +  age + " year old " +  job + ". Is he married? " + isMarried);

let lastName = prompt("what is his last name?");
 console.log(firstName + ' ' + lastName);
*/




/*****************************
 *  Basic Operators 
*/
/*
let year, yearJohn, YearMark;
now =  2018;
ageJohn = 28;
ageMark = 33;

// Math Operator
yearJohn = now - ageJohn;
yearMark = now - ageMark ;

 console.log(yearJohn + ' '+ yearMark + ' ' + (now + 2) + ' '+ (now * 2) + ' ' + (now / 10));
 console.log(yearJohn);
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

// Logical Operator
let johnOlder = ageJohn < ageMark;
console.log(johnOlder); 
> false

// typeof operator
console.log(typeof johnOlder); 
console.log(typeof agejohn); 
console.log(typeof 'John is older'); 
*/

/*****************************
 *  Operator Precidence
 */
/*
let now =  2018;
let yearJohn = 1989;
let fullAge = 18;

// Multiple Operators
let isFullAge = now - yearJohn>= fullAge; //true
console.log(isFullAge);

// Grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

// Multipe assignments
let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //  32 - 6 // 
// 26
console.log(x, y); // 26  26

// More operators
// x = x * 2  or 
x *= 2;
console.log(x); // 52['-]
x +=10;
console.log(x); // 62
// x = x + 1; or
// x += 1; or
x ++;
console.log(x); // 63
x--;
console.log(x); // 62
*/


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
let massMark = 75; // kg
let heightMark = 1.70 //meters

let massJohn = 65; // kg
let heightJohn = 1.5; // meters

let BMImark = massMark / (heightMark * heightMark);
let BMIjohn = massJohn / (heightJohn * heightJohn);
console.log("Marks BMI is " + BMImark);
console.log("Johns BMI is " + BMIjohn);
let markHigher = BMImark >= BMIjohn;

console.log("Is mark's BMI higher than John's BMI?" + ' ' + markHigher);
*/

/*****************************
* If / else Statments
*/

/*
let firstName = 'John';
let civilstatus = 'single';

if (civilstatus === 'married'){
  console.log(firstName + ' is married ');
} else {
  console.log(firstName + ' will be soon!');
}

let isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married ');
} else {
  console.log(firstName + ' will be soon!');
}

let massMark = 75; // kg
let heightMark = 1.70 //meters

let massJohn = 65; // kg
let heightJohn = 1.5; // meters

let BMImark = massMark / (heightMark * heightMark);
let BMIjohn = massJohn / (heightJohn * heightJohn);

if (BMImark > BMIjohn) {
  console.log("Mark's BMI is higher than John's BMI?");
} else {
  console.log("John's  BMI is higher than Mark's BMI?");
}
*/

// let markHigher = BMImark >= BMIjohn;
// console.log("Is mark's BMI higher than John's BMI?" + ' ' + markHigher);

/*****************************
* Boolean Logic
*/
/*
let firstName = 'John';
let age = 20;

if (age < 13) {
  console.log(firstName + " " + "is a boy");
} else if (age >=13 && age <= 20) { //Between 13 & 20
  console.log(firstName + " " + "is a teenager");
} else if (age >=20 && age <= 30) { 
  console.log(firstName + " " + "is a young man");
} else {
  console.log(firstName + " " + "is a man");
}
*/

/*****************************
* FIZZ BUZZ
*/


// Print out numbers 1 to 100
// Replace all numbers divisible by 3 with “fizz”
// Replace all numbers divisible by 5 with “buzz”
// replace all numbers divisible by both 3 and 5 with “fizzbuzz”

/*
let fizzBuzzGame = function(){
let arr = []
for (let i=1; arr.length <100; i++) {
  // Replace all numbers divisible by 3 with “fizz”
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push('fizz buzz')
 } else if (i % 3 === 0) {
  arr.push('fizz')
  } else if (i % 5 === 0) {
    arr.push('buzz')
  }
  arr.push(i)
} 
return arr
}

console.log(fizzBuzzGame());
*/

/*****************************
* The Ternary Operator and Switch Statment
*/

let firstName = 'Jane';
let age = 23;

// Ternary Operator
age >= 18 ? console.log(firstName + ' can drink ') : console.log(firstName + ' is too young to drink ')

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
  let drink = 'beer';
} else {
  let drink = 'juice';
}
console.log(drink);

// Switch Statment can be cleaner than a if else
let job = 'cop';
// switch (job) {
//   case 'teacher': 
//   case 'instructor':
//     console.log(firstName + " Teaches people to code.");
//     break;
//   case 'driver':
//     console.log(firstName + " drives Uber in Sydney.");
//     break;
//   case 'designer':
//     console.log(firstName + " designes beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// If else
if (job = 'instructor' || 'teacher') {
  console.log(firstName + " Teaches people to code.");
} else if (job = 'driver') {
  console.log(firstName + " drives Uber in Sydney.");
} else if (job = 'designer') {
  console.log(firstName + " designes beautiful websites.");
} else if (job = 'driver') {
  console.log(firstName + " drives Uber in Sydney.");
} else  {
  console.log(firstName + " does something else.");
} 
