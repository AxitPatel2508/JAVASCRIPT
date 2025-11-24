// 1. Declare two variables and find their sum.

// let a = 50;
// let b = 20;

// const sum = a + b;

// console.log("Sum of " + a + " and " + b + " is =", sum);


// 2. Write a program to Calculate the area of a rectangle using variable.

// let length = 5;
// let width = 3;

// let rectangle = length * width;

// console.log("Area of Rectangle =", rectangle)


// 3. Swap two numbers using a third variable.

// let a = 10;
// let b = 20;
// let temp;


// console.log("Before Swapping !");
// console.log("A =", a);
// console.log("B =", b);

// temp = a;
// a = b;
// b = temp;

// console.log("\nAfter Swapping !");
// console.log("A =", a);
// console.log("B =", b);


// 4. Check whether a given number is even or odd using the modulus operator.

// let num = 81;

// if (num % 2 == 0) {
//     console.log(+num+" Number is Even.")
// }
// else {
//     console.log(+num+" Number is Odd.");
// }


// 5. Convert Celsius to Fehrenheit.

// let celsius = 50;

// let fehrenheit = (celsius * (9 / 5)) + 32;

// console.log("Fehrenheit =", fehrenheit);


// 6. Calculate the simple interest using P,R,T.

// let p=15000;
// let r=3;
// let t=5;

// console.log("Principle =",p);
// console.log("Rate in % =",r);
// console.log("Time in Year =",t);

// const SimpleInterest=(p*r*t)/100;

// console.log("Simple Interest =",SimpleInterest);


// 7. Find the average of three numbers.

// let num1 = 80;
// let num2 = 65;
// let num3 = 70;

// const average = Math.floor(num1 + num2 + num3 / 3);

// console.log("Average of Three Numbers =", average);


// 8. Demonstarte the use of increment(++) and decrement(--) operators.

// let a=25;
// let b=20;

// console.log("Before Increment And Decrement !");
// console.log("A =",a);
// console.log("B =",b);

// console.log("\nAfter Increment And Decrement !");
// a++;
// console.log("A =",a);

// b--;
// console.log("B =",b);


//9. Find the square and cube of a number using operators.

// let num=5;

// const square=num*num;
// console.log("Square of "+num+" Number =",square);

// const cube=num*num*num;
// console.log("Cube of "+num+" Number =",cube);


// 10.Compare two numbers and determine which one is greater.

// let num1 = 120;
// let num2 = 50;


// let ans = (num1 > num2) ? num1 : num2;

// console.log("Greater Number =", ans);

// 11. Check if a number lies between 10 and 20 using logical operators.

//     let num = 28;

// if (num >= 10 && num <= 20) {
//     console.log("Number lies between 10 and 20 .")
// }
// else {
//     console.log("Number Not lies between 10 and 20 .")
// }


// 12. Find the largest of three numbers using ternary operators.

// let num1 = 10;
// let num2 = 80;
// let num3 = 30;

// const largest = (num1 > num2) ? num1 : (num2 > num3) ? num2 : num3;
// console.log("Largest Number =",largest);


// 13.Convert minutes to seconds.

// let minutes=64;
// let seconds=minutes*60;

// console.log("Minutes =",minutes);
// console.log("Minutes to Seconds =",seconds);


// 14.Calculate the perimeter of a square.

// let side = 6;

// let area = 4 * side;

// console.log("Perimeter of Square =", area);


// 15.Find the remainder without using % operator.

// let divisor = 2;
// let Dividend = 5;

// let Quotient = Math.floor(Dividend / divisor);

// let Remainder = Dividend - divisor * Quotient;
// console.log("Remainder =", Remainder);


// 16.Check if a person is eligible to vote (age ≥ 18).

// let age = 10;

// if (age >= 18) {
//     if (age > 100) {
//         console.log("Invalid Age !");
//     }
//     else {
//         console.log("You are Eligible for Vote !");
//     }
// }
// else {
//     if (age <= 0) {
//         console.log("Invalid Age !");
//     }
//     else {
//         console.log("You are Not Eligible for Vote !");
//     }
// }



// 17.Calculate the final price after applying a discount percentage.

// let price = 2000;
// let discount = 15;

// let DiscPerc = price * discount / 100;

// let FinalPrice = price - DiscPerc;

// console.log("Final Price After Applying Discount =", FinalPrice);


// 18.Create a simple calculator performing +, –, ×, /, %.

// let a = 100;
// let b = 20;

// let choice = 4;

// switch (choice) {
//     case 1:
//         console.log("Addition of A + B =", a + b);
//         break;
//     case 2:
//         console.log("Subtraction of A - B =", a - b);
//         break;
//     case 3:
//         console.log("Multiplication of A * B =", a * b);
//         break;
//     case 4:
//         console.log("Division of A / B =", a / b);
//         break;
//     case 5:
//         console.log("Modulus of A % B =", a % b);
//         break;
//     default:
//         console.log("Invalid Input !");
// }


// 19.Check if marks are greater than 33 AND less than or equal to 100.


// let marks = 31;

// if (marks >= 33 && marks <= 100) {
//     console.log("You are Passed !");
// }
// else {
//     console.log("You are Faild !");
// }


// 20.Find the power of a number using the exponent operator.

// let base = 5;
// let exponent = 4;

// const power = base ** exponent;
// console.log("Power of Number =", power);
