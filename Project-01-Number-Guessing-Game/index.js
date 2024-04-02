import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(systemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess the Number b/w 1 to 10"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, "sys");
if (userGuess == systemGeneratedNo) {
    console.log("Yaaa Your answer is correct \n You Won!");
}
else {
    console.log('Please Try Again, Best of luck for Next time!');
}
