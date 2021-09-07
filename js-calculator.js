const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
   
 reader.question("What would you like to calculate?(Use % to square root)", function(input){
            tokens = input.split(' ');

            mathSymbol = tokens[1];
            num1 = Number(tokens[0]);
            num2 = Number(tokens[2]);

            if(mathSymbol === "+"){
                console.log(num1 + num2)
            }
            else if(mathSymbol === "-"){
                console.log(num1 - num2)
            }
            else if(mathSymbol === "*"){
                console.log(num1 * num2)
            }
            else if(mathSymbol === "/"){
                console.log(num1 / num2)
            }
            else if(mathSymbol === "%"){
                if(num2 * num2 != num1)
                console.log(`${num2} is not a square root of ${num1}`)
                else {
                    console.log(`${num2} is a square root of ${num1}`)}
                
            }
            reader.close()

    });