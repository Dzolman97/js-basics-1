const { Console } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Password Validator tool requirements;
// Welcome the user
// Prompt user for a password
// check the users password to meet;
//     - At least 10 charachters long
// if pasword meets all constraints, show a succes message to the user
// if it does not meet restraints, show failure message to the user

readline.question("Hello user! When you are ready please input the password you wish to validate.", function (answer) {
    if(answer.length >= 10){
        console.log("Success. Your password is looking great!")
    }else{console.log("Failure. Your Password needs more characters.")}
});
