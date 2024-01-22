//your JS code here. If required.
// script.js

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");
    }
    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
        alert("Fizz");
    }
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
        alert("Buzz");
    }
    // If none of the above conditions are met, just print the number
    else {
        alert(i.toString());
    }
}
