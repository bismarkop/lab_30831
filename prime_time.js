// A prime number cannot be 1 and only has two factors - 1 and the number itself. How would you write this out?
// A prime number is a number that cannot be divided by any previous number. Ex - 5 should not be divisible by 3, 3, 2




// Create a loop that searches for the next prime number and figure out the next prime number.)
// Start from given number and loop up until the next prime number
// Declare a variable
const num = 2;



mainLoop: for (let i=num; i<100; i++) {
    for (let j=num; j>1; j--) {
        if (i % j === 0) continue mainLoop;
    }

    if (i === 1) {
        console.log(`${i} is not a prime number.`)
    }

    console.log(i);
    break;
}



// Exit loop after finding the prime number

