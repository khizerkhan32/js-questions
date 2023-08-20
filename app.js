// ----------------------Q1--------------------------------
// const S = "My name is khizer";
// let reversedString = "";

// for (let i = S.length - 1; i >= 0; i--) {
//     reversedString += S[i];
// }

// console.log(reversedString);
// ---------------------------Q2-------------------------------
// const vowels = "aeiouAEIOU"; 

// let vowelCount = 0;

// for (let i = 0; i < S.length; i++) {
//     if (vowels.includes(S[i])) {
//         vowelCount++;
//     }
// }

// console.log(`Number of vowels: ${vowelCount}`);

// --------------------------Q3----------------------------------

// const B = "convert the first letter of each word in a sentence to uppercase";
// const C = B.replace(/\b\w/g, char => char.toUpperCase());

// console.log(C); 
// ---------------------Q4---------------------------------------------
// const v = "A man, a plan, a canal, Panama";
// const vv = v.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

// const VVV = vv === vv.split('').reverse().join('');

// console.log(VVV);
// --------------------------Q5----------------------------------------
// const numbers = [3, -2, 7, 1, -5, 9, -8, 4];
// let sum = 0;

// for (const number of numbers) {
//   if (number > 0) {
//     sum += number;
//   }
// }
// console.log("Sum of positive numbers:", sum);  
// ---------------------------------Q6------------------------------------

// const array = [3, 7, 2, 9, 5, 2, 8];
// const Find = 2;

// const index = array.indexOf(Find);

// if (index !== -1) {
//   console.log(`The element ${Find} is found at index ${index}.`);
// } else {
//   console.log(`The element ${Find} is not found in the array.`);
// }
// ----------------------------------Q7-------------------------------------
// const originalArray = [3, 7, 2, 9, 5, 2, 8, 7];
// const newArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//   if (newArray.indexOf(originalArray[i]) === -1) {
//     newArray.push(originalArray[i]);
//   }
// }
// console.log("Original array:", originalArray);
// console.log("Array with duplicates removed:", newArray);
// ------------------------------------Q8----------------------------------
// const array = [3, 7, 2, 9, 5, 2, 8, 7];
// Ascending order (Simple Nested Loop)
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp; }
//   }
// }
// console.log("Array sorted in ascending order:", array);
// Descending order (Simple Nested Loop)
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp; }
//   }
// }
// console.log("Array sorted in descending order:", array);
// ----------------------------------Q9---------------------------
// let number = 1;

// while (number <= 20) {
//   console.log(number);
//   number += 2;
// }
// --------------------------------------Q10----------------------------
// const number = 7;  
// let Number2 = 1;
// let Number3 = 1;
// do {
//     Number2 *= Number3;
//     Number3++;
// } while (Number3 <= number);
// console.log(`The factorial of ${number} is ${Number2}`);
// --------------------------------------Q11----------------------------------
// const person = {
//     firstName: "Khizer",
//     lastName: "Khan",
//     age: 22,
//     occupation: "Web Dev"
//   };
//   for (const property in person) {
//     if (person.hasOwnProperty(property)) {
//       console.log(`${property}: ${person[property]}`);
//     }
//   }
// ----------------------------------------Q12------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (const number of numbers) {
//   const doubled = number * 2;
//   doubledNumbers.push(doubled);
// }

// console.log("Original array:", numbers);
// console.log("Array with doubled elements:", doubledNumbers);
// ----------------------------------------------Q13----------------------------------
// const number = 7; 

// if (number % 2 ) {
//   console.log(`${number} is even.`);
// } else {
//   console.log(`${number} is odd.`);
// }
// --------------------------------------------Q14----------------------------------------
const num1 = 10;
const num2 = 25;
const num3 = 15;

const max = num1 >= num2
  ? (num1 >= num3 ? num1 : num3)
  : (num2 >= num3 ? num2 : num3);

console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${max}.`);

// ----------------------------------------Q15---------------------------------------------
const year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
