const prompt = require("prompt-sync")();
// 1.Find which of the entered numbers is larger
//Daxil edilmiş  ədəddən hansının daha böyük olduğunu tapın

// let count = +prompt("Enter the count");
// function findBigNumber(count) {
//   let max = 0;

//   for (let i = 0; i <= count; i++) {
//     max = i;
//     console.log(max);
//   }

//   console.log("The largest number is:", max);
// }

// findBigNumber(count);

//2.Find the square root of the input number
//Daxil edilən ədədin kvadrat kökünü tapın

// let number = +prompt("Enter the number");
// let sqrt = Math.sqrt(number);
// console.log(sqrt);

//3.Find the cube of the number entered
//Daxil edilmiş ədədin kubunu tapın

// let number=+prompt("Enter the number");
// let powNumber=number**3
// console.log(powNumber)

//4.Find whether the input number is an integer or not
//Daxil olunan ədədin tam ədəd olub-olmadığını tapın
//first method
// let number = +prompt("Enter the number");
// if (number % 1 === 0) {
//   console.log("Whole number");
// } else {
//   console.log("Not whole");
// }

//second method
// let number=+prompt("Enter the number");
// let wholeNumber=(Number.isInteger(number));
// if(wholeNumber){
//   console.log("It is whole number")
// }
// else{
//   console.log("It is not a whole number")
// }

//5.Compare the sum of the digits of the entered 3-digit number with 10.
//Daxil edilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini 10 ilə müqayisə edin.

// let number = prompt("Enter a number with 3 digits");

// if (number.length !== 3) {
//   console.log("The number should be exactly 3 digits");
// } else {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += parseInt(number[i]);
//   }
//   if(sum>10){
//     console.log("Sum is bigger than 10")
//   }
//   else{
//     console.log("10 is bigger than sum")
//   }
//   console.log("The sum of the digits is: " + sum);
// }

//6. Check whether the middle digits of an input 4-digit number are even or odd
//daxil olan 4 rəqəmli ədədin orta rəqəmlərinin cüt və ya tək olduğunu yoxlayın

// let number = prompt("Enter the number");
// if (number.length !== 4) {
//   console.log("The number should be exactly 4 digits");
// } 
// else {
//   let firstDigit = parseInt(number[1]);
//   let secondDigit = parseInt(number[2]);

//   if (firstDigit % 2 === 0 && secondDigit % 2 === 0) {
//     console.log("Both even");
    
//   } 
//   else if (firstDigit % 2 !== 0 && secondDigit % 2 === 0) {
//     console.log("First digit is odd, second digit is even");
//   } 

//   else if(firstDigit % 2 === 0 && secondDigit % 2 !== 0){
//     console.log("First digit is even, second digit is odd")
//   }
//   else{
//     console.log("both odd")
//   }
// }

