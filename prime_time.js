// function isPrime(n){
//     if (n < 2){
//         return `${n} is not a prime number.`
//     }

//     for (let i = 2; i < n; i++){
//         if (n % i === 0) {
//             return `${n} is not a prime number.`
//         }
//     } 
//     return `${n} is a prime number.`
// } 

// console.log(isPrime(11))

// A prime number cannot be 1 and only has two factors - 1 and the number itself. How would you write this out?
// A prime number is a number that cannot be divided by any previous number. Ex - 5 should not be divisible by 3, 3, 2

// let num = 11
// for(let i = 1; i <= num; i++) {
//     // check if number is a factor
//     if(num % i == 0) {
//         console.log(i);
//     }
// }

// Declare a variable
// const num = 11;
// // Create a loop that searches for the next prime number (figure prime number out)
// mainLoop: for (let i=num; i<100; i++) { 
//     if (num === 1) continue mainLoop;

//     for (let j=num; j>1; j--) {
//         if (i % j === 0) continue mainLoop;
//     }

//     console.log(i);
//     break;
// }

// Start from given number and loop up until the next prime number

// Exit loop after finding the prime number

// let number =6;
// for (i=2; i<= number -1; i++){
//     while (number%i==0) {;
//         number++;
//     }
// }   
// console.log(number);






