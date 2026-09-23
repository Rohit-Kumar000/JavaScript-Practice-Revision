/**************************** Exercise 1 ****************************/

/*
Write a JavaScript program to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess was
Correct, greater or smaller than the original number.
100 - number of guesses is the score of the user the program is expected to terminate
once the number is guessed Number should be between 1 - 100.
*/

let randomNum = Math.floor(Math.random() * 100 + 1);
let guesses = 0;
while (guesses < 10) {
    let user = Number.parseInt(prompt("Entered the Number"));
    guesses++;

if (randomNum === user) {
    console.log("Congratulation! You Entered Correct Number");
    console.log(`You guessed it in ${guesses} attempts`);
    console.log(`Guesses Remaining: ${10 - guesses}`);
    break;
    
} else if (user > randomNum) {
    console.log("You Entered Greater Number. Try Again");
    console.log(`Guesses Remaining: ${10 - guesses}`);

} else {
    console.log("You Entered Smaller Number. Try Again");
    console.log(`Guesses Remaining: ${10 - guesses}`);

}
}