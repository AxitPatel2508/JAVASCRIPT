// 1. WAP to check if a user is eligible for vote (age ≥ 18).

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


// 2.WAP to check whether a number is even or odd.

// let num = 11;

// if (num % 2 == 0) {
//     console.log("Number is Even !");
// }
// else {
//     console.log("Number is Odd !");
// }


// 3.WAP to check whether a number is divisible by 7 or not.

// const num = 57;

// if (num % 7 == 0) {
//     console.log("Number is Divisable by 7.");
// }
// else {
//     console.log("Number is Not Divisable by 7.");
// }


// 4.WAP to check whether a given year is leap year or not.
// const year = 1992;

// if (year % 4 == 0) {
//     console.log("Year is Leap Year.")
// }
// else {
//     console.log("Year is Leap Not Year.")
// }


// 5.WAP to check a number is positive, negative or neutral.

// let num = 30;

// if (num > 0) {
//     console.log(+num+" Number is Positive.");
// }
// else if (num < 0) {
//     console.log(+num+" Number is Negative.");
// }
// else {
//     console.log(+num+" Number is Netural.")
// }


// 6.WAP to find maximum between two numbers.

// let num1=20;
// let num2=50;

// if(num1>num2){
//     console.log("Number "+num1+ " is Maximum.");
// }
// else{
//     console.log("Number "+num2+" is Maximum.");
// }


// 7.WAP to find minimum between four numbers using nested if-else.

// let num1 = 20, num2 = 10, num3 = 100, num4 = 60;

// if (num1 < num2) {
//     if (num1 < num3) {
//         if (num1 < num4) {
//             console.log("Number 1 is Minimum.");
//         }
//         else {
//             console.log("Number 4 is Minimum.");
//         }
//     }
//     else {
//         if (num3 < num4) {
//             console.log("Number 3 is Minimum.");
//         }
//         else {
//             console.log("Number 4 is Minimum.");
//         }
//     }
// }
// else {
//     if (num2 < num3) {
//         if (num2 < num4) {
//             console.log("Number 2 is Minimum.");
//         }
//         else {
//             console.log("Number 4 is Minimum.");
//         }
//     }
//     else {
//         if (num3 < num4) {
//             console.log("Number 3 is Minimum.");
//         }
//         else {
//             console.log("Number 4 is Minimum.");
//         }
//     }

// }


// 8.WAP to find maximum between three numbers using ladder if-else.


// let num1 = 30, num2 = 40, num3 = 60;


// if (num1 > num2) {
//     console.log("Number 1 is Maximum.");
// }
// else if (num2 > num3) {
//     console.log("Number 2 is Maximum.");
// }
// else {
//     console.log("Number 3 is Maximum.");
// }


// 9.WAP to calculate electricity bill based on unit slabs.

// 1 to 20 - 1rs/unit
// 21 to 50 - 1.5rs/unit
// 51 to 100 - 2rs/unit
// 101 to 150 - 2.5rs/unit
// 150 above - 5rs/unit

// const units = 170;
// let total = 0;

// if (units >= 1 && units <= 20) {
//     total = units * 1;
//     console.log("Your bill is", total);//20
// }
// else if (units >= 21 && units <= 50) {
//     total = 20 + (units - 20) * 1.5;
//     console.log("Your bill is", total);//45
// }
// else if (units >= 51 && units <= 100) {
//     total = 20 + 45 + (units - 50) * 2;
//     console.log("Your bill is", total);//100
// }
// else if (units >= 101 && units <= 150) {
//     total = 20 + 45 + 100 + (units - 100) * 2.5;
//     console.log("Your bill is", total);//125
// }
// else if (units >= 150) {
//     total = 20 + 45 + 100 + 125 + (units - 150) * 5;
//     console.log("Your bill is", total);//100  total=390.
// }


// 10.WAP to calculate student grade using percentage of 5 subjects.

// let sub1=60,sub2=70,sub3=80,sub4=33,sub5=81;

// const total=sub1+sub2+sub3+sub4+sub5;

// console.log("Total =",total);

// const per=total/5;
// console.log("Percentage =",per);